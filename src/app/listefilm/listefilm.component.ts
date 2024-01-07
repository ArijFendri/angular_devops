import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FilmAddEditComponent } from '../film-add-edit/film-add-edit.component';
import { FilmService } from '../services/film.service';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listefilm',
  templateUrl: './listefilm.component.html',
  styleUrls: ['./listefilm.component.css']
})
export class ListefilmComponent {
  title = 'app';



  displayedColumns: string[] = [
    'nomFilm', 'dateSortie', 'afficheFilm', 'categorie', 'realisateur'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;



    films:any
    isadmin:any
    constructor(private _dialog: MatDialog,private filmService : FilmService, private router : Router){
      let x = localStorage.getItem('username')
      let y = localStorage.getItem('roles')
      if (x==null || y==null){
        this.router.navigate(['login'])
      }

      if (y=='ROLE_USER'){
          this.isadmin=false
      }
      if (y=='ROLE_ADMIN'){
        this.isadmin=true
    }


    this.filmService.getAllFilms().subscribe(f=>{this.films=f
    console.log(f);
    })


  }
  openFilmAddEditForm(){
    this._dialog.open(FilmAddEditComponent);
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteFilm(id: number) {
    this.filmService.deleteFilm(id).subscribe({
      next: (res) => {
        alert('Film Deleted !');
        this.refreshFilmList();
      },
      error: console.log,
  });
}


  private refreshFilmList() {
    this.filmService.getAllFilms().subscribe((films) => {
      this.films = films;
      this.dataSource = new MatTableDataSource(films);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  openEditForm(data: any){
    this._dialog.open(FilmAddEditComponent, {
    data,

  });
}
}
