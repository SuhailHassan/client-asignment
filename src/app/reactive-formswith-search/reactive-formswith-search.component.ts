import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { SearchService } from '../search.service';
import 'rxjs/Rx';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-reactive-formswith-search',
  templateUrl: './reactive-formswith-search.component.html',
  styleUrls: ['./reactive-formswith-search.component.scss']
})
export class ReactiveFormswithSearchComponent {

  searchField: FormControl;
  coolForm: FormGroup;
  
  result = {
    message : ""
  }
  tempresult : any;

  constructor(private searchService: SearchService, private fb: FormBuilder) {
    debugger;
    this.searchField = new FormControl();
    this.coolForm = fb.group({ search: this.searchField });
    //  this example is programmed to basically emit a search request when the user enters text in the textbox with a 400ms debounce or delay
    this.searchField.valueChanges      
      .debounceTime(400)
        .switchMap(search => this.searchService.search(search))
        .subscribe((result) => {
          debugger;
            this.result = result;
        });
  }
}
