import {Injectable} from '@angular/core';
@Injectable()
export class PlacesService{
  places:any = [
    {id: 1, plan: 'premium', proximity:1, distance: 1, active:true, name:'Flower shop Gardenia', description:'Lorem ipsum dolor sit amet consectetur adipiscing, elit magna aenean fringilla a platea, aliquet dictumst vulputate scelerisque orci.'},
    {id: 2, plan: 'free', proximity:1, distance: 1.8, active:false, name:'Bakery Dona', description:'Lorem ipsum dolor sit amet consectetur adipiscing, elit magna aenean fringilla a platea, aliquet dictumst vulputate scelerisque orci.'},
    {id: 3, plan: 'free', proximity:2, distance: 10, active:true, name:'Veterinary Little paws', description:'Lorem ipsum dolor sit amet consectetur adipiscing, elit magna aenean fringilla a platea, aliquet dictumst vulputate scelerisque orci.'},
    {id: 4, plan: 'premium', proximity:3, distance: 35, active:true, name:'Takako Sushi Restaurant', description:'Lorem ipsum dolor sit amet consectetur adipiscing, elit magna aenean fringilla a platea, aliquet dictumst vulputate scelerisque orci.'},
    {id: 5, plan: 'free', proximity:3, distance: 120, active:true, name:'PizzaSpot', description:'Lorem ipsum dolor sit amet consectetur adipiscing, elit magna aenean fringilla a platea, aliquet dictumst vulputate scelerisque orci.'}
  ];

  public getPlaces(){
    return this.places;
  }

  public getPlace(id){
    return this.places.filter( (place) => { return place.id == id } )[0] || null;
    // like a foreach of the elements with the same id condition.
    // Filter always return an array so we take the first element and
    // if the condition isn't true, return null
  }
}
