import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

interface Contact {
  name: string;
}

@Component({
  selector: "app-contacts",
  template: `
    <div *ngFor="let c of contacts$ | async">
      <a [routerLink]="c.id">
        {{ c.name }}
      </a>
    </div>
  `,
  styles: []
})
export class ContactsComponent implements OnInit {
  private contacts$;

  constructor(private http: HttpClient) {
    this.contacts$ = http.get<Contact>("http://localhost:3000/people");
  }

  ngOnInit() {}
}
