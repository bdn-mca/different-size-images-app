import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesTallFixComponent } from './images-tall-fix.component';

describe('ImagesTallFixComponent', () => {
  let component: ImagesTallFixComponent;
  let fixture: ComponentFixture<ImagesTallFixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagesTallFixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagesTallFixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
