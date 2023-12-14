import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FilmAddEditComponent } from './film-add-edit/film-add-edit.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private _dialog: MatDialog){

  }
  openFilmAddEditForm(){
    this._dialog.open(FilmAddEditComponent);
  }
}
