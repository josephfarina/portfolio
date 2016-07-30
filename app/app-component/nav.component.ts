import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, Router} from '@angular/router';
import { NavTitleService } from './../shared/services/nav-title.service';

@Component({
    directives: [ ROUTER_DIRECTIVES ],
    moduleId: module.id,
    providers: [NavTitleService],
    selector: 'my-nav',
    styles: [require('./../../scss/layout/nav.scss').toString()],
    template: `
    <nav [ngClass]="{ 'fade':  isNewRoute }">
        <div class="navigation-logo">
            {{routeName | uppercase}}
        </div>
        <div class="navigation-menu">
            <span class="p menu-item">RESUME</span>
            <span class="p menu-item">CONTACT</span>
        </div>
    </nav>
    `,
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
            this.routeName = this.navTitleService.getCurrentUrl();
        });
    }
}
