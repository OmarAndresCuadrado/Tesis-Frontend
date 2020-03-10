import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserlikesComponent } from './userlikes.component';

describe('UserlikesComponent', () => {
  let component: UserlikesComponent;
  let fixture: ComponentFixture<UserlikesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserlikesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserlikesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
