import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesTallComponent } from './images-tall.component';

describe('ImagesTallComponent', () => {
  let component: ImagesTallComponent;
  let fixture: ComponentFixture<ImagesTallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagesTallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagesTallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
