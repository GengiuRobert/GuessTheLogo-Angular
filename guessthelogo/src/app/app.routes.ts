import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LogolevelcardComponent } from './logolevelcard/logolevelcard.component';
import { GamewonComponent } from './gamewon/gamewon.component';

export const routes: Routes = [

    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'logolevel', component: LogolevelcardComponent },
    { path: 'gamewon', component: GamewonComponent }

];
