import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PlatziSquare';
  places:any = [
    {name:'Flower shop Gardenia'},
    {name:'Bakery Dona'},
    {name:'Veterinary Little paws'}
  ];

  constructor(){

  }

}
