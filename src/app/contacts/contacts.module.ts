import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ContactsComponent } from "./contacts.component";
import { RouterModule } from "@angular/router";
import { ContactComponent } from "./contact.component";

const routes = [
  { path: "", component: ContactsComponent },
  { path: ":id", component: ContactComponent }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [ContactsComponent, ContactComponent]
})
export default class ContactsModule {}
