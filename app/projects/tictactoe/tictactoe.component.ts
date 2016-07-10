import { Component } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import { TicTacToeService, Player, TileType } from './tictactoe.service';


@Component({
    moduleId: module.id,
    selector: 'my-tictactoe',
    template: `
    <div class="col-md-6 col-md-offset-3 tictactoe">
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
