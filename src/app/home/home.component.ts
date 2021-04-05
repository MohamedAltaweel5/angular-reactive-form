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
  jsonInput: string = '';
  formFields: Observable<FormField<any>[]>;
  errorMsg: string = '';
  constructor(private service: FormfieldControlService) { }

  reloadForm() {

    if (this.isValidJson(this.jsonInput)) {
      this.formFields = this.service.getFormFields(JSON.parse(this.jsonInput));
      this.errorMsg = ''
    }
    else {
      this.errorMsg = "Please enter valid JSON";
    }
  }

  isValidJson(str) {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
  }
}
