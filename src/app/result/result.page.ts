import { Component, OnInit } from '@angular/core';
import { FoodsearchService } from "../service/foodsearch.service"

@Component({
  selector: 'app-result',
  templateUrl: './result.page.html',
  styleUrls: ['./result.page.scss'],
})
export class ResultPage implements OnInit {

  constructor(private foodsearchService: FoodsearchService) { }

  ngOnInit() {
    this.foodsearchService.fetchfood().subscribe();
  }

}
