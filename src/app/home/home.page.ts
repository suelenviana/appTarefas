import { NovaTarefaPage } from './../nova-tarefa/nova-tarefa.page';
import { ModalController, NavController } from '@ionic/angular';

import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  tarefas: any [];

  constructor(public navCtrl: NavController,public modalCtrl: ModalController) {

  }

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: NovaTarefaPage,
      cssClass: 'novaTarefa.page.scss'
    });
    return await modal.present();
  }

}
