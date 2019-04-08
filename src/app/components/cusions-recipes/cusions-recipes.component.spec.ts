import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CusionsRecipesComponent } from './cusions-recipes.component';

describe('CusionsRecipesComponent', () => {
  let component: CusionsRecipesComponent;
  let fixture: ComponentFixture<CusionsRecipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CusionsRecipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CusionsRecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
