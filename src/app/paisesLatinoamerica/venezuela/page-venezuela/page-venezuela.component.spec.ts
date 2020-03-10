import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageVenezuelaComponent } from './page-venezuela.component';

describe('PageVenezuelaComponent', () => {
  let component: PageVenezuelaComponent;
  let fixture: ComponentFixture<PageVenezuelaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageVenezuelaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageVenezuelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
