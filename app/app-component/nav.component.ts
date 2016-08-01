import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, Router} from '@angular/router';
import { NavTitleService } from './../shared/services/nav-title.service';
import {ViewEncapsulation} from '@angular/core';

@Component({
    directives: [ ROUTER_DIRECTIVES ],
    moduleId: module.id,
    providers: [NavTitleService],
    selector: 'my-nav',
    styles: [require('./../../scss/layout/nav.scss').toString()],
    template: `
    <nav [ngClass]="{
    'home':                     routeName === 'Joey Farina', 
    'project':                  routeName !== 'Joey Farina'
    }">
        <div [ngClass]="{ 'fade':  isNewRoute }">
                <a class="h5 navigation-logo" routerLink='/'> {{routeName | uppercase}}</a>
            <div class="navigation-menu">
                <a class="p menu-item" routerLink='resume'>RESUME</a>
                <span class="p menu-item"><a href="mailto:jrf61194@gmail.com">CONTACT</a></span>
            </div>
        </div>
    </nav>
    `
})

export class NavComponent {
    private routeName: string = '';
    private isNewRoute: boolean = false;
    constructor(
        private navTitleService: NavTitleService,
        private router: Router) {
        this.router.events.subscribe(route => {
            this.isNewRoute = true;
            setTimeout(() => {
                 this.isNewRoute = false;
             }, 1500);
            this.routeName = this.navTitleService.getCurrentUrl().trim();
        });
    }
}
