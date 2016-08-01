import { Component } from '@angular/core';

import { AlertComponent } from 'ng2-bootstrap/ng2-bootstrap';

import '../../public/css/styles.css';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  directives: [AlertComponent]
})
export class AppComponent { }
