import { provideRouter, RouterConfig } from '@angular/router';

import { TicTacToeRoutes } from './../projects/tictactoe/tictactoe.routes';

import { HomeComponent } from './../app-component/home.component';
import { CalculatorComponent } from './../projects/calculator/calculator.component';
import { TicTacToeComponent } from './../projects/tictactoe/tictactoe.component';
import { WatchesComponent } from './../projects/watches/watches.component';
import { DrumMachineComponent} from './../projects/drum-machine/drum-machine.component';

export const routes: RouterConfig = [
  {
    component: HomeComponent,
    path: ''
  },
  {
    component: CalculatorComponent,
    path: 'calculator'
  },
  {
    component: TicTacToeComponent,
    path: 'tictactoe'
  },
  ...TicTacToeRoutes,
  {
    component: DrumMachineComponent,
    path: 'drum'
  },
  {
    component: WatchesComponent,
    path: 'watches'
  }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
