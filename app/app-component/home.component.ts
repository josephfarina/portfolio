import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, Router} from '@angular/router';
import { NavTitleService } from './../shared/services/nav-title.service';

@Component({
    directives: [
        ROUTER_DIRECTIVES
        ],
    moduleId: module.id,
    providers: [NavTitleService],
    selector: 'my-home',
    styles: [require('./../../scss/layout/home.scss').toString()],
    templateUrl: 'home.component.html'
})

export class HomeComponent {
    private projects: Project[] = MY_PROJECTS;
    private activeProject: Project = this.projects[0];
    constructor(private router: Router) {
        this.router.events.subscribe(route => { this.activeProject = this.projects[0]; });
    }

    setActiveProject(project: Project) {
        this.activeProject = project;
    }
}

export interface Project {
    number: string;
    heading: string;
    caption: string;
    color: string;
    link: string;
}

export const MY_PROJECTS: Project[] = [
        {
            caption: 'UI Built with scss and makes use of bootstrap',
            color: '#36D2C7',
            heading: 'Sequencer',
            link: '/drum',
            number: '01',
        },
        {
            caption: 'Stock charts built with D3 that communicate with an API',
            color: '#F23568',
            heading: 'Stocks',
            link: '/stocks',
            number: '04',
        },
        {
            caption: 'An 808 inspired sequencer built with angular2',
            color: '#8EDB37',
            heading: 'Calculator',
            link: '/calculator',
            number: '02',
        },
        {
            caption: 'Play a couple games, eh?',
            color: '#FFAF27',
            heading: 'TicTacToe',
            link: '/tictactoe/play',
            number: '03',
        }
    ];