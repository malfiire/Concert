import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstrumentoComponent } from './instrumento.component';

describe('InstrumentoComponent', () => {
  let component: InstrumentoComponent;
  let fixture: ComponentFixture<InstrumentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstrumentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstrumentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
