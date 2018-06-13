
import { Injectable } from '@angular/core';
import { Model } from './model';

@Injectable()
export class ModelsService {

  models: Model[] = [
    { name: "Virat", status: "Captain and batsman", about: "I'm the captian and right-handed batsamn", messages: [], rows: 1, cols:1},
    { name: "Dhoni", status: "Wicketkeeper", about: "I'm athe wicket keeper and batsman", messages: [], rows: 1, cols:1 },
    { name: "Jadeja", status: "Batsman", about: "I'm a left-handed batsman", messages: [], rows: 1 , cols:1},
    { name: "Ashwin", status: "Bowler", about: "I'm a right-handed spinner", messages: [], rows: 3, cols:1},
    { name: "Sachin", status: "Batsman", about: "I'm a right-handed batsman", messages: [], rows: 1, cols:1},
    { name: "Sehwag", status: "Batsman", about: "I'm a right-handed batsman", messages: [], rows: 1 , cols:1},
    { name: "Pujara", status: "Bowler", about: "I'm a spin bowler", messages: [], rows: 1, cols:1},
    { name: "Ishanth", status: "Bowler", about: "I'm a tallest fast bowler in india", messages: [], rows: 1, cols:1},
    { name: "Dhavan", status: "Batsman", about: "I'm a left-handed batsman", messages: [], rows: 1, cols:1},
    { name: "Umesh", status: "Bowler", about: "I'm a right-handed fast bowler", messages: [], rows: 1, cols:1},
  ];

  constructor() { }

  getModels(){
    return this.models;
  }

}
