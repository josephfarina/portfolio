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
    private activeProject: Project;
    private projects: Project[] = [
        {
            number: '01',
            heading: 'Sequencer',
            caption: 'UI Built with scss and makes use of bootstrap',
            color: 'blue'
        },
        {
            number: '02',
            heading: 'Calculator',
            caption: 'An 808 inspired sequencer built with angular2',
            color: 'yellow'
        },
        {
            number: '03',
            heading: 'TicTacToe',
            caption: 'Play a couple games, eh?',
            color: 'purple'
        }
    ];
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

    setActiveProject(project: Project) {
        console.log(project)
        this.activeProject = project;
    }

    toggleActive() {
        this.isActive = !this.isActive;
    }
}

// stupid hack to have a blank router at times when others arent selected
@Component({ selector: 'blank', template: '' }) export class EmptyComponent { }

export interface Project {
    number: string;
    heading: string;
    caption: string;
    color: string;
}
