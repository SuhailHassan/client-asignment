

// Copyright 2016 Google Inc. All Rights Reserved.
// Use of this source code is governed by an MIT-style license that can be found in the LICENSE file at https://angular.io/license
                    

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent, SettingsDialogComponent, AddMessageComponent } from './app.component';
import { ModelsService } from './models.service';
import { SearchService } from './search.service';
import { MaterialModule} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AsynchronousPipeComponent } from './asynchronous-pipe/asynchronous-pipe.component';
import { RouterModule, Routes } from '@angular/router';
import { routing } from './routing';
import { ReactiveFormswithSearchComponent } from './reactive-formswith-search/reactive-formswith-search.component';
// import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { InfiniteScrollModule } from 'angular2-infinite-scroll';
import { MergeMapComponent } from './merge-map/merge-map.component';
import { LazyLoadingonScrollComponent } from './lazy-loadingon-scroll/lazy-loadingon-scroll.component';

@NgModule({
  declarations: [
    AppComponent,
    SettingsDialogComponent,
    AddMessageComponent,
    AsynchronousPipeComponent,
    ReactiveFormswithSearchComponent,
    MergeMapComponent,
    LazyLoadingonScrollComponent,
    
  ],
  entryComponents: [
    AppComponent,
    SettingsDialogComponent,
    AddMessageComponent,
    
  ],
  imports: [
    BrowserModule,
    InfiniteScrollModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MaterialModule,
    RouterModule,
    routing,
    FlexLayoutModule.forRoot()
  ],
  providers: [
    ModelsService,
    SearchService
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }



// Copyright 2016 Google Inc. All Rights Reserved.
// Use of this source code is governed by an MIT-style license that can be found in the LICENSE file at https://angular.io/license
            
