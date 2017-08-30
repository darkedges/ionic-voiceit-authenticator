import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { VoiceItProvider } from '../../providers/voiceit';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  voice: { uid: string } = {
    uid: 'nirving'
  };

  constructor(public navCtrl: NavController,
    public voiceitProvider: VoiceItProvider) {
  }

  get() {
    this.voiceitProvider.get(this.voice);
  }

  delete() {
    this.voiceitProvider.delete(this.voice);
  }

  create() {
    this.voiceitProvider.create(this.voice);
  }

  enrol() {
    this.voiceitProvider.enrol(this.voice);
  }

  authenticate() {
    this.voiceitProvider.authentication(this.voice);
  }
}
