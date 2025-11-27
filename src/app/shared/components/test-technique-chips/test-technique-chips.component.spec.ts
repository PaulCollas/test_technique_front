/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TestTechniqueChipsComponent } from './test-technique-chips.component';

describe('TestTechniqueChipsComponent', () => {
  let component: TestTechniqueChipsComponent;
  let fixture: ComponentFixture<TestTechniqueChipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestTechniqueChipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestTechniqueChipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
