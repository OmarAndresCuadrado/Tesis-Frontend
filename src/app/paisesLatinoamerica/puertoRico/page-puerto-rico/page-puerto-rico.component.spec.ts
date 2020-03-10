import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePuertoRicoComponent } from './page-puerto-rico.component';

describe('PagePuertoRicoComponent', () => {
  let component: PagePuertoRicoComponent;
  let fixture: ComponentFixture<PagePuertoRicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagePuertoRicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagePuertoRicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
