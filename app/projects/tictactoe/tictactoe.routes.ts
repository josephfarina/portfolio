import { RouterConfig }          from '@angular/router';
import { TicTacToeComponent } from './tictactoe.component';
import { GamePlayComponent }     from './game-play/game-play.component';
import { GameInformationComponent } from './game-information/game-information.component';
import { GameResolutionComponent } from './game-resolution/game-resolution.component';

export const TicTacToeRoutes: RouterConfig = [
  {
    path: 'tictactoe',
    component: TicTacToeComponent,
    children: [
      { path: 'new',  component: GameInformationComponent },
      { path: 'play', component: GamePlayComponent },
      { path: 'end',  component: GameResolutionComponent }
    ]
  }
];
