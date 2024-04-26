import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TetrahedronComponent } from './tetrahedron.component';

describe('TetrahedronComponent', () => {
  let component: TetrahedronComponent;
  let fixture: ComponentFixture<TetrahedronComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TetrahedronComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TetrahedronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
