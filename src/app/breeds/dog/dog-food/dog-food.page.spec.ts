import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DogFoodPage } from './dog-food.page';

describe('DogFoodPage', () => {
  let component: DogFoodPage;
  let fixture: ComponentFixture<DogFoodPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DogFoodPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
