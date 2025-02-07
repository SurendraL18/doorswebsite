import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoorframeprodComponent } from './doorframeprod.component';

describe('DoorframeprodComponent', () => {
  let component: DoorframeprodComponent;
  let fixture: ComponentFixture<DoorframeprodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoorframeprodComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DoorframeprodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
