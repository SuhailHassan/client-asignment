import { Component, OnInit } from '@angular/core';
import { InfiniteScroll } from 'angular2-infinite-scroll';
import { HostListener} from "@angular/core";

@Component({
  selector: 'app-lazy-loadingon-scroll',
  templateUrl: './lazy-loadingon-scroll.component.html',
  styleUrls: ['./lazy-loadingon-scroll.component.scss']
})
export class LazyLoadingonScrollComponent implements OnInit {
 counts = ["hello" , "world" , "scroll" , "checking" , "message","hello" , "world" , "scroll" , "checking" , "message"];
  constructor() { }
  @HostListener("window:scroll", [])
  ngOnInit() {
  }
  onWindowScroll() {
    console.log("scrolled");
   }
   scrollDown() {
     debugger;
    //  Here we can call the service and load the contents as per need. Means whn th user scolls
    // down only then the data will be displayed for the user. Till then unnecessary data will not be loaded
     console.log("scrolled");
     for(let i = 0;i<20;i++){
      this.counts.push("message" + i);
    }
     

   }
}
