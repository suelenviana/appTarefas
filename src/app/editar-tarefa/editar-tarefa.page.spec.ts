import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditarTarefaPage } from './editar-tarefa.page';

describe('EditarTarefaPage', () => {
  let component: EditarTarefaPage;
  let fixture: ComponentFixture<EditarTarefaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarTarefaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditarTarefaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
