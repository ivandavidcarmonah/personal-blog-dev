import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloperListadosComponent } from './developer-listados.component';

describe('DeveloperListadosComponent', () => {
  let component: DeveloperListadosComponent;
  let fixture: ComponentFixture<DeveloperListadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeveloperListadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeveloperListadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
