import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PlatziSquare';
  places:any = [
    {proximity:1, distance: 1, active:true, name:'Flower shop Gardenia'},
    {proximity:1, distance: 1.8, active:false, name:'Bakery Dona'},
    {proximity:2, distance: 10, active:true, name:'Veterinary Little paws'},
    {proximity:3, distance: 35, active:true, name:'Takako Sushi Restaurant'},
    {proximity:3, distance: 120, active:true, name:'PizzaSpot'}
  ];
  lat:number = 42.183513;
  lng:number = -8.8011916;

  constructor(){

  }

}
