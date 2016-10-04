// Angular Imports
import { Component } from '@angular/core';
import { Router } from '@angular/router';

import '../../../../../public/css/styles.css';

@Component({
    selector: 'rh-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent {

    constructor(
      private router: Router
    ) { }

}
