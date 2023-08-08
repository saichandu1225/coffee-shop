/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SideOutComponent } from './side-out.component';

describe('SideOutComponent', () => {
  let component: SideOutComponent;
  let fixture: ComponentFixture<SideOutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideOutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
