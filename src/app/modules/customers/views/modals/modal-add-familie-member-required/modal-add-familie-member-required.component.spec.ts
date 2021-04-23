import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddFamilieMemberRequiredComponent } from './modal-add-familie-member-required.component';

describe('ModalAddFamilieMemberRequiredComponent', () => {
  let component: ModalAddFamilieMemberRequiredComponent;
  let fixture: ComponentFixture<ModalAddFamilieMemberRequiredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAddFamilieMemberRequiredComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAddFamilieMemberRequiredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
