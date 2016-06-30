import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { GithubCodeService } from './../../../shared/services/github-code-retriever.service';

@Component({
    moduleId: module.id,
    selector: 'my-game-information',    
    template: `game information`,
    styleUrls: ['game-information.component.style.css'],
    directives: [ROUTER_DIRECTIVES]
})

export class GameInformationComponent {

}