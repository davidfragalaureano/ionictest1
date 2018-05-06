import { Component } from '@angular/core';
import { Platform, NavParams, ViewController } from 'ionic-angular';
import { Images } from '../../../providers/interfaces/images';
/**
 * Generated class for the ModalImageComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  templateUrl: 'modal-image.html'
})
export class ModalImageComponent {

  public image: Images;

  constructor(
  	 	 public platform: Platform,
   		 public params: NavParams,
    	 public viewCtrl: ViewController
  	) {
  		this.image = params.data;
  		console.log(this.image);
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
