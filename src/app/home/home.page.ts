import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { FoodsearchService } from "../service/foodsearch.service"

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public foodData = [];

  constructor( public http: HttpClient,
               private foodsearchService: FoodsearchService) { }


  ngOnInit() {
    this.foodsearchService.fetchfood().subscribe();
  }

}
