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
      [bsConfig]="{ containerClass: 'theme-audi' }"
      readonly="readonly"
    />
    {{ this.data }}
  `
})
export class CustomFormFieldDatePicker extends FieldType
  implements OnInit, OnDestroy {
  pickerOptions;
  data;
  unsub;

  ngOnInit() {
    this.pickerOptions = (this.field.templateOptions.options || [])[0];
    // this.unsub = this.formControl.valueChanges
    //   .pipe(startWith(this.formControl.value))
    //   .subscribe(vs => (this.data = vs));
  }

  ngOnDestroy() {
    // this.unsub.unsubscribe();
  }
}
