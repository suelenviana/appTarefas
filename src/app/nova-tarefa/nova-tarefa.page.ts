import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-nova-tarefa',
  templateUrl: './nova-tarefa.page.html',
  styleUrls: ['./nova-tarefa.page.scss'],
})
export class NovaTarefaPage implements OnInit {

    nomeTarefa = '';
    descricaoTarefa = '';
    data = null;

    constructor(
        private modalCtrl: ModalController,
        public navCtrl: NavController,
        public navParam: NavParams,
        private storage: Storage
    ) { }
    
    criarTarefa = () => {
        const id = new Date().getTime();
        this.modalCtrl.dismiss({
            id: id, 
            nomeTarefa: this.nomeTarefa, 
            descricaoTarefa: this.descricaoTarefa, 
            data: this.data
        })
    }

    cancelar = () => {
        this.modalCtrl.dismiss();
    }

  ngOnInit() {
  }

}
