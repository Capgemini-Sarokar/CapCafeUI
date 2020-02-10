import { Component, OnInit, Input, DoCheck } from '@angular/core';
import { CafeCafeService } from 'src/app/Services/cafe-cafe.service';
import { CafeUserService } from 'src/app/Services/cafe-user.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-cafe-main',
  templateUrl: './cafe-main.component.html',
  styleUrls: ['./cafe-main.component.css']
})
export class CafeMainComponent implements OnInit, DoCheck {

  @Input()
  private userRole: string = "customer";

  private cafes = [];
  private imgUrls = ["../../../assets/a.jpg", "../../../assets/b.jpg", 
    "../../../assets/c.jpg", "../../../assets/a.jpg", "../../../assets/b.jpg", "../../../assets/c.jpg"];

  public form: FormGroup = new FormGroup({
    cafeId: new FormControl(''),
    cafeName: new FormControl(''),
    cafeOwner: new FormControl(''),
    location: new FormControl('')
  });

  // Booleans
  private cafeDetailsLoadingFailed: boolean = false;
  private panelOpenState: boolean = false;


  constructor(private cafeService: CafeCafeService, private userService: CafeUserService) { }


  ngOnInit(): void {
    this.cafeService.getAllCafeDetails().subscribe(
      items => {
        // item is an array of objects
        this.cafes = items;
      },
      error => {
        console.log(error);
        this.cafeDetailsLoadingFailed = true;
      }
    );
  }

  ngDoCheck(): void {
    if (this.userService.profile() !== null) {
      this.userRole = this.userService.role();
    } else {
      this.userRole = "user";
    }
  }

  async removeCafe(cafeId: string) {
    console.log(cafeId);
    let x = await new Promise((resolve, reject) => {
      this.cafeService.removeCafe(cafeId).subscribe(
        item => {
          console.log(item, "Cafe removed");
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

  async addCafe() {
    console.log("In Add Cafe");
    let x = await new Promise((resolve, reject) => {
      this.cafeService.addCafe(this.form.value).subscribe(
        item => {
          console.log(item);
          resolve(item);
        },
        error => {
          reject(error);
        }
      );
    }).catch(error => {
      console.log(error)
    });
    this.form.reset();
    this.ngOnInit();
  }
}
