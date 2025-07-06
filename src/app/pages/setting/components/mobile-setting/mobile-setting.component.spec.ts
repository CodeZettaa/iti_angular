import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileSettingComponent } from './mobile-setting.component';

describe('MobileSettingComponent', () => {
  let component: MobileSettingComponent;
  let fixture: ComponentFixture<MobileSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileSettingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
