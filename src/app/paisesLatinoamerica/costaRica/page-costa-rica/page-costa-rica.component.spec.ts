import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCostaRicaComponent } from './page-costa-rica.component';

describe('PageCostaRicaComponent', () => {
  let component: PageCostaRicaComponent;
  let fixture: ComponentFixture<PageCostaRicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageCostaRicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCostaRicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
