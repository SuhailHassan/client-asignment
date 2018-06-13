import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';



@Component({
  selector: 'app-asynchronous-pipe',
  templateUrl: './asynchronous-pipe.component.html',
  styleUrls: ['./asynchronous-pipe.component.scss']
})
export class AsynchronousPipeComponent implements OnInit {
  countCompleted: boolean;
  countDown: number;
  count: Observable<number>;
  message : any;

  constructor(){
    this.countDown = 5;
    this.message = "Async Pipe through observable"
    this.countCompleted = false;

    this.count = Observable
                    .interval(1000)
                    .map(i => this.countDown - i)
                    .takeWhile(i => i > 0)
                    .finally(() => this.countCompleted = true);
  }
  ngOnInit() {

  }

}
