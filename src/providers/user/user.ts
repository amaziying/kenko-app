import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
import { UniqueDeviceID } from '@ionic-native/unique-device-id';

/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
const url = 'http://flask-env.svnymeriyr.us-east-1.elasticbeanstalk.com/'

@Injectable()
export class UserProvider {
  uuid: string

  constructor(private http: HttpClient, private deviceId: UniqueDeviceID, platform: Platform) {
    if (platform.is('cordova')) {
      this.deviceId.get()
        .then((uuid: string) => {
          this.uuid = uuid
          return this.http.get(url + '/add_user/' + uuid + '/m/23')
        })
    } else {
      this.uuid = 'test'
    }
  }

}
