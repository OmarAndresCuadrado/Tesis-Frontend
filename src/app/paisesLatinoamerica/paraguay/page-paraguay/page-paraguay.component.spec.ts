import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageParaguayComponent } from './page-paraguay.component';

describe('PageParaguayComponent', () => {
  let component: PageParaguayComponent;
  let fixture: ComponentFixture<PageParaguayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageParaguayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageParaguayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
