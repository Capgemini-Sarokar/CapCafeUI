import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { Cafe } from 'src/app/models/cafe.model';
import { CafeCafeService } from 'src/app/Services/cafe-cafe.service';
import { Observable } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';
import { Menu } from 'src/app/models/menu.model';
import { MenuService } from 'src/app/Services/menu.service';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {

  constructor(private cafeService: CafeCafeService, private menuService: MenuService) {
    this.searchBoxValue = "";

    this.cafeList = new Array<Cafe>();
    this.showedCafeList = new Array<Cafe>();
    this.cafeDataLoaded = false;
    this.cafeDataLoadingFailed = false;

    this.cafeFormOpen = false;

    this.menuOfCafe = new Array<Menu>();
    this.menuDataLoaded = false;
    this.menuDataLoading = true;
  }

  async ngOnInit(): Promise<void> {
    await this.loadCafeData();
    this.showedCafeList = this.cafeList;
    console.log(this.cafeList);
    //temporary
    // this.cafeDataLoaded = true;
    // let x = new Cafe();
    // x.cafeId = "1234";
    // x.cafeName = "Some X";
    // x.cafeOwner = "Some Y";
    // x.location = "Some Z";
    // this.cafeList.push(x);
    // this.cafeList.push(x);
    // this.cafeList.push(x);
    // this.cafeList.push(x);
    // this.cafeList.push(x);
  }

  ngOnDestroy(): void {

  }

  //---------------------------------------Search Box Functions------------------------------------------------
  private searchBoxValue: string;

  triggerResearch() {
    console.log(this.searchBoxValue);
  }

  performSearch(event: Event): void {
    console.log(event);
  }

  //---------------------------------------Data Aqusition------------------------------------------------------
  private cafeDataLoaded: boolean;
  private cafeDataLoadingFailed: boolean;
  private cafeList: Array<Cafe>;

  private showedCafeList: Array<Cafe>;

  async loadCafeData() {
    this.cafeDataLoadingFailed = false;
    this.cafeDataLoaded = false;
    await this.getAllCafeData().then(
      onresolve => {
        this.cafeList = onresolve;
        this.cafeDataLoaded = true;
        this.cafeDataLoadingFailed = false;
      }, () => {
        this.cafeDataLoaded = false;
        this.cafeDataLoadingFailed = true;
      });
  }

  getAllCafeData(): Promise<any> {
    return this.cafeService.getAllCafeDetails().toPromise().catch(this.handleError);
  }

  private handleError(error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

  //--------------------------------------------------------------------
  private cafeFormOpen: boolean;
  private form: FormGroup = new FormGroup({
    cafeId: new FormControl(''),
    cafeName: new FormControl(''),
    cafeOwner: new FormControl(''),
    location: new FormControl('')
  });

  openAddCafeForm(): void {
    this.cafeFormOpen = (this.cafeFormOpen) ? (false) : (true);
  }

  async saveNewCafeDetails() {
    let x = await this.sendNewCafeDetails().then(
      onresolve => {
        this.form.reset();
        this.openAddCafeForm();
        this.loadCafeData();
      },
      onreject => {
        console.log("Could not add cafe!");
      }
    );
  }

  sendNewCafeDetails(): Promise<any> {
    return this.cafeService.addCafe(this.form.value).toPromise();
  }

  cafeDeleteEventHandler(cafeId: string) {
    console.log("Cafe with Id", cafeId, 'deleted!');
    this.ngOnInit();
  }

  cafeUpdateEventHandler(cafeId: string) {
    console.log("Cafe with Id", cafeId, 'updated!');
    this.ngOnInit();
  }
  //-------------------------------------------Menu View Function
  private menuOfCafe: Array<Menu>;
  private currentCafeId: string;

  private menuDataLoading: boolean = false;
  private menuDataLoaded: boolean = false;

  displayedColumns: string[] = ['foodName', 'foodPrice', 'manage'];
  private cafeDataStructure: { [id: string]: Array<Menu>; } = {};

  public foodForm: FormGroup = new FormGroup({
    foodId: new FormControl(''),
    cafeId: new FormControl({ value: '', hidden: true }),
    foodName: new FormControl(''),
    foodPrice: new FormControl('')
  });

  menuViewRequestHandler(cafeId: string) {
    this.currentCafeId = cafeId;
    this.loadMenuData(cafeId);
  }

  async loadMenuData(cafeId: string) {
    delete this.menuOfCafe;
    this.menuDataLoading = true;
    this.menuOfCafe = new Array<Menu>();
    let x = await this.getMenuDataFromServer(cafeId).then(
      onresolve => {
        this.menuOfCafe = onresolve;
        this.cafeDataStructure[cafeId] = this.menuOfCafe;
        this.menuDataLoaded = true;
        this.menuDataLoading = false;
      },
      onreject => {
        this.menuDataLoaded = false;
        this.menuDataLoading = false;
      }
    );
  }

  getMenuDataFromServer(cafeId: string) {
    return this.menuService.getFoodItemsForCafe(cafeId).toPromise();
  }

  async addFoodItem(givenCafeId: string) {
    console.log("In Add Food Item");
    this.foodForm.patchValue({ cafeId: givenCafeId });
    console.log(this.foodForm.value);
    let x = await new Promise((resolve, reject) => {
      this.menuService.addFoodItem(this.foodForm.value).subscribe(
        item => {
          console.log(item);
          resolve(item);
        },
        error => {
          reject(error);
        }
      );
    }).catch(error => {
      console.log(error);
    });
    this.foodForm.reset();
    this.ngOnInit();
  }

  async removeFoodItem(cafeId: string, foodId: string) {
    console.log("In Remove");
    let x = await new Promise((resolve, reject) => {
      this.menuService.removeFoodItem(cafeId, foodId).subscribe(
        item => {
          console.log(item);
          resolve(item);
        },
        error => {
          reject(error);
        }
      );
    }).catch(error => {
      console.log(error);
    });
    this.ngOnInit();
  }
}
