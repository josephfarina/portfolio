import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import { GithubCodeService } from './../../../shared/services/github-code-retriever.service';
import { TicTacToeService, Player, TileType } from './../tictactoe.service';

@Component({
  moduleId: module.id,
  selector: 'my-game-information',
  templateUrl: 'game-information.component.html',
  styleUrls: ['game-information.component.style.css'],
  directives: [ROUTER_DIRECTIVES]
})

export class GameInformationComponent {
  constructor(private router: Router, private ticTacToeService: TicTacToeService) { }
  //TODO: set user one and two in the service
  private userOneName: string;
  private userTwoName: string;
  private userOneTileType: TileType;
  private userTwoTileType: TileType;

  gameStart() {
    this.ticTacToeService.setUserOne(this.userOneName, this.userOneTileType);
    this.ticTacToeService.setUserOne(this.userTwoName, this.userTwoTileType);    
  }
}
