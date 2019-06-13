import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class MailService {
  messages = [{ id: 0, text: `you got mail!` }, { id: 1, text: "testajsdfk" }];

  constructor() {}

  update(id, text) {
    this.messages = this.messages.map(m => (id === m.id ? { id, text } : m));
  }
}
