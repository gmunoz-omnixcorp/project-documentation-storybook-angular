import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component({
    selector: 'storybook-list',
    templateUrl: './list.component.html',
    styleUrls: ['../style.css'],
  })
export default class ListComponent {
  @Input()
  user: unknown = null;
}