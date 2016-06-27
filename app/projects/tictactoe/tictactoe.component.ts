import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'my-tictactoe',
    templateUrl: 'tictactoe.component.html',
    styleUrls: ['tictactoe.component.style.css'],
    directives: [ROUTER_DIRECTIVES]
})

export class TicTacToeComponent {
    
}