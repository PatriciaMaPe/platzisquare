import { Component } from '@angular/core';
import {PlacesService} from '../services/places.service';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})

export class PlacesComponent {
  title = 'PlatziSquare';
  lat:number = 42.183513;
  lng:number = -8.8011916;
  places = null;

  constructor(private placesService: PlacesService){
      this.places = placesService.getPlaces();
  }

}
