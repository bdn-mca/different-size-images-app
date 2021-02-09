import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesGoodComponent } from './images-good.component';

describe('ImagesGoodComponent', () => {
  let component: ImagesGoodComponent;
  let fixture: ComponentFixture<ImagesGoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagesGoodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagesGoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
