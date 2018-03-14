import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
const url = 'http://flask-env.svnymeriyr.us-east-1.elasticbeanstalk.com/'

@Injectable()
export class UserProvider {
  user: { name?: string, user_id?: string, sex?: number, age?: number } = {}

  constructor(private http: HttpClient, private platform: Platform, private storage: Storage) {
    if (platform.is('cordova')) {
      storage.get('user').then(val => {
        this.user = val
      })
    }
  }

  setUser(name, user_id, sex, age) {
    this.user = { name, user_id, sex, age }
    if (this.platform.is('cordova')) {
      this.storage.set('user', this.user)
    }
    return this.user
  }

  login(user_id) {
    return new Promise((resolve, reject) => {
      this.http.get(url + 'api/check_user/' + user_id)
        .subscribe((data: any) => {
            const user = this.setUser(data[16], user_id, data[1], data[2])
            resolve(user)
          }, error => {
            console.log(error)
            reject(error)
          });
      })
  }

  signup(name, user_id, sex, age) {
    return new Promise((resolve, reject) => {
      this.http.post(url + 'add_user', { name, user_id, sex, age })
        .subscribe(data => {
            const user = this.setUser(name, user_id, sex, age)
            resolve(user);
          }, error => {
            console.log(error)
            reject(error)
          });
      })
  }

}
