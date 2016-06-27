import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { ProjectViewComponent } from './project-view/project-view.component';
import { ProjectSelectionsComponent } from './project-selections/project-selections.component';

import { CodeContainer } from './../shared/code-container/code-container.component';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    directives: [
        ROUTER_DIRECTIVES,
        ProjectViewComponent,
        ProjectSelectionsComponent,
        CodeContainer]
})

export class AppComponent implements OnInit {
    private showEnabled: boolean = false;

    ngOnInit() {
        this.showEnabled = false;
    }
}

// stupid hack to have a blank router at times when others arent selected
@Component({ selector: 'blank', template: '' }) export class EmptyComponent { }
