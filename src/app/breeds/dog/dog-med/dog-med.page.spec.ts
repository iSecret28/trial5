import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DogMedPage } from './dog-med.page';

describe('DogMedPage', () => {
  let component: DogMedPage;
  let fixture: ComponentFixture<DogMedPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DogMedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
