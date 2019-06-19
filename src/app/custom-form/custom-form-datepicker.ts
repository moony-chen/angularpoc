import { Component, OnInit, OnDestroy } from "@angular/core";
import { FieldType } from "@ngx-formly/core";

@Component({
  selector: "formly-field-datepicker",
  template: `
    <input
      class="bs-datepicker-input"
      type="text"
      placeholder="Datepicker"
      bsDatepicker
      [formControl]="formControl"
      [formlyAttributes]="field"
      [bsConfig]="bsConfig"
      readonly="readonly"
    />
  `
})
export class CustomFormFieldDatePicker extends FieldType
  implements OnInit, OnDestroy {
  pickerOptions;
  data;
  unsub;
  bsConfig;

  ngOnInit() {
    this.pickerOptions = (this.field.templateOptions.options || [])[0] || {};
    this.bsConfig = Object.assign({}, this.pickerOptions.bsConfig || {}, {
      containerClass: "theme-audi"
    });
    // this.unsub = this.formControl.valueChanges
    //   .pipe(startWith(this.formControl.value))
    //   .subscribe(vs => (this.data = vs));
  }

  ngOnDestroy() {
    // this.unsub.unsubscribe();
  }
}
