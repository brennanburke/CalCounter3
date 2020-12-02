import { Component, OnInit } from '@angular/core';
import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import * as firebase from "firebase/app";
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: "Food Diary",
      url: "/food-diary",
      icon: "book"
    },
    {
      title: 'Food Search',
      url: '/search',
      icon: 'search'
    },
    {
      title: "Flashlight",
      url: "/flashlight",
      icon: "bulb"
    } 
    
  ];
  

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private menu: MenuController,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    firebase.initializeApp({
      apiKey: "AIzaSyDoRw1ZpDTtfKPAT2MSfs147chaxbzqGJA",
      authDomain: "calcounter-1daca.firebaseapp.com",
      databaseURL: "https://calcounter-1daca.firebaseio.com",
      projectId: "calcounter-1daca",
      storageBucket: "calcounter-1daca.appspot.com",
      messagingSenderId: "826044932477",
      appId: "1:826044932477:web:9d69a892ca0036f6412c14"
    })
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  logout(){
    firebase.auth().signOut();
    this.router.navigateByUrl("/login")
    this.menu.close();
  }
  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  
  }
}
