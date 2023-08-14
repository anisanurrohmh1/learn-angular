import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComBComponent } from './com-b.component';

describe('ComBComponent', () => {
  let component: ComBComponent;
  let fixture: ComponentFixture<ComBComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComBComponent]
    });
    fixture = TestBed.createComponent(ComBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
