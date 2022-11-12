import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloperInsertarComponent } from './developer-insertar.component';

describe('DeveloperInsertarComponent', () => {
  let component: DeveloperInsertarComponent;
  let fixture: ComponentFixture<DeveloperInsertarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeveloperInsertarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeveloperInsertarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
