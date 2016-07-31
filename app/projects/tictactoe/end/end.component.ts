import { Component, OnInit } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import { TicTacToeService, Player } from './../tictactoe.service';

@Component({
    moduleId: module.id,
    selector: 'my-end',
    templateUrl: 'end.component.html',
    styles: [require('./../../../../scss/projects/tictactoe/tictactoe-setup-end.scss').toString()],
    directives: [ROUTER_DIRECTIVES]
})

export class EndComponent implements OnInit {
    private winner: Player;
    private isTie: boolean = false;
    constructor(private ticTacToeService: TicTacToeService, private router: Router) {}
    ngOnInit() {
        this.winner = this.ticTacToeService.getWinner();
        if (this.winner === null) {
            this.isTie = true;
        }
    }

    playAgain() {
        this.router.navigate(['/tictactoe', '/play']);
    }

    newGame() {
        this.ticTacToeService.resetGame();
        this.router.navigate(['/tictactoe', '/new']);
    }
}
