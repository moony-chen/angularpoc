import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { map, switchMap, startWith } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from "rxjs";

interface Contact {
  id: number;
  name: string;
  image: string;
}

const urlbase = "http://localhost:3000/";

@Component({
  template: `
    <h2>{{ (contact$ | async)?.name }}</h2>
    <img [src]="(contact$ | async)?.image" />
  `
})
export class ContactComponent {
  contact$ = new BehaviorSubject({
    name: "Loading...",
    image: urlbase + "default.jpg"
  });

  constructor(private route: ActivatedRoute, private http: HttpClient) {
    route.params
      .pipe(
        map(p => p.id),
        switchMap(id => http.get<Contact>(urlbase + "people/" + id)),
        map(c => ({ ...c, image: `${urlbase}${c.image}` }))
      )
      .subscribe(this.contact$);
  }
}
