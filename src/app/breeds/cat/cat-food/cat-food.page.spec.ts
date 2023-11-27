import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CatFoodPage } from './cat-food.page';

describe('CatFoodPage', () => {
  let component: CatFoodPage;
  let fixture: ComponentFixture<CatFoodPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CatFoodPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
