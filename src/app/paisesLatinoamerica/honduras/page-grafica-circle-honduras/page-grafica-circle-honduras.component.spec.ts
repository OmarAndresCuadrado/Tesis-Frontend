import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageGraficaCircleHondurasComponent } from './page-grafica-circle-honduras.component';

describe('PageGraficaCircleHondurasComponent', () => {
  let component: PageGraficaCircleHondurasComponent;
  let fixture: ComponentFixture<PageGraficaCircleHondurasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageGraficaCircleHondurasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageGraficaCircleHondurasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
