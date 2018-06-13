import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs/observable/interval';
import { mergeMap, take } from 'rxjs/operators';

@Component({
  selector: 'app-merge-map',
  templateUrl: './merge-map.component.html',
  styleUrls: ['./merge-map.component.scss']
})
export class MergeMapComponent implements OnInit {
  data : any;
  constructor() { }

  ngOnInit() {

    const source = interval(1000);

    const example = source.pipe(
      mergeMap(
        //project
        val => interval(1000).pipe(take(2)),
        //resultSelector
        (oVal, iVal, oIndex, iIndex) => [oIndex, oVal, iIndex, iVal],
        //concurrent
        2
      ));
      const subscribe = example.subscribe(val =>{
        this.data = val;
      } );
  

}
}
