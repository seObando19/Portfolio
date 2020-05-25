import { Component, OnInit } from '@angular/core';
import { Skill } from '../models/skills';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  skills:Array<Skill> = new Array<Skill>();
  constructor() { }

  ngOnInit(): void {
    this.skills.push(
      {
        id:1,
        name:'Html5',
        active:true
      },
      {
        id:2,
        name:'Css3',
        active:true
      },
      {
        id:3,
        name:'Javascript',
        active:true
      },
      {
        id:4,
        name:'Php',
        active:true
      },
      {
        id:5,
        name:'Nodejs',
        active:true
      },
      {
        id:6,
        name:'Express',
        active:true
      },
      {
        id:7,
        name:'Angular',
        active:true
      },
      {
        id:8,
        name:'Typescript',
        active:true
      },
      {
        id:9,
        name:'Firebase',
        active:true
      },
      {
        id:10,
        name:'Git',
        active:true
      },
      {
        id:11,
        name:'Java',
        active:true
      },
      {
        id:12,
        name:'Github',
        active:true
      },
      {
        id:13,
        name:'Bootstrap',
        active:true
      },
      {
        id:14,
        name:'Mysql',
        active:true
      },
      {
        id:15,
        name:'Sql',
        active:true
      },
      {
        id:16,
        name:'MongoDb',
        active:true
      },
      {
        id:17,
        name:'Scrum',
        active:true
      },
      {
        id:18,
        name:'Android',
        active:true
      },
      {
        id:19,
        name:'Reactjs',
        active:true
      },
      {
        id:20,
        name:'React Native',
        active:true
      },

    )
  }


}
