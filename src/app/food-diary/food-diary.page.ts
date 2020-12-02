import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { DiaryService } from "C://Users/burke/CalCounter3/src/app/service/diary.service";
import { LoginService } from "C://Users/burke/CalCounter3/src/app/service/login.service";
import * as firebase from "firebase";
import { ScreenOrientation } from "@ionic-native/screen-orientation/ngx";

@Component({
  selector: 'app-food-diary',
  templateUrl: './food-diary.page.html',
  styleUrls: ['./food-diary.page.scss'],
})
export class FoodDiaryPage implements OnInit {
  public cUser = "";

  constructor(  private router: Router,
                private diaryService: DiaryService,
                private loginService: LoginService,
                private screenOrientation: ScreenOrientation
    ) { }

  ngOnInit() {
    this.cUser = firebase.auth().currentUser.email;
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT)
    console.log(this.screenOrientation.type);
  }
  
  onSelect(entry){
    console.log(entry);
    this.diaryService.selectedEntry = entry
    this.router.navigateByUrl("/entry-detail")
  }
  
  newEntry(){
    this.router.navigateByUrl("/new-entry")
  }
}
