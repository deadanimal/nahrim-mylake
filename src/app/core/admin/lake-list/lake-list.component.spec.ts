import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LakeListComponent } from './lake-list.component';

describe('LakeListComponent', () => {
  let component: LakeListComponent;
  let fixture: ComponentFixture<LakeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LakeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LakeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
