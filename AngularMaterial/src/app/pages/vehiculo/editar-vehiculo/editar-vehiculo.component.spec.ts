import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarVehiculoComponent } from './editar-vehiculo.component';

describe('EditarVehiculoComponent', () => {
  let component: EditarVehiculoComponent;
  let fixture: ComponentFixture<EditarVehiculoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarVehiculoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarVehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
