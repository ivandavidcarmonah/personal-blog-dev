import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloperAdminComponent } from './developer-admin.component';

describe('DeveloperAdminComponent', () => {
  let component: DeveloperAdminComponent;
  let fixture: ComponentFixture<DeveloperAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeveloperAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeveloperAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
