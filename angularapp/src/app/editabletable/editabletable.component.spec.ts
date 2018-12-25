/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EditabletableComponent } from './editabletable.component';

describe('EditabletableComponent', () => {
  let component: EditabletableComponent;
  let fixture: ComponentFixture<EditabletableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditabletableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditabletableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
