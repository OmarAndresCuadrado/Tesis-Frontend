import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaCirlceUruguayComponent } from './grafica-cirlce-uruguay.component';

describe('GraficaCirlceUruguayComponent', () => {
  let component: GraficaCirlceUruguayComponent;
  let fixture: ComponentFixture<GraficaCirlceUruguayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficaCirlceUruguayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficaCirlceUruguayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
