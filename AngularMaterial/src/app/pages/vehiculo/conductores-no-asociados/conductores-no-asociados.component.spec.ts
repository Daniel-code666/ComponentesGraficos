import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConductoresNoAsociadosComponent } from './conductores-no-asociados.component';

describe('ConductoresNoAsociadosComponent', () => {
  let component: ConductoresNoAsociadosComponent;
  let fixture: ComponentFixture<ConductoresNoAsociadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConductoresNoAsociadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConductoresNoAsociadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
