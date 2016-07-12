import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, Router} from '@angular/router';
import { ProjectViewComponent } from './project-view/project-view.component';
import { ProjectSelectionsComponent } from './project-selections/project-selections.component';
import { NavTitleService } from './../shared/services/nav-title.service';
import { CodeContainer } from './../shared/code-container/code-container.component';


@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    providers: [NavTitleService],
    directives: [
        ROUTER_DIRECTIVES,
        ProjectViewComponent,
        ProjectSelectionsComponent,
        CodeContainer]
})

export class AppComponent implements OnInit {
    private showEnabled: boolean = false;
    private isActive: boolean = false;
    private routeName: string;
    constructor(
        private navTitleService: NavTitleService,
        private router: Router) {
        this.router.events.subscribe(route => {
            this.routeName = this.navTitleService.getCurrentUrl();
        });
    }

    ngOnInit() {
        this.showEnabled = false;
    }

    toggleActive() {
        this.isActive = !this.isActive;
    }
}

// stupid hack to have a blank router at times when others arent selected
@Component({ selector: 'blank', template: '' }) export class EmptyComponent { }
