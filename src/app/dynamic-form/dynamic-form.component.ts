import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormField } from '../form-fields';
import { FormfieldControlService } from '../formfield-control.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnChanges {

  @Input() formFields: FormField<string>[] = [];
  formButtons: FormField<string>[] = [];
  form: FormGroup;

  constructor(private formfieldService: FormfieldControlService) { }

  ngOnChanges(): void {
    this.formButtons = this.formFields.filter(field => {
      if (field.type == "button")
        return field;
    });
    this.form = this.formfieldService.toFormGroup(this.formFields);
  }

  onSubmit() {
    console.log("Submit clicked");
  }
}
