import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CatMedPage } from './cat-med.page';

describe('CatMedPage', () => {
  let component: CatMedPage;
  let fixture: ComponentFixture<CatMedPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CatMedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
