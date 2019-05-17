import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConseilViewComponent } from './conseil-view.component';

describe('ConseilViewComponent', () => {
  let component: ConseilViewComponent;
  let fixture: ComponentFixture<ConseilViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConseilViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConseilViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
