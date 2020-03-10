import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageGraficaLineGuatemalaComponent } from './page-grafica-line-guatemala.component';

describe('PageGraficaLineGuatemalaComponent', () => {
  let component: PageGraficaLineGuatemalaComponent;
  let fixture: ComponentFixture<PageGraficaLineGuatemalaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageGraficaLineGuatemalaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageGraficaLineGuatemalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
