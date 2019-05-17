import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegrationBlocsComponent } from './integration-blocs.component';

describe('IntegrationBlocsComponent', () => {
  let component: IntegrationBlocsComponent;
  let fixture: ComponentFixture<IntegrationBlocsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntegrationBlocsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntegrationBlocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
