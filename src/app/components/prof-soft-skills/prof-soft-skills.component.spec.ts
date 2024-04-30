import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfSoftSkillsComponent } from './prof-soft-skills.component';

describe('ProfSoftSkillsComponent', () => {
  let component: ProfSoftSkillsComponent;
  let fixture: ComponentFixture<ProfSoftSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfSoftSkillsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfSoftSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
