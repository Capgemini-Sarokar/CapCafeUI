import { Component, OnInit, Input } from '@angular/core';
import { Cafe } from 'src/app/models/cafe.model';
import { FormGroup, FormControl } from '@angular/forms';
import { CafeCafeService } from 'src/app/Services/cafe-cafe.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cafe-widget',
  templateUrl: './cafe-widget.component.html',
  styleUrls: ['./cafe-widget.component.css']
})
export class CafeWidgetComponent implements OnInit {

  @Input() private cafe: Cafe;

  private form: FormGroup;
  private formSubmitted: boolean;

  constructor(private cafeService: CafeCafeService) { 
    this.cafe = new Cafe();
    this.formSubmitted = false;

    this.editMode = false;
  }

  ngOnInit() {
    this.form = new FormGroup({
      cafeId: new FormControl({value: this.cafe.cafeId}),
      cafeName: new FormControl({value: this.cafe.cafeName, disabled: true}),
      cafeOwner: new FormControl({value: this.cafe.cafeOwner, disabled: true}),
      location: new FormControl({value: this.cafe.location, disabled: true})
    });
  }

  //------------------------------------Ripple Controls
  private rippleCentered: boolean = false;
  private rippleDisabled: boolean = false;
  private rippleUnbounded: boolean = false;

  openMenu(): void {
    if (!this.rippleDisabled) {
      console.log("In open Menu");
    } else {

    }
  }

  //-----------------------------------Form Controls
  private editMode: boolean;
  enableEditMode(): void {
    this.editMode = true;
    this.rippleDisabled = true;
    this.form.get('cafeId').enable();
    this.form.get('cafeName').enable();
    this.form.get('cafeOwner').enable();
    this.form.get('location').enable();
  }

  disableEditMode(): void {
    this.editMode = false;
    this.rippleDisabled = false;
    this.form.setValue({cafeId: this.cafe.cafeId, cafeName: this.cafe.cafeName, location: this.cafe.location, cafeOwner: this.cafe.cafeOwner});
    this.form.get('cafeId').disable();
    this.form.get('cafeName').disable();
    this.form.get('cafeOwner').disable();
    this.form.get('location').disable();
  }

  async saveUpdatedCafeDetails() {
    let x = await this.sendUpdatedFormData().then(
      onresolve => {

      },
      onreject => {
        
      }
    );
  }

  sendUpdatedFormData(): Promise<any> {
    return this.cafeService.updateCafe(this.form.value).toPromise().catch(this.handleError);
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

  async deleteCafe() {
    console.log(this.cafe.cafeId);
    let x = await this.sendDeleteRequest(this.cafe.cafeId).then(
      onresolve => {
        console.log("Cafe Removed!");
      },
      onreject => {
        console.log("Could not remove cafe");
      }
    );
  }

  sendDeleteRequest(cafeId: string) {
    return this.cafeService.removeCafe(cafeId).toPromise();
  }
}
