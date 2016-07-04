import { Component, OnInit, Input } from '@angular/core';
import {  Router, ROUTER_DIRECTIVES } from '@angular/router';
import { CodeContainer } from './../../shared/code-container/code-container.component';

@Component({
    moduleId: module.id,
    selector: 'my-project-view',
    templateUrl: 'project-view.component.html',
    styleUrls: ['project-view.component.css'],
    directives: [
        ROUTER_DIRECTIVES,
        CodeContainer
    ]
})

export class ProjectViewComponent {
    private isActive: boolean = false;
    toggleActive() {
        this.isActive = !this.isActive;
    }    
}
