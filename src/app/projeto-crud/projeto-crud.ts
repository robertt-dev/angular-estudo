import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-projeto-crud',
  imports: [ReactiveFormsModule],
  templateUrl: './projeto-crud.html',
  styleUrl: './projeto-crud.scss',
})
export class ProjetoCrud {
  //controle de visibilidade dos botões
  btnCadastrar:boolean = true;

  //objeto do tipo FormGroup
  pessoa = new FormGroup({
    nome: new FormControl(''),
    idade: new FormControl(''),
    cidade: new FormControl('')
  });
}
