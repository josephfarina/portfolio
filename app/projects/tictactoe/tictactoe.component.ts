import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { TicTacToeService } from './tictactoe.service';

@Component({
    directives: [ROUTER_DIRECTIVES],
    moduleId: module.id,
    selector: 'my-tictactoe',
    styles: [require('./../../../scss/projects/tictactoe/tictactoe.scss').toString()],
    templateUrl: './tictactoe.component.html',
    providers: [TicTacToeService],
})

export class TicTacToeComponent {}
