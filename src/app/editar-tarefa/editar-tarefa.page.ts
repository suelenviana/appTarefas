import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, ModalController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-editar-tarefa',
  templateUrl: './editar-tarefa.page.html',
  styleUrls: ['./editar-tarefa.page.scss'],
})
export class EditarTarefaPage implements OnInit {

    tarefa: any

  constructor(
    private modalCtrl: ModalController,
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    public navParam: NavParams
  ) { 
      this.tarefa = navParam.data.tarefa
      console.log(this.tarefa)
  }

  ngOnInit() {
  }

  salvar = () => {
      this.tarefa.data = this.formataData(this.tarefa.timestamp)
    this.modalCtrl.dismiss({
        ...this.tarefa
    });
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
}
