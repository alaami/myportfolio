import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopmentViewComponent } from './development-view.component';

describe('DevelopmentViewComponent', () => {
  let component: DevelopmentViewComponent;
  let fixture: ComponentFixture<DevelopmentViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevelopmentViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevelopmentViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
