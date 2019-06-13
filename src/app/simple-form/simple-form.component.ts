import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Message } from "@angular/compiler/src/i18n/i18n_ast";

@Component({
  selector: "app-simple-form",
  template: `
    <input
      #myinput
      type="text"
      [(ngModel)]="message"
      [ngClass]="{ mousedown: isMouseDown }"
      (mousedown)="isMouseDown = true"
      (mouseup)="isMouseDown = false"
      (mouseleave)="isMouseDown = false"
    />
    <button (click)="update.emit({ text: message })">Click me</button>
  `,
  styles: [
    `
      :host {
        display: flex;
        margin-bottom: 10px;
      }

      .mousedown {
        border: 2px solid green;
      }

      input:focus {
        font-weight: bold;
        outline: none;
      }
    `
  ]
})
export class SimpleFormComponent implements OnInit {
  @Input() message;
  @Output() update = new EventEmitter();

  isMouseDown;

  constructor() {}

  ngOnInit() {}
}
