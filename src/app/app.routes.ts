import { Routes } from '@angular/router';
import { ScrollComponent } from './modules/scroll/scroll.component';
import { Scroll2Component } from './modules/scroll2/scroll2.component';

export const routes: Routes = [
  {
    path: 'scroll',
    component: ScrollComponent,
  },
  {
    path: 'scroll2',
    component: Scroll2Component,
  },
];
