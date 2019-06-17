import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SimpleFormComponent } from "./simple-form/simple-form.component";
import { MailService } from "./mail.service";
import { HomeComponent } from "./home/home.component";
import { HttpClientModule } from "@angular/common/http";
import { StoreModule } from "@ngrx/store";
import { reducers, metaReducers } from "./reducers";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from "../environments/environment";
import { DataTablesModule } from "angular-datatables";
import { CustomFormComponent } from "./custom-form/custom-form.component";
import { ReactiveFormsModule } from "@angular/forms";
import { FormlyModule } from "@ngx-formly/core";
import { FormlyBootstrapModule } from "@ngx-formly/bootstrap";
import { CustomFormFieldCheckbox } from "./custom-form/custom-form-checkbox";

@NgModule({
  declarations: [
    AppComponent,
    SimpleFormComponent,
    HomeComponent,
    CustomFormComponent,
    CustomFormFieldCheckbox
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    DataTablesModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
    ReactiveFormsModule,
    FormlyModule.forRoot({
      types: [{ name: "checkbox", component: CustomFormFieldCheckbox }]
    }),
    FormlyBootstrapModule
  ],
  providers: [{ provide: "mail", useClass: MailService }],
  bootstrap: [AppComponent]
})
export class AppModule {}
