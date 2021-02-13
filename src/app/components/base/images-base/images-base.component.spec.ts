import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesBaseComponent } from './images-base.component';

describe('ImagesBaseComponent', () => {
  let component: ImagesBaseComponent;
  let fixture: ComponentFixture<ImagesBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagesBaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagesBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
