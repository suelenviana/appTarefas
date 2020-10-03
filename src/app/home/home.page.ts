import { NovaTarefaPage } from './../nova-tarefa/nova-tarefa.page';
import { EditarTarefaPage } from './../editar-tarefa/editar-tarefa.page';
import { ModalController, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  tarefas: any = [];

  constructor(
      public navCtrl: NavController,
      public modalCtrl: ModalController,
      private storage: Storage) {
    this.storage.get('tarefas')
    .then(t => {
        if (t) {
            this.tarefas = t
        }
    })
  }

  async openModalEditar(tarefa) {
    const modal = await this.modalCtrl.create({
        component: EditarTarefaPage,
        cssClass: 'novaTarefa.page.scss'
      });
      await modal.present();
  }

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: NovaTarefaPage,
      cssClass: 'novaTarefa.page.scss'
    });
    await modal.present();
    modal.onDidDismiss()
    .then(async res => {
        if (res.data) {
            this.tarefas.push(res.data)
            this.storage.set('tarefas', this.tarefas)
        }
    })
  }

  deletar(tarefa) {
    this.tarefas = this.tarefas.filter((t) => t !== tarefa);
    this.storage.set('tarefas', this.tarefas);
  }

}
