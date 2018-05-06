//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Images } from '../../providers/interfaces/images';
/*
  Generated class for the ImagesProvider provider.

    This class serves the image array to use in the gallery
 	the images can be exctract form the gallery device (coding the logic in a method inside this class) 
 	and serve the component with the array.
*/
@Injectable()
export class ImagesProvider {

  public images: Array<Images>;

  constructor() {
    console.log('Hello ImagesProvider Provider');
    this.setImages();
  }

  public getImages(): Array<Images>{  
  	return this.images;
  }

  public setImages(): void{
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
