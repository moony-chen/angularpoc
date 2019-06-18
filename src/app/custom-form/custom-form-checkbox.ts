import { Component, OnInit, OnDestroy } from "@angular/core";
import { FieldType } from "@ngx-formly/core";
import { startWith } from "rxjs/operators";

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
        (change)="onCheck()"
      />
      <span></span> {{ o.label }}
    </label>
  `
})
export class CustomFormFieldCheckbox extends FieldType
  implements OnInit, OnDestroy {
  checkboxOptions;
  data = [];
  unsub;

  ngOnInit() {
    this.checkboxOptions = this.field.templateOptions.options;
    this.unsub = this.formControl.valueChanges
      .pipe(startWith(this.formControl.value))
      .subscribe(
        vs =>
          (this.data = this.checkboxOptions.map(
            o => !!vs.find(v => v === o.value)
          ))
      );
  }

  onCheck() {
    this.formControl.setValue(
      this.data
        .map((d, index) => (d ? this.checkboxOptions[index].value : null))
        .filter(f => !!f)
    );
  }

  ngOnDestroy() {
    this.unsub.unsubscribe();
  }
}
