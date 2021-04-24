import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MousemoveComponent } from './mousemove.component';

describe('MousemoveComponent', () => {
  let component: MousemoveComponent;
  let fixture: ComponentFixture<MousemoveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MousemoveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MousemoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
