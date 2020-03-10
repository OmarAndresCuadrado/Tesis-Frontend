import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaLineElSalvadorComponent } from './grafica-line-el-salvador.component';

describe('GraficaLineElSalvadorComponent', () => {
  let component: GraficaLineElSalvadorComponent;
  let fixture: ComponentFixture<GraficaLineElSalvadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficaLineElSalvadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficaLineElSalvadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
