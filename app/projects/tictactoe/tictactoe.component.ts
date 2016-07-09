import { Component } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import { TicTacToeService, Player, TileType } from './tictactoe.service';


@Component({
    moduleId: module.id,
    selector: 'my-tictactoe',
    template: `
    <div class="col-md-6 col-md-offset-3 tictactoe">
        <ul class="nav nav-tabs">
            <li role="presentation" class="active"><a [routerLink]="['/tictactoe/new']">Game Information</a></li>
            <li role="presentation"><a [routerLink]="['/tictactoe/play']">Game Play</a></li>
            <li role="presentation"><a [routerLink]="['/tictactoe/end']">End Game</a>   </li>
        </ul>
        <router-outlet></router-outlet>
    </div>
    `,
    styleUrls: ['tictactoe.component.style.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [TicTacToeService]

})

export class TicTacToeComponent {
    constructor(private router: Router) { }
}
