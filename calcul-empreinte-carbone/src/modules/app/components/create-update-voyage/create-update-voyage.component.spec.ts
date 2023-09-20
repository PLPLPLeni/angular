import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUpdateVoyageComponent } from './create-update-voyage.component';

describe('CreateUpdateVoyageComponent', () => {
  let component: CreateUpdateVoyageComponent;
  let fixture: ComponentFixture<CreateUpdateVoyageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateUpdateVoyageComponent]
    });
    fixture = TestBed.createComponent(CreateUpdateVoyageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
