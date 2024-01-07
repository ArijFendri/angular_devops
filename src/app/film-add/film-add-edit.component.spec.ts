import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { FilmAddEditComponent } from './film-add-edit.component';

describe('FilmAddEditComponent', () => {
  let component: FilmAddEditComponent;
  let fixture: ComponentFixture<FilmAddEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilmAddEditComponent],
      imports: [ReactiveFormsModule],
      providers: [
        { provide: MatDialogRef, useValue: {} },
      ],
    });
    fixture = TestBed.createComponent(FilmAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
