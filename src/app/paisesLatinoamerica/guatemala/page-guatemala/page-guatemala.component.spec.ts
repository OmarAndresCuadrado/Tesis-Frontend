import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageGuatemalaComponent } from './page-guatemala.component';

describe('PageGuatemalaComponent', () => {
  let component: PageGuatemalaComponent;
  let fixture: ComponentFixture<PageGuatemalaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageGuatemalaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageGuatemalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
