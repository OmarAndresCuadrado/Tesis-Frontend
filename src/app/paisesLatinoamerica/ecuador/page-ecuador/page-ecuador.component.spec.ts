import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageEcuadorComponent } from './page-ecuador.component';

describe('PageEcuadorComponent', () => {
  let component: PageEcuadorComponent;
  let fixture: ComponentFixture<PageEcuadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageEcuadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageEcuadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
