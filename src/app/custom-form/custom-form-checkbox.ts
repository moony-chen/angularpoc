import { Component, OnInit } from "@angular/core";
import { FieldType } from "@ngx-formly/core";

@Component({
  selector: "formly-field-checkbox",
  template: `
    <label
      style="font-weight: normal;"
      *ngFor="let o of checkboxOptions; let i = index"
    >
      <input
        type="checkbox"
        class="value"
        [(ngModel)]="data[i]"
        (change)="onChange()"
      />
      <span></span> {{ o.label }}
    </label>
  `
})
export class CustomFormFieldCheckbox extends FieldType implements OnInit {
  checkboxOptions;
  data = [];

  ngOnInit() {
    this.checkboxOptions = this.field.templateOptions.options;
    let values: any[] = this.formControl.value;
    this.data = this.checkboxOptions.map(
      o => !!values.find(v => v === o.value)
    );
  }

  onChange() {
    this.formControl.setValue(
      this.data
        .map((d, index) => (d ? this.checkboxOptions[index].value : null))
        .filter(f => !!f)
    );
  }
}
