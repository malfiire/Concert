import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicoFormComponent } from './musico-form.component';

describe('MusicoFormComponent', () => {
  let component: MusicoFormComponent;
  let fixture: ComponentFixture<MusicoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MusicoFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
