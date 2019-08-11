import { Component } from '@angular/core';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})

export class PlacesComponent {
  title = 'PlatziSquare';
  places:any = [
    {id: 1, plan: 'premium', proximity:1, distance: 1, active:true, name:'Flower shop Gardenia'},
    {id: 2, plan: 'free', proximity:1, distance: 1.8, active:false, name:'Bakery Dona'},
    {id: 3, plan: 'free', proximity:2, distance: 10, active:true, name:'Veterinary Little paws'},
    {id: 4, plan: 'premium', proximity:3, distance: 35, active:true, name:'Takako Sushi Restaurant'},
    {id: 5, plan: 'free', proximity:3, distance: 120, active:true, name:'PizzaSpot'}
  ];
  lat:number = 42.183513;
  lng:number = -8.8011916;

  constructor(){

  }

}
