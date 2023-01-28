import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountingSectionComponent } from './accounting-section.component';

describe('AccountingSectionComponent', () => {
  let component: AccountingSectionComponent;
  let fixture: ComponentFixture<AccountingSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountingSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountingSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
