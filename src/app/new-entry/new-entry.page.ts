import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import * as firebase from "firebase";

@Component({
  selector: 'app-new-entry',
  templateUrl: './new-entry.page.html',
  styleUrls: ['./new-entry.page.scss'],
})
export class NewEntryPage implements OnInit {
  
  entry = {user : firebase.auth().currentUser.email, date: "", food: "", calories: ""}

  constructor(private router: Router) { }

  ngOnInit() {
  }
  addDiary(){
    console.log(this.entry)
    this.router.navigateByUrl("/food-diary")
    return firebase.database().ref("Users/").push(this.entry);
  }
}
