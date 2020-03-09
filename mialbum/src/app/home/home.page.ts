import { Component } from '@angular/core';
import { ModalController } from "@ionic/angular";
import { ImageModalPage } from "../image-modal/image-modal.page";
import { storage, initializeApp } from 'firebase';
import { FIREBASE_CONGI } from '../firebase.config';
import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  constructor(private camera: Camera, private modalCtrl : ModalController){
initializeApp(FIREBASE_CONGI);


  }


 async takePhoto(){
try {
  

const options: CameraOptions = {

  quality: 50,
  targetHeight:600,
  targetWidth: 600,
destinationType: this.camera.DestinationType.DATA_URL,
encodingType: this.camera.EncodingType.JPEG,
mediaType: this.camera.MediaType.PICTURE


}


 const result = await   this.camera.getPicture(options);
const image = 'data:image/jpeg;base64,${result}';


const pitures = storage().ref('pictures')
pitures.putString(result, 'data_url')
  } catch (e) {
    console.error(e);
  
}
  }
  
  
  imagenes = [


'meme1.jpg',
'meme2.jpg',
'meme3.jpg',
'meme4.jpg',
'meme5.jpg',
'meme6.jpg',
'meme7.jpg',
'meme8.jpg',
'meme9.jpg',
'meme10.jpg',
'meme11.jpg',
'meme12.jpg',
'meme13.jpg',
'meme14.jpg',
'meme15.jpg',
'meme16.jpg',




  ];


  


  verImagen(imagen){

this.modalCtrl.create({
component :  ImageModalPage,
componentProps : {

imagen : imagen





}


}).then(modal => modal.present())




  }

}
