import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class FoodsearchService {
  
  public foodData = [];
  public searchTerm = [""];
  constructor(public http: HttpClient ) { }

  
  fetchfood(){
    console.log("fetching food data");
    let url = "https://api.edamam.com/api/food-database/v2/parser?ingr=" + this.searchTerm + "&app_id=7345343e&app_key=bca615dd07675271e7a99ac5281581af"
    return this.http.get(url).pipe(tap(response =>{
      console.log(response);
      this.foodData = response["parsed"];
    }))
  }

}
