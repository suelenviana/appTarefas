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

        const ano = this.data.substring(0, 4)
        const mes = this.data.substring(5, 7)
        const dia = this.data.substring(8, 10)
        const hora = this.data.substring(11, 13)
        const min = this.data.substring(14, 16)
        
        const dataFormatada = `${dia}/${mes}/${ano} ${hora}:${min}`

        this.modalCtrl.dismiss({
            id: id, 
            nomeTarefa: this.nomeTarefa, 
            descricaoTarefa: this.descricaoTarefa, 
            data: dataFormatada
        })
    }

    cancelar = () => {
        this.modalCtrl.dismiss();
    }

  ngOnInit() {
  }

}
