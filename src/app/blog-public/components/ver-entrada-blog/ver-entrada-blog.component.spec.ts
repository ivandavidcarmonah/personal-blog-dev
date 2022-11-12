import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerEntradaBlogComponent } from './ver-entrada-blog.component';

describe('VerEntradaBlogComponent', () => {
  let component: VerEntradaBlogComponent;
  let fixture: ComponentFixture<VerEntradaBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerEntradaBlogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerEntradaBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
