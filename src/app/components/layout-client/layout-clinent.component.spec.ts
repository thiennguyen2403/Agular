import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutClinentComponent } from './layout-clinent.component';

describe('LayoutClinentComponent', () => {
  let component: LayoutClinentComponent;
  let fixture: ComponentFixture<LayoutClinentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutClinentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LayoutClinentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
