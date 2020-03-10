import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageGraficaLineHondurasComponent } from './page-grafica-line-honduras.component';

describe('PageGraficaLineHondurasComponent', () => {
  let component: PageGraficaLineHondurasComponent;
  let fixture: ComponentFixture<PageGraficaLineHondurasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageGraficaLineHondurasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageGraficaLineHondurasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
