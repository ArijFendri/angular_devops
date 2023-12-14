import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FilmAddEditComponent } from './film-add-edit/film-add-edit.component';
import { FilmService } from './services/film.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
films:any
  constructor(private _dialog: MatDialog,private filmService : FilmService){
this.filmService.getAllFilms().subscribe(f=>{this.films=f
console.log(f);
})

  }
  openFilmAddEditForm(){
    this._dialog.open(FilmAddEditComponent);
  }
}
