import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMexicoComponent } from './page-mexico.component';

describe('PageMexicoComponent', () => {
  let component: PageMexicoComponent;
  let fixture: ComponentFixture<PageMexicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageMexicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageMexicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
