import { Injectable } from '@angular/core';
import * as firebase from "firebase";

@Injectable({
  providedIn: 'root'
})
export class DiaryService {
  public diaryEntries = [];
  public selectedEntry: any;
  ref = firebase.database().ref('Users/');
  

  constructor() {
    this.ref.on('value', resp => {
      this.diaryEntries = [];
      this.diaryEntries = snapshotToArray(resp);
      console.log(this.diaryEntries);
    });
  }

  addExpense(entry) {
    entry['user'] = firebase.auth().currentUser.email;
    return firebase.database().ref('Users').push(entry);
  }
}

export const snapshotToArray = snapshot => {
  let returnArr = [];

  snapshot.forEach(childSnapshot => {
      let item = childSnapshot.val();
      item.key = childSnapshot.key;
      returnArr.push(item);
  });
  return returnArr;
};