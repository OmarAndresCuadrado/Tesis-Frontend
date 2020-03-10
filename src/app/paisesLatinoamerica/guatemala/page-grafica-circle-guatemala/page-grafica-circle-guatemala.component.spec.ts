import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageGraficaCircleGuatemalaComponent } from './page-grafica-circle-guatemala.component';

describe('PageGraficaCircleGuatemalaComponent', () => {
  let component: PageGraficaCircleGuatemalaComponent;
  let fixture: ComponentFixture<PageGraficaCircleGuatemalaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageGraficaCircleGuatemalaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageGraficaCircleGuatemalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
