import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageElSalvadorComponent } from './page-el-salvador.component';

describe('PageElSalvadorComponent', () => {
  let component: PageElSalvadorComponent;
  let fixture: ComponentFixture<PageElSalvadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageElSalvadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageElSalvadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
