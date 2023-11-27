import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CatVacPage } from './cat-vac.page';

describe('CatVacPage', () => {
  let component: CatVacPage;
  let fixture: ComponentFixture<CatVacPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CatVacPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
