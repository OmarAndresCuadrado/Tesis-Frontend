import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageRepublicaDominicaComponent } from './page-republica-dominica.component';

describe('PageRepublicaDominicaComponent', () => {
  let component: PageRepublicaDominicaComponent;
  let fixture: ComponentFixture<PageRepublicaDominicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageRepublicaDominicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageRepublicaDominicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
