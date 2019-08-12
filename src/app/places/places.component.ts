import { Component } from '@angular/core';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})

export class PlacesComponent {
  title = 'PlatziSquare';
  places:any = [
    {id: 1, plan: 'premium', proximity:1, distance: 1, active:true, name:'Flower shop Gardenia', description:'Lorem ipsum dolor sit amet consectetur adipiscing, elit magna aenean fringilla a platea, aliquet dictumst vulputate scelerisque orci.'},
    {id: 2, plan: 'free', proximity:1, distance: 1.8, active:false, name:'Bakery Dona', description:'Lorem ipsum dolor sit amet consectetur adipiscing, elit magna aenean fringilla a platea, aliquet dictumst vulputate scelerisque orci.'},
    {id: 3, plan: 'free', proximity:2, distance: 10, active:true, name:'Veterinary Little paws', description:'Lorem ipsum dolor sit amet consectetur adipiscing, elit magna aenean fringilla a platea, aliquet dictumst vulputate scelerisque orci.'},
    {id: 4, plan: 'premium', proximity:3, distance: 35, active:true, name:'Takako Sushi Restaurant', description:'Lorem ipsum dolor sit amet consectetur adipiscing, elit magna aenean fringilla a platea, aliquet dictumst vulputate scelerisque orci.'},
    {id: 5, plan: 'free', proximity:3, distance: 120, active:true, name:'PizzaSpot', description:'Lorem ipsum dolor sit amet consectetur adipiscing, elit magna aenean fringilla a platea, aliquet dictumst vulputate scelerisque orci.'}
  ];
  lat:number = 42.183513;
  lng:number = -8.8011916;

  constructor(){

  }

}
