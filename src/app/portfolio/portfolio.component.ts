import { Component, OnInit } from '@angular/core';

interface Project {
  id:number,
  img:string,
  url:string,
  title:string,
  text:string,
  active:boolean
}

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  projects:Array<Project> = [
    {
      id:1,
      img:'../../assets/img/proyectos/nodeApp.png',
      url:'https://github.com/seObando19/Note-App',
      title:'Node-App',
      text:'App de notas con CRUD y login.',
      active:true
    },
    {
      id:2,
      img:'../../assets/img/proyectos/ProjectLibrary.png',
      url:'https://github.com/seObando19/ProjectLibrary',
      title:'Project-Library',
      text:'App de una biblioteca para CRUD de los libros.',
      active:true
    },
    {
      id:3,
      img:'../../assets/img/proyectos/UploadFiles-ENA.png',
      url:'https://github.com/seObando19/Upload-Files',
      title:'Upload Files',
      text:'Proyecto basico para subir archivos Express-Angular.',
      active:true
    },
    {
      id:4,
      img:'../../assets/img/proyectos/trackPost.png',
      url:'https://github.com/seObando19/Node-Audio-Stream',
      title:'Node-Audio-Stream',
      text:'Proyecto practico el cual consiste el la subida de archivos de musica.',
      active:true
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
