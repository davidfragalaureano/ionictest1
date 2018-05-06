import { Component } from '@angular/core';
import { GeGalleryComponent } from '../../components/ge-gallery/ge-gallery';
import { Images } from '../../providers/interfaces/images';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  
  public images: Array<Images>;
  constructor() {
  	 this.images = [
	      { id : '1', url:'../../assets/imgs/Chrysanthemum.jpg',title: 'Chrys'},
	      { id : '2', url:'../../assets/imgs/Hydrangeas.jpg',title: 'Chrysan'},
	      { id : '3', url:'../../assets/imgs/Desert.jpg',title: 'Chrysahemum'},
	      { id : '4', url:'../../assets/imgs/Jellyfish.jpg',title: 'Chryshemum'},
	      { id : '5', url:'../../assets/imgs/Koala.jpg',title: 'Chrysanthemum'},
	      { id : '6', url:'../../assets/imgs/Lighthouse.jpg',title: 'antmum'},
	      { id : '7', url:'../../assets/imgs/Penguins.jpg',title: '4534554'},
	      { id : '8', url:'../../assets/imgs/Tulips.jpg',title: 'Chrysanthemum'}
	    ];
  }
}
