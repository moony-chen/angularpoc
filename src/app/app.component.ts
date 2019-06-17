import { Component, Inject } from "@angular/core";
import { MailService } from "./mail.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.styl"]
})
export class AppComponent {
  title = "angularpoctest";

  routes = [
    { url: "", title: "Home" },
    { url: "contacts", title: "Contacts" },
    { url: "contacts/1", title: "One" },
    { url: "orders", title: "Orders" },
    { url: "clock", title: "Clock" },
    { url: "customform", title: "Custom Form" }
  ];

  constructor(@Inject("mail") private mail) {}

  onUpdate(id, text) {
    this.mail.update(id, text);
  }
}
