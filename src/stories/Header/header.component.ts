import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'storybook-header',
  template: `<div class="container-fluid">
  <div class="row">
      <div class="col-12 col-lg-12">
          <nav class="row navbar navbar-expand-lg navbar-light bg-light">
              <div class="container-fluid">
                  <a class="navbar-brand" href="#">Poke List</a>
                  <div class="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                          <li class="nav-item">
                              <a class="nav-link" [routerLink]="[ '/' ]" routerLinkActive="active">Home</a>
                          </li>
                          <li class="nav-item">
                              <a class="nav-link" [routerLink]="[ '/list' ]" routerLinkActive="active">Listado de Pokemon</a>
                          </li>
                      </ul>
                  </div>
              </div>
          </nav>
      </div>
  </div>
</div>`,
  styleUrls: ['./header.css', '../style.css'],
})
export default class HeaderComponent {
  @Input()
  user: unknown = null;
}
