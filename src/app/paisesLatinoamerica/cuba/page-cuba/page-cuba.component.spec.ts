import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCubaComponent } from './page-cuba.component';

describe('PageCubaComponent', () => {
  let component: PageCubaComponent;
  let fixture: ComponentFixture<PageCubaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageCubaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCubaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
