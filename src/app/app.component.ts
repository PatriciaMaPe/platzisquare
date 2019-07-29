import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PlatziSquare';
  places:any = [
    {active:true, name:'Flower shop Gardenia'},
    {active:false, name:'Bakery Dona'},
    {active:true, name:'Veterinary Little paws'},
    {active:true, name:'Takako Sushi Restaurant'},
    {active:true, name:'PizzaSpot'}
  ];
  lat:number = 42.183513;
  lng:number = -8.8011916;

  constructor(){

  }

}
