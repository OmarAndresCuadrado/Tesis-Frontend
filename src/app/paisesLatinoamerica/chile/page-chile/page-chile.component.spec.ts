import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageChileComponent } from './page-chile.component';

describe('PageChileComponent', () => {
  let component: PageChileComponent;
  let fixture: ComponentFixture<PageChileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageChileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageChileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
