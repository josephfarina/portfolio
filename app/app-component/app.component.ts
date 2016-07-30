import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES} from '@angular/router';
import { NavComponent } from './nav.component';
import {ViewEncapsulation} from '@angular/core';

@Component({
    directives: [
        ROUTER_DIRECTIVES,
        NavComponent
    ],
    encapsulation: ViewEncapsulation.None,
    moduleId: module.id,
    selector: 'my-app',
    styles: [require('./../../scss/global.scss').toString()],
    template: `
    <my-nav></my-nav>
    <router-outlet></router-outlet>
    `,
})

export class AppComponent {}

