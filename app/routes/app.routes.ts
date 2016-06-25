import { provideRouter, RouterConfig } from '@angular/router';

import { CCFormComponent }  from './../projects/form/form.component';
import { CalculatorComponent } from './../projects/calculator/calculator.component';
import { AppComponent, EmptyComponent } from './../app-component/app.component'

export const routes: RouterConfig = [
    { path: '', component: EmptyComponent },
    { path: 'creditcardform', component: CCFormComponent },
    { path: 'calculator', component: CalculatorComponent }
];
export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];