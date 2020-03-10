import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaCircleElSalvadorComponent } from './grafica-circle-el-salvador.component';

describe('GraficaCircleElSalvadorComponent', () => {
  let component: GraficaCircleElSalvadorComponent;
  let fixture: ComponentFixture<GraficaCircleElSalvadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficaCircleElSalvadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficaCircleElSalvadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
