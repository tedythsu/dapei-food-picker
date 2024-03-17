import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawLotsComponent } from './draw-lots.component';

describe('DrawLotsComponent', () => {
  let component: DrawLotsComponent;
  let fixture: ComponentFixture<DrawLotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrawLotsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DrawLotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
