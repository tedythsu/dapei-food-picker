import { Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { DrawLotsComponent } from './draw-lots/draw-lots.component';

export const routes: Routes = [
    { path: '', component: IndexComponent, pathMatch: 'full' },
    { path: 'draw-lots', component: DrawLotsComponent},
    { path: '**', redirectTo: ''}
];
