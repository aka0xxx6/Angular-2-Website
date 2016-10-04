import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import '../../../../../public/css/styles.css';

@Component({
    selector: 'rh-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {


    constructor(
        private router: Router
    ) { }

}
