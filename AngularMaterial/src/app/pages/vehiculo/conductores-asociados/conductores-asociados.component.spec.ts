import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConductoresAsociadosComponent } from './conductores-asociados.component';

describe('ConductoresAsociadosComponent', () => {
  let component: ConductoresAsociadosComponent;
  let fixture: ComponentFixture<ConductoresAsociadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConductoresAsociadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConductoresAsociadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
