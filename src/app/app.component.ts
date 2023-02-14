import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'site mentiroso';

obterAutor(){
 return "Emilly Linda"
 }

 nome = "vitoria";
 sobrenome = "ferreira";
 idade = "10";

 nomeCompleto(){
  return this.nome + " " + this.sobrenome;
 }
}

