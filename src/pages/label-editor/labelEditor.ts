import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
import { HTTP } from '@ionic-native/http';

@Component({
  templateUrl: 'label-editor.html'
})
export class LabelEditor {
  image: {src: string, caption: string, labels: Array<{description: string, portionSize: string}>};
  tempLabel: string;

  constructor(public viewCtrl: ViewController, public navParams: NavParams, private http: HTTP) {
    this.image = navParams.get('image');
     
    if (!this.image.labels.length && this.image.src) {
      this.http.post('https://izyophfcve.localtunnel.me/vision', { image: this.image.src.slice(23) }, {})
        .then(res => this.image.labels = this.convertToLabels(res.data.labels))
    }
  }

  addLabel() {
    if (this.tempLabel) {
      this.image.labels.push({
        description: this.tempLabel,
        portionSize: 'MD'
      });
      this.tempLabel = "";
    }
  }

  convertToLabels(annotations) {
    return annotations.map((annotation) => ({
      description: annotation.description,
      portionSize: 'MD'
    }));
  }

  removeLabel(i) {
    this.image.labels.splice(i, 1);
  }

  save() {
    this.viewCtrl.dismiss(this.image);
  }
}