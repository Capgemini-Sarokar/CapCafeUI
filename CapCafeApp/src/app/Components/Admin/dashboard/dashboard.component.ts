import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { Cafe } from 'src/app/models/cafe.model';
import { CafeCafeService } from 'src/app/Services/cafe-cafe.service';
import { Observable } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {

  constructor(private cafeService: CafeCafeService) {
    this.searchBoxValue = "";

    this.cafeList = new Array<Cafe>();
    this.cafeDataLoaded = false;
    this.cafeDataLoadingFailed = false;

    this.cafeFormOpen = false;
  }

  async ngOnInit(): Promise<void> {
    await this.loadCafeData();

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

  getAllCafeData (): Promise<any> {
    return this.cafeService.getAllCafeDetails().toPromise().catch(this.handleError);
  }

  private handleError (error: Response | any) {
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
    this.cafeFormOpen = (this.cafeFormOpen)?(false):(true);
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
}
