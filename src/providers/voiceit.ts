import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';

import { VoiceIt, APIDetails, ContentLanguage } from 'ionic-plugin-voiceit';

@Injectable()
export class VoiceItProvider {
  private developerID:string = "";

  constructor(public voiceit: VoiceIt, private alertCtrl: AlertController) {
  }

  get(accountInfo: any) {
    var apiDetails: APIDetails = {
      developerID: this.developerID,
      userId: "nirving",
      password: "Abcd1234"
    };
    this.voiceit.getUser(apiDetails).then(details => {
      let alert = this.alertCtrl.create({
        title: 'getUser',
        subTitle: details,
        buttons: ['Dismiss']
      });
      alert.present();
    });
  }

  delete(accountInfo: any) {
    var apiDetails: APIDetails = {
      developerID: this.developerID,
      userId: "nirving",
      password: "Abcd1234"
    };
    this.voiceit.deleteUser(apiDetails).then(details => {
      let alert = this.alertCtrl.create({
        title: 'deleteUser',
        subTitle: details,
        buttons: ['Dismiss']
      });
      alert.present();
    });
  }

  create(accountInfo: any) {
    var apiDetails: APIDetails = {
      developerID: this.developerID,
      userId: "nirving",
      password: "Abcd1234"
    };
    this.voiceit.createUser(apiDetails).then(details => {
      let alert = this.alertCtrl.create({
        title: 'createUser',
        subTitle: details,
        buttons: ['Dismiss']
      });
      alert.present();
    });
  }

  enrol(accountInfo: any) {
    var contentLanguage: ContentLanguage = {
      developerID: this.developerID,
      userId: "nirving",
      password: "Abcd1234"
    };
    this.voiceit.createEnrollment(contentLanguage).then(details => {
      let alert = this.alertCtrl.create({
        title: 'createEnrollment',
        subTitle: details,
        buttons: ['Dismiss']
      });
      alert.present();
    });
  }

  authentication(accountInfo: any) {
    var contentLanguage: ContentLanguage = {
      developerID: this.developerID,
      userId: "nirving",
      password: "Abcd1234"
    };
    this.voiceit.authentication(contentLanguage).then(details => {
      let alert = this.alertCtrl.create({
        title: 'authetication',
        subTitle: details,
        buttons: ['Dismiss']
      });
      alert.present();
    });
  }


}
