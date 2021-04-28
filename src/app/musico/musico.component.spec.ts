import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicoComponent } from './musico.component';

describe('MusicoComponent', () => {
  let component: MusicoComponent;
  let fixture: ComponentFixture<MusicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MusicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
