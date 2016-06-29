import {bootstrap}    from '@angular/platform-browser-dynamic';
import {AppComponent} from './app-component/app.component';
import { HTTP_PROVIDERS} from '@angular/http';
import { APP_ROUTER_PROVIDERS } from './routes/app.routes';

bootstrap(AppComponent, [APP_ROUTER_PROVIDERS, HTTP_PROVIDERS])
.catch(err => console.error(err));


