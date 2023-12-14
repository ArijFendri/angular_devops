import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FilmService } from '../services/film.service';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-film-add-edit',
  templateUrl: './film-add-edit.component.html',
  styleUrls: ['./film-add-edit.component.css']
})



export class FilmAddEditComponent {
    filmForm : FormGroup;
    realisateurs :any;
    categories: any;


    constructor(private _fb: FormBuilder, private _filmService: FilmService, private _dialogueRef: DialogRef<FilmAddEditComponent> ){
      this.filmForm = this._fb.group({
          nomFilm: '',
          dateSortie: '',
          afficheFilm: '',
          realisateur :'' ,
          categorie: '',


      })
      }


      onFormSubmit(){
        if(this.filmForm.valid){
          console.log("AHMED111");
          this._filmService.addFilm(this.filmForm.value).subscribe()


        }
      }
}
