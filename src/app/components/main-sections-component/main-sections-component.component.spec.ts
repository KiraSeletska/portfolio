import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSectionsComponentComponent } from './main-sections-component.component';

describe('MainSectionsComponentComponent', () => {
  let component: MainSectionsComponentComponent;
  let fixture: ComponentFixture<MainSectionsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainSectionsComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainSectionsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
