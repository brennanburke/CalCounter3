import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  account = { email: '', password: '' };

  constructor( private loginService: LoginService,
               private toastCtrl: ToastController,
               public router: Router ) { }

  ngOnInit() {
  }

  doLogin() {
    if ((this.account.email != '') && (this.account.password != '')) {
      this.loginService.signin(this.account.email, this.account.password)
        .then(data => {
          console.log(data);
          this.presentToast("Success.");
          this.router.navigateByUrl('/food-diary');
        })
        .catch(error => {
          console.log(error);
          this.presentToast(error.message);
        });
    } else {
      this.presentToast("Email & password are required.");
      return false;
    }
  }

  async presentToast(message) {
    const toast = await this.toastCtrl.create({
      message: message,
      position: 'bottom',
      duration: 2000
    });
    toast.present();
  }

  gotoSignup() {
    this.router.navigateByUrl('/signup');
  }

}