import { Component, OnInit } from '@angular/core';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  url:string;
  cursos:string[];

  constructor(private service: CursosService) { 
    this.url = 'http://teste.com';

    this.cursos = service.getCursos();
  }

  ngOnInit(): void {
  }

}
