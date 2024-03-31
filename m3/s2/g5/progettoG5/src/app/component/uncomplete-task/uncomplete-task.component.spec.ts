import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UncompleteTaskComponent } from './uncomplete-task.component';

describe('UncompleteTaskComponent', () => {
  let component: UncompleteTaskComponent;
  let fixture: ComponentFixture<UncompleteTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UncompleteTaskComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UncompleteTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
