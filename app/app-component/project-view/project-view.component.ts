import { Component, OnInit, Input } from '@angular/core';
import {  Router, ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'my-project-view',
    templateUrl: 'project-view.component.html',
    styleUrls: ['project-view.component.css'],
    directives: [
        ROUTER_DIRECTIVES
    ]
})

export class ProjectViewComponent {
    // @Input('showOverlay') showOverlay: boolean = true;

    // constructor(private router: Router){}

    // hideOverlay() {
    //     this.showOverlay = false;
    //     this.router.navigate(['/']);
    // }
    
}
