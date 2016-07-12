import { Component, Output, EventEmitter } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { HoverEffectDirective } from './../../shared/directives/hover-effect.directive';
@Component({
    moduleId: module.id,
    selector: 'my-project-selections',
    templateUrl: 'project-selections.component.html',
    styleUrls: ['project-selections.component.css'],
    directives: [
        ROUTER_DIRECTIVES,
        HoverEffectDirective
        ]
})

export class ProjectSelectionsComponent {
    @Output() projectClicked = new EventEmitter();

    toggleClicked() {
        this.projectClicked.emit(true);
    }

}
