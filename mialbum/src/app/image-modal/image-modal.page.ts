import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from "@ionic/angular";


@Component({
  selector: 'app-image-modal',
  templateUrl: './image-modal.page.html',
  styleUrls: ['./image-modal.page.scss'],
})
export class ImageModalPage implements OnInit {

imagen : string;

  constructor(private modalCtrl : ModalController, private navpararms : NavParams) { 

this.imagen = this.navpararms.get('imagen'); 
console.log(this.imagen)

  }

  ngOnInit() {
  }


cerrarModal(){
this.modalCtrl.dismiss();




}


}
