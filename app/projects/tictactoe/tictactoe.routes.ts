import { RouterConfig }           from '@angular/router';
import { TicTacToeComponent }     from './tictactoe.component';
import { SetupComponent }         from './setup/setup.component';
import { BoardComponent }     from './board/board.component';
import { EndComponent } from './end/end.component';

export const TicTacToeRoutes: RouterConfig = [
  {
    component: TicTacToeComponent,
    path: 'tictactoe',
    children: [
      {
        component: SetupComponent,
        path: 'setup'
      },
      {
        component: BoardComponent,
        path: 'board'
      },
      {
        component: EndComponent,
        path: 'new'
      }
    ]
  }
];
