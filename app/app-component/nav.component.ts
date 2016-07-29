import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, Router} from '@angular/router';
import { NavTitleService } from './../shared/services/nav-title.service';

@Component({
    directives: [ ROUTER_DIRECTIVES ],
    moduleId: module.id,
    providers: [NavTitleService],
    selector: 'my-nav',
    template: `
    <nav [ngClass]="{ 'animated fadeInDown':  isNewRoute }">
        <div class="navigation-logo">
            <h5>{{routeName | uppercase}}</h5>
        </div>
        <div class="navigation-menu">
            <span class="small-text menu">resume</span>
            <span class="small-text menu">contact</span>
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
