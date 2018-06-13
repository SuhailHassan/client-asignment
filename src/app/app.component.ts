

// Copyright 2016 Google Inc. All Rights Reserved.
// Use of this source code is governed by an MIT-style license that can be found in the LICENSE file at https://angular.io/license
                    

import { Component, ViewChild, ViewContainerRef, OnInit} from '@angular/core';
import { MdSidenav, MdDialog, MdDialogConfig, MdDialogRef } from '@angular/material';
import { Model, Message } from './model';
import { ModelsService } from './models.service';
import { RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MdSidenav;
  models: Model[];
  selectedModel: Model;
  isDarkTheme: boolean = false;
  showModels : boolean = true;

  constructor(private dialog: MdDialog,
              private vcr: ViewContainerRef,
              private modelsService: ModelsService,
            private _router : Router) { }

  ngOnInit() {
    this.models = this.modelsService.getModels();
  }

  openDialog() {
    // dialog config
    const config = new MdDialogConfig();
    config.viewContainerRef = this.vcr;
    // open dialog
    const dialog = this.dialog.open(SettingsDialogComponent, config);
  }

  addMessage() {
    // dialog config
    const config = new MdDialogConfig();
    config.viewContainerRef = this.vcr;
    // open dialog
    const dialog:any = this.dialog.open(AddMessageComponent, config);
    // pass data to dialog
    dialog.selectedModel = this.selectedModel;
    console.log(dialog);
  }

  showModelDetails(model:Model) {
    this.selectedModel = model;
    this.sidenav.open();
  }
  navigateAsyn() {
    console.log("navigating...");
    this.showModels = false;
    this._router.navigate(['/asyncPipe']);
  }
  switchMap() {
    console.log("navigatingto switchmap...");
    this.showModels = false;
    this._router.navigate(['/switchMap']);
  }
  mergeMap() {
    console.log("navigatingto mergeMap...");
    this.showModels = false;
    this._router.navigate(['/mergeMap']);
  }

}



@Component({
  selector: 'app-settings',
  template: `
  <label>Would you like to receive notifications?</label>
  <md-slide-toggle></md-slide-toggle>
  `
})
export class SettingsDialogComponent{

}

@Component({
  selector: 'add-message',
  template:`
  <form (submit)="addMessage()">
    <md-input-container>
      <input mdInput placeholder="Message" name="content" [(ngModel)]="content">
    </md-input-container>
    <button md-raised-button color="primary">Add Message</button>
  </form>
  `
})
export class AddMessageComponent {
  content = "";

  constructor(private dialogRef: MdDialogRef<AddMessageComponent>) {
  }

  addMessage() {
    const selectedModel = (<MdDialogRef<AddMessageComponent> & ISelectedModel> this.dialogRef).selectedModel;
    selectedModel.messages.push({
        who: selectedModel.name ,
        message: this.content
      });
    this.dialogRef.close();
  }
}

interface ISelectedModel {
  selectedModel: Model;
}


// Copyright 2016 Google Inc. All Rights Reserved.
// Use of this source code is governed by an MIT-style license that can be found in the LICENSE file at https://angular.io/license
            
