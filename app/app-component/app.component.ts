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
    <div class="wide-screen">
        <my-nav></my-nav>
        <router-outlet></router-outlet>
    </div>
    <div class="small-screen">
        <h2>Hi, due to the use of the Web Audio API and Snap.svg This site is best viewed on a desktop.</h2>
        <a href="assets/JFRESUME.pdf" target="_blank">Here you can see my resume in the mean time.</a>
        <img my-hover-effect class="img-responsive resume" src="assets/JFRESUME.png" />
    </div>
    `,
})

export class AppComponent {}

