import { Component, OnInit, Input } from '@angular/core';
import {  Router, ROUTER_DIRECTIVES } from '@angular/router';
import { CodeContainer } from './../../shared/code-container/code-container.component';

@Component({
    moduleId: module.id,
    selector: 'my-project-view',
    templateUrl: 'project-view.component.html',
    directives: [
        ROUTER_DIRECTIVES,
        CodeContainer
    ]
})

export class ProjectViewComponent {
    private isActive: boolean = false;
}
