import { Component, OnInit, Input} from '@angular/core';
import { ImagesProvider } from '../../providers/images/images';
import { Images } from '../../providers/interfaces/images';

import { ModalController} from 'ionic-angular';
import { ModalImageComponent } from './modal-image/modal-image';

/**
 * Generated class for the GeGalleryComponent component.
 *
 * 	Here we define the functionality of the ge-gallery component
 */
@Component({
  selector: 'ge-gallery',
  templateUrl: 'ge-gallery.html'
})
export class GeGalleryComponent implements OnInit{

  @Input() images: Array<Images>; // Images interface --> {id:string,url:string}
  public selectedImages: Array<Images>;

  constructor(
      private _imagesProvider: ImagesProvider, 
      public modalCtrl: ModalController
    ){
    console.log('Hello GeGalleryComponent Component');  
  }

  ngOnInit(){
    this.selectedImages = null;
    if(this.images == undefined)
  	  this.getImages();
  }

  public getImages(): void{
  	 this.images = this._imagesProvider.getImages();
  }

  public onSelect(image: Images){
    let modal = this.modalCtrl.create(ModalImageComponent, image);
    modal.present();
  }



}
