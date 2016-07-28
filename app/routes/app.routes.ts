import { provideRouter, RouterConfig } from '@angular/router';
import { TicTacToeRoutes } from './../projects/tictactoe/tictactoe.routes';
import { HomeComponent } from './../app-component/home/home.component';
import { CalculatorComponent } from './../projects/calculator/calculator.component';
import { TicTacToeComponent } from './../projects/tictactoe/tictactoe.component';
import { WatchesComponent } from './../projects/watches/watches.component';
import { DrumMachineComponent} from './../projects/drum-machine/drum-machine.component';

export const routes: RouterConfig = [
    ...TicTacToeRoutes,
    { path: '', component: HomeComponent },
    { path: 'calculator', component: CalculatorComponent },
    { path: 'tictactoe', component: TicTacToeComponent},
    { path: 'drum', component: DrumMachineComponent},
    { path: 'watches', component: WatchesComponent}
];
export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
