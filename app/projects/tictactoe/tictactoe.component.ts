import { Component } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';


@Component({
    moduleId: module.id,
    selector: 'my-tictactoe',
    template: `
    <div class="col-sm-4 col-sm-offset-4 tictactoe">
        <ul class="nav nav-tabs">
            <li role="presentation" class="active"><a [routerLink]="['/tictactoe/new']">Game Information</a></li>
            <li role="presentation"><a [routerLink]="['/tictactoe/play']">Game Play</a></li>
            <li role="presentation"><a [routerLink]="['/tictactoe/end']">End Game</a>   </li>
        </ul>
        <router-outlet></router-outlet>
    </div>
    `,
    styleUrls: ['tictactoe.component.style.css'],
    directives: [ROUTER_DIRECTIVES]
})

export class TicTacToeComponent {
    constructor(private router: Router) { }
}
