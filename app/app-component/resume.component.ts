import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES} from '@angular/router';
import { NavComponent } from './nav.component';
import {ViewEncapsulation} from '@angular/core';
import { HoverEffectDirective } from './../shared/directives/hover-effect.directive';
@Component({
    directives: [
        ROUTER_DIRECTIVES,
        HoverEffectDirective
    ],
    moduleId: module.id,
    selector: 'my-resume',
    styles: [
        `
        .resume-wrapper {
            min-height: 100vh;
            background-color: #EE4236;
        }
        .resume {
            margin: auto;
        }
        `
    ],
    template: `
    <div class="resume-wrapper">
    <img my-hover-effect class="img-responsive resume" src="assets/JFRESUME.png" />
    </div>
    `,
})


export class ResumeComponent {}

