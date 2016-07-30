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
            <span  class="h5 navigation-logo">
                {{routeName | uppercase}}
            </span>
            <div class="navigation-menu">
                <span class="p menu-item">RESUME</span>
                <span class="p menu-item">CONTACT</span>
            </div>
        </div>
    </nav>
    `
})

// TODO: Fix glitch on calc animation -- and make it so it doesnt swing down on project pages

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
