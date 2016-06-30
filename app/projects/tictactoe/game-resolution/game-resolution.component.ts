import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { GithubCodeService } from './../../../shared/services/github-code-retriever.service';

@Component({
    moduleId: module.id,
    selector: 'my-game-resolution',    
    template: `game resolution`,
    styleUrls: ['game-resolution.component.style.css'],
    directives: [ROUTER_DIRECTIVES]
})

export class GameResolutionComponent {}
