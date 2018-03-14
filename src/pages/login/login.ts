import { Component } from '@angular/core';
import { ViewController, ModalController } from 'ionic-angular';

import { UserProvider } from '../../providers/user/user';

import { SignupPage } from '../signup/signup';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  email: string
  password: string;
  error = {};

  constructor(private view: ViewController, private modal: ModalController, private user: UserProvider) {
  }
  
  attemptLogin() {
    if (this.email) {
      this.user.login(this.email)
        .then((success) => {
          this.view.dismiss()
        }, (error) => {
          this.error[this.email] = 'We could not find a user with this email, perhaps try creating a new account!'
        })
    }
  }

  openSignup() {
    const modal = this.modal.create(SignupPage)
    modal.onDidDismiss((data) => {
      if (data && data.success) {
        this.view.dismiss()
      }
    })
    modal.present()
  }

}
