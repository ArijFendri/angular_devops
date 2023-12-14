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
  categorieSelected:any; 
  

    constructor(private _fb: FormBuilder, private _filmService: FilmService, private _dialogueRef: DialogRef<FilmAddEditComponent> ){
 _filmService.getAllCategories().subscribe(cat=>{
  this.categories=cat
})
 _filmService.GetAllRealisateur().subscribe(r=>{
  this.realisateurs=r
})

      this.filmForm = this._fb.group({
          nomFilm: '',
          dateSortie: '',
          afficheFilm: '',
          realisateur :'' ,
          categorie:"" ,
      })
      }


      onFormSubmit(){
        console.log(this.filmForm.controls['realisateur'].value);
        
        if(this.filmForm.valid){
          this._filmService.addFilm({
            nomFilm: this.filmForm.controls['nomFilm'].value,
            dateSortie: this.filmForm.controls['dateSortie'].value+"".substring(0, 10),
            afficheFilm: this.filmForm.controls['afficheFilm'].value,
            realisateur :{'idRealisateur':this.filmForm.controls['realisateur'].value} ,
            categorie: {"id":this.filmForm.controls['categorie'].value}
    
        }).subscribe()
          
      }
}
}
