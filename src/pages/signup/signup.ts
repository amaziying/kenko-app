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
  error = {}


  constructor(public view: ViewController, private user: UserProvider) {
    this._ = _
  }

  getHash() {
    const { name, email, age, sex } = this
    return [name, email, age, sex].join('-')
  }

  create() {
    const { name, email, age, sex } = this
    if (name && email && age && sex) {
      this.user.signup(name, email, sex, age)
        .then((success) => {
          this.view.dismiss({ success: true })
        }, (error) => {
          this.error[this.getHash()] = 'Could not create the account. Please try again later.'
        })
    } else {
      this.error[this.getHash()] = 'Please fill in missing personal information!'
    }
  }

  goBack() {
    this.view.dismiss()
  }

}
