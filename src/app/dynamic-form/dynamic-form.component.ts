import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormField } from '../form-fields';
import { FormfieldControlService } from '../formfield-control.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {

  @Input() formFields: FormField<string>[] = [];
  form: FormGroup;

  constructor(private formfieldService: FormfieldControlService) { }

  ngOnInit(): void {
    this.form = this.formfieldService.toFormGroup(this.formFields);
  }

  onSubmit() {
    console.log("dsjndskjfnynpm install bootstrap");

  }
}
