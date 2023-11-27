import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DogActivityPage } from './dog-activity.page';

describe('DogActivityPage', () => {
  let component: DogActivityPage;
  let fixture: ComponentFixture<DogActivityPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DogActivityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
