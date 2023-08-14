import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-anime-form',
  templateUrl: './anime-form.component.html',
  styleUrls: ['./anime-form.component.scss']
})
export class AnimeFormComponent {

  animeForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl('foto', Validators.minLength(10)),
    cover: new FormControl(),
  })

  animes: any = []

  submitData(data:any){
    console.log(data);
    
    this.animes.push(data)
  }

  validasiForm(prop: string): FormGroup{
    return this.animeForm.get(prop) as FormGroup
  }

}
