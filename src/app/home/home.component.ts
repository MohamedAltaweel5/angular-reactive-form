import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { FormField } from '../form-fields';
import { FormfieldControlService } from '../formfield-control.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  jsonInput: string;
  formFields: Observable<FormField<any>[]>;
  constructor(private service: FormfieldControlService) { }

  reloadForm() {
    // console.log("dfgvdv", this.jsonInput);
    // var obj = JSON.parse(this.jsonInput);
    // var pretty = JSON.stringify(this.jsonInput, undefined, 4);
    // console.log("sljdfnskjdns", JSON.parse(this.jsonInput));

    // this.formFields = this.service.getFormFields(JSON.parse(this.cleanString(this.jsonInput)));
    console.log("this.cleanString(this.jsonInput");

  }
}
