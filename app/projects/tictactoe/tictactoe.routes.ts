import { RouterConfig }          from '@angular/router';
import { TicTacToeComponent } from './tictactoe.component';
import { GamePlayComponent }     from './game-play/game-play.component';
import { GameInformationComponent } from './game-information/game-information.component';
import { GameResolutionComponent } from './game-resolution/game-resolution.component';

export const TicTacToeRoutes: RouterConfig = [
  {
    component: TicTacToeComponent,
    path: 'tictactoe',
    children: [
      {
        component: GameInformationComponent,
        path: 'new'
      },
      {
        component: GamePlayComponent,
        path: 'play'
      },
      {
        component: GameResolutionComponent,
        path: 'end'
      }
    ]
  }
];
