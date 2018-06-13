import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class SearchService {

  constructor(private http: Http) { }

  search(search: string) {
    let result = [
      {
        message : 'This data is fetched using Switch map'
      }     
    ];

    return result;
  }

getData(id) {
 console.log("getData Called");
}
getCharacter(character : any) {
  console.log("getCharacter Called");
  return  ;
}

}
