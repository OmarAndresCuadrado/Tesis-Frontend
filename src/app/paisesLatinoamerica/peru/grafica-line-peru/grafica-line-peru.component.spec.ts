import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaLinePeruComponent } from './grafica-line-peru.component';

describe('GraficaLinePeruComponent', () => {
  let component: GraficaLinePeruComponent;
  let fixture: ComponentFixture<GraficaLinePeruComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficaLinePeruComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficaLinePeruComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
