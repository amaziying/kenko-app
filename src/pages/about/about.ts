import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

import { LabelEditor } from '../label-editor/labelEditor';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  images: Array<{src: string, caption: string, labels: Array<{description: string, portionSize: string}>}>;
  rows: Array<number>;
  srcOptions: Array<number>;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, private camera: Camera) {
    this.images = [];
    this.srcOptions = [this.camera.PictureSourceType.CAMERA, this.camera.PictureSourceType.SAVEDPHOTOALBUM];
    this.rows = [];
  }

  openModal(i) {
    let image = this.images[i];
    let modal = this.modalCtrl.create(LabelEditor, {image});
    modal.present();
  }

  takePhoto(srcIdx) {
    const options: CameraOptions = {
      quality: 80,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.srcOptions[srcIdx],
      allowEdit: false,
      encodingType: this.camera.EncodingType.JPEG,
      saveToPhotoAlbum: true
    };
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64:
     let base64Image = 'data:image/jpeg;base64,' + imageData;
     this.images.unshift({
       src: base64Image,
       labels: [],
       caption: ''
     });
     this.openModal(0);
     this.rows = Array(Math.floor(this.images.length/2) + 1).fill(0).map((x,i)=>i);
    }, (err) => {
     console.log(err);
    });
  }

}
