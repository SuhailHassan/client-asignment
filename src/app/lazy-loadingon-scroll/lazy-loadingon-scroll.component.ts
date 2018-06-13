import { Component, OnInit } from '@angular/core';
import { InfiniteScroll } from 'angular2-infinite-scroll';
import { HostListener} from "@angular/core";

@Component({
  selector: 'app-lazy-loadingon-scroll',
  templateUrl: './lazy-loadingon-scroll.component.html',
  styleUrls: ['./lazy-loadingon-scroll.component.scss']
})
export class LazyLoadingonScrollComponent implements OnInit {

  constructor() { }
  @HostListener("window:scroll", [])
  ngOnInit() {
  }
  onWindowScroll() {
    console.log("scrolled");
   }
   scrolled() {
     console.log("scrolled");
   }
}
