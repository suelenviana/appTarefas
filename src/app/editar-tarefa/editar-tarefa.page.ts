import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, ModalController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-editar-tarefa',
  templateUrl: './editar-tarefa.page.html',
  styleUrls: ['./editar-tarefa.page.scss'],
})
export class EditarTarefaPage implements OnInit {

  constructor(
    private modalCtrl: ModalController,
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    public navParam: NavParams
  ) { }

  ngOnInit() {
  }

  cancelar = () => {
    this.modalCtrl.dismiss();
}

}
