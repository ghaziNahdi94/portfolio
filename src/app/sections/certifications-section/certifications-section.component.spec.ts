import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificationsSectionComponent } from './certifications-section.component';

describe('CertificationsSectionComponent', () => {
  let component: CertificationsSectionComponent;
  let fixture: ComponentFixture<CertificationsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificationsSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificationsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
