import { RouterConfig }          from '@angular/router';
import { GamePlayComponent }     from './game-play/game-play.component';

export const TicTacToeRoutes: RouterConfig = [
  { path: 'play',  component: GamePlayComponent },
];
