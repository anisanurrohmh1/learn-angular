import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComAComponent } from './com-a.component';

describe('ComAComponent', () => {
  let component: ComAComponent;
  let fixture: ComponentFixture<ComAComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComAComponent]
    });
    fixture = TestBed.createComponent(ComAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
