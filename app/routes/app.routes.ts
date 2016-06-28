import { provideRouter, RouterConfig } from '@angular/router';

import { CCFormComponent }  from './../projects/form/form.component';
import { CalculatorComponent } from './../projects/calculator/calculator.component';
import { TicTacToeComponent } from './../projects/tictactoe/tictactoe.component';

import { EmptyComponent } from './../app-component/app.component';

export const routes: RouterConfig = [
    { path: '', component: EmptyComponent },
    { path: 'creditcardform', component: CCFormComponent },
    { path: 'calculator', component: CalculatorComponent },
    { path: 'tictactoe', component: TicTacToeComponent}
];
export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
