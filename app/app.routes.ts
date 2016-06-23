import { provideRouter, RouterConfig } from '@angular/router';

import { CCFormComponent }  from './form/form.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { AppComponent, EmptyComponent } from './app.component'

export const routes: RouterConfig = [
    { path: '', component: EmptyComponent },
    { path: 'creditcardform', component: CCFormComponent },
    { path: 'calculator', component: CalculatorComponent }
];
export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];