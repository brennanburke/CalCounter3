import { Component, OnInit } from '@angular/core';
import { Flashlight } from "@ionic-native/flashlight/ngx";

@Component({
  selector: 'app-flashlight',
  templateUrl: './flashlight.page.html',
  styleUrls: ['./flashlight.page.scss'],
})
export class FlashlightPage implements OnInit {

  constructor( private flashlight: Flashlight) { }

  ngOnInit() {
  }
flashOn(){
  this.flashlight.switchOn();
  console.log("FLASHLIGHT ON");
}
flashOff(){
  this.flashlight.switchOff();
  console.log("FLASHLIGHT OFF");

}
}
