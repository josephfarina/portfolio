import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, Router} from '@angular/router';
import { ProjectViewComponent } from './project-view/project-view.component';
import { ProjectSelectionsComponent } from './project-selections/project-selections.component';
import { NavTitleService } from './../shared/services/nav-title.service';
import { CodeContainer } from './../shared/code-container/code-container.component';


@Component({
    directives: [
        ROUTER_DIRECTIVES,
        ProjectViewComponent,
        ProjectSelectionsComponent,
        CodeContainer],
    moduleId: module.id,
    providers: [NavTitleService],
    selector: 'my-app',
    templateUrl: 'app.component.html',
})

export class AppComponent implements OnInit {
    private showEnabled: boolean = false;
    private isActive: boolean = false;
    private routeName: string;
    private timeToAnimate: boolean = false;
    private interval: any;
    private projects: Project[] = [
        {
            caption: 'UI Built with scss and makes use of bootstrap',
            color: '#36D2C7',
            heading: 'Sequencer',
            number: '01',
        },
        {
            caption: 'An 808 inspired sequencer built with angular2',
            color: '#8EDB37',
            heading: 'Calculator',
            number: '02',
        },
        {
            caption: 'Play a couple games, eh?',
            color: '#FFAF27',
            heading: 'TicTacToe',
            number: '03',
        }
    ];
    private activeProject: Project = this.projects[0];

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

    intervalAnimate() {
        setTimeout(() => {
        this.timeToAnimate = true;
            console.log(this.timeToAnimate);
        }, 5500);
    }

    setActiveProject(project: Project) {
        this.activeProject = project;
        this.intervalAnimate();
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
