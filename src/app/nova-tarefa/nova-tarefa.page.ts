import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, ModalController, AlertController } from '@ionic/angular';

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
        public alertCtrl: AlertController,
        public navParam: NavParams
    ) { }
    
    async presentAlert() {
        const alert = await this.alertCtrl.create({
          cssClass: 'my-custom-class',
          header: 'Atenção!',
          message: 'Você precisa preencher todos os campos!',
          buttons: ['OK']
        });
    
        await alert.present();
      }

    criarTarefa = () => {
        if (this.nomeTarefa && this.descricaoTarefa && this.data) {

            const dataFormatada = this.formataData(this.data)

            this.modalCtrl.dismiss({
                nomeTarefa: this.nomeTarefa, 
                descricaoTarefa: this.descricaoTarefa, 
                data: dataFormatada,
                timestamp: this.data
            })
        } else {
            this.presentAlert();
        }
    }

    cancelar = () => {
        this.modalCtrl.dismiss();
    }

    formataData = (data) => {
        const ano = data.substring(0, 4)
        const mes = data.substring(5, 7)
        const dia = data.substring(8, 10)
        const hora = data.substring(11, 13)
        const min = data.substring(14, 16)
        const dataFormatada = `${dia}/${mes}/${ano} ${hora}:${min}`
        return dataFormatada
    }

  ngOnInit() {
  }

}
