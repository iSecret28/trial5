import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DogHairPage } from './dog-hair.page';

describe('DogHairPage', () => {
  let component: DogHairPage;
  let fixture: ComponentFixture<DogHairPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DogHairPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
