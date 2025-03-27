import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavComponent } from './sidenav.component';

describe('SidenavComponent', () => {
  let component: SidenavComponent;
  let fixture: ComponentFixture<SidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidenavComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have instance of drawer component', () => {
    const drawer = component.drawer();
    expect(drawer).toBeTruthy();
  });

  it('should toggle drawer', () => {
    const drawer = component.drawer();
    const spy = jest.spyOn(drawer, 'toggle');
    component.updateValue();
    expect(spy).toHaveBeenCalled();
  });
});
