import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicStorageModule } from '@ionic/storage';

import { IonicModule } from '@ionic/angular';

import { NovaTarefaPageRoutingModule } from './nova-tarefa-routing.module';

import { NovaTarefaPage } from './nova-tarefa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NovaTarefaPageRoutingModule,
    IonicStorageModule.forRoot()
  ],
  declarations: [NovaTarefaPage]
})
export class NovaTarefaPageModule {}
