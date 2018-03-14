import { Component } from '@angular/core';
import { IonicPage, ViewController } from 'ionic-angular';

import { UserProvider } from '../../providers/user/user'

import * as _ from 'lodash';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  _: any
  name: string
  email: string
  age: string
  sex: string
  password: string
  referral: string
  error: string


  constructor(public view: ViewController, private user: UserProvider) {
    this._ = _
  }

  create() {
    const { name, email, age, sex } = this
    if (name && email && age && sex) {
      this.user.signup(name, email, sex, age)
        .then((success) => {
          this.view.dismiss({ success: true })
        }, (error) => {
          console.log(error)
        })
    }
    
  }

  goBack() {
    this.view.dismiss()
  }

}
