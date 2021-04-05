import { Injectable } from '@angular/core';
import { FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { of } from 'rxjs';
import { FormField } from '../app/form-fields';

@Injectable({
  providedIn: 'root'
})
export class FormfieldControlService {

  constructor() { }

  toFormGroup(inputs: FormField<string>[]): FormGroup {
    if (inputs) {
      const group: any = {};
      inputs.forEach(input => {
        let validator: ValidatorFn[] = input.required ? [Validators.required] : [];
        switch (input.validator) {
          case "email":
            validator.push(Validators.email);
            break;
          default:
            break;
        }
        group[input.key] = validator.length > 0 ? new FormControl(input.value || '', validator)
          : new FormControl(input.value || '');
      });

      return new FormGroup(group);
    }
  }

  getFormFields(data) {
    if (data) {
      var inputs: FormField<string>[] =
        data.map((entry) => {
          return new FormField<string>(entry);
        })
      return of(inputs.sort((a, b) => a.order - b.order));
    }
  }

}
