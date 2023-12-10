import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuisineTabsComponentComponent } from './cuisine-tabs-component.component';

describe('CuisineTabsComponentComponent', () => {
  let component: CuisineTabsComponentComponent;
  let fixture: ComponentFixture<CuisineTabsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CuisineTabsComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CuisineTabsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
