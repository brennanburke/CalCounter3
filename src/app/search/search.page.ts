import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FoodsearchService } from "../service/foodsearch.service";


@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  constructor(public router: Router,
              private foodsearchService: FoodsearchService) { }

  ngOnInit() {
  }
  gotoResult(){
    console.log("going to result page")
    this.router.navigateByUrl("/result")
  }
  
}
