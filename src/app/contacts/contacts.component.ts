import { Component, OnInit, OnDestroy } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Subject } from "rxjs";
import { Router } from "@angular/router";

interface Contact {
  name: string;
  id: number;
  gender: string;
}

@Component({
  selector: "app-contacts",
  template: `
    <table
      datatable
      [dtOptions]="dtOptions"
      [dtTrigger]="dtTrigger"
      class="row-border hover"
    >
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Gender</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let c of contacts">
          <td>{{ c.id }}</td>
          <td>{{ c.name }}</td>
          <td>{{ c.gender }}</td>
        </tr>
      </tbody>
    </table>
  `,
  styles: []
})
export class ContactsComponent implements OnInit, OnDestroy {
  private contacts: Contact[];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  constructor(private http: HttpClient, private router: Router) {
    http.get<Contact[]>("http://localhost:3000/people").subscribe(cs => {
      this.contacts = cs;
      this.dtTrigger.next();
    });

    this.dtOptions = {
      pagingType: "full_numbers",
      pageLength: 10,
      rowCallback: (row: Node, data: any[] | Object, index: number) => {
        const self = this;
        // Unbind first in order to avoid any duplicate handler
        // (see https://github.com/l-lin/angular-datatables/issues/87)
        $("td", row).unbind("click");
        $("td", row).bind("click", () => {
          self.someClickHandler(data);
        });
        return row;
      }
    };
  }

  someClickHandler(data) {
    console.log(data);
    this.router.navigate(["contacts/" + data[0]]);
  }

  ngOnInit() {}

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
}
