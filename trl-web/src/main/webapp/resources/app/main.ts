/**
 * Created by Marek.Hlavacek on 6/16/2016.
 */
import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import { appRouterProviders } from './app.routes';
import { HTTP_PROVIDERS } from '@angular/http';

bootstrap(AppComponent, [
    HTTP_PROVIDERS,
    appRouterProviders])
.catch(err => console.error(err));
