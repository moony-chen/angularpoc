import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { CustomFormComponent } from "./custom-form/custom-form.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  {
    path: "contacts",
    loadChildren: () =>
      import("./contacts/contacts.module").then(m => m.default)
  },
  {
    path: "orders",
    loadChildren: () =>
      import("./orders/orders.module").then(m => m.OrdersModule)
  },
  {
    path: "clock",
    loadChildren: () => import("./clock/clock.module").then(m => m.ClockModule)
  },
  {
    path: "customform",
    component: CustomFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
