import { RouterModule, Routes } from '@angular/router';
import { AsynchronousPipeComponent } from './asynchronous-pipe/asynchronous-pipe.component';
import { ReactiveFormswithSearchComponent } from './reactive-formswith-search/reactive-formswith-search.component';
import { MergeMapComponent } from './merge-map/merge-map.component';
import { LazyLoadingonScrollComponent } from './lazy-loadingon-scroll/lazy-loadingon-scroll.component';
const appRoutes: Routes = [
    { path: 'asyncPipe', component: AsynchronousPipeComponent },
    { path: 'switchMap', component: ReactiveFormswithSearchComponent },
    { path: 'mergeMap', component: MergeMapComponent },
    { path: 'infiniteScroll', component: LazyLoadingonScrollComponent },
  ];
  export const routing = RouterModule.forRoot(appRoutes);
  