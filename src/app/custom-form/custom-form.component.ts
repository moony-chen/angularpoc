import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FormlyFormOptions, FormlyFieldConfig } from "@ngx-formly/core";

@Component({
  selector: "app-custom-form",
  template: `
    <!--
    <div class="section-list">
      <ul
        id="claim-accordion"
        class="accordion thin"
        data-accordion
        data-multi-expand="true"
        data-allow-all-closed="true"
      >
        <li
          class="accordion-item is-active"
          data-accordion-item
          ng-if="claimDetails.UIFormSections.CustomFormSection"
          rebind-foundation="#claim-accordion"
        >
          <a href="#" class="accordion-title">Custom Form Section</a>
          
          <div class="accordion-content" data-tab-content>-->
    <form [formGroup]="form" (ngSubmit)="submit()">
      <formly-form
        [model]="model"
        [fields]="fields"
        [options]="options"
        [form]="form"
      ></formly-form>

      <button type="submit" class="btn btn-primary submit-button">
        Submit
      </button>
      <button
        type="button"
        class="btn btn-default"
        (click)="options.resetModel()"
      >
        Reset
      </button>
    </form>
    <!--
          </div>
        </li>
      </ul>
    </div>-->

    {{ model | json }}
  `,
  styles: [``]
})
export class CustomFormComponent implements OnInit {
  form = new FormGroup({});
  model: any = {
    city: 2,
    employee: [2, 3],
    dob: new Date()
  };
  options: FormlyFormOptions = {
    formState: {
      awesomeIsForced: false
    }
  };
  fields: FormlyFieldConfig[] = [
    {
      key: "text",
      type: "input",
      templateOptions: {
        label: "Text",
        placeholder: "Formly is terrific!",
        required: false
      }
    },
    {
      key: "age",
      type: "input",
      templateOptions: {
        label: "Age",
        type: "text",
        placeholder: "How old are u",
        required: false
      }
    },
    {
      key: "city",
      type: "select",
      templateOptions: {
        label: "City",
        type: "number",
        required: false,
        options: [
          { value: 1, label: "Hangzhou" },
          { value: 2, label: "Shaoxin" },
          { value: 3, label: "Option 3" },
          { value: 4, label: "Option 4" }
        ]
      }
    },
    {
      key: "employee",
      type: "checkbox",
      templateOptions: {
        label: "Accept terms",
        options: [
          { value: 1, label: "Hangzhou" },
          { value: 2, label: "Shaoxin" },
          { value: 3, label: "Option 3" },
          { value: 4, label: "Option 4" }
        ]
      }
    },
    {
      key: "description",
      type: "textarea",
      templateOptions: {
        label: "Description",
        rows: 3,
        cols: 20
      }
    },
    {
      key: "dob",
      type: "datepicker",
      templateOptions: {
        label: "Date of Birth",
        type: "date",
        placeholder: "How old are u",
        required: false
      }
    }
  ];

  constructor() {}

  ngOnInit() {}
}
