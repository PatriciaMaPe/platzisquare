import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AgmCoreModule } from '@agm/core';

import {StandOutDirective} from "./directives/standout.directive";
import {CountClicksDirective} from "./directives/count-clicks.directive";
import {DetailComponent} from "./detail/detail.component";
import {PlacesComponent} from "./places/places.component";
import {ContactComponent} from "./contact/contact.component";
import {Routes, RouterModule} from '@angular/router';

import {PlacesService} from './services/places.service';

const appRoutes: Routes = [
  {path:'', component: PlacesComponent},
  {path:'places', component: PlacesComponent},
  {path:'detail/:id', component: DetailComponent},
  {path:'contact', component: ContactComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    StandOutDirective,
    CountClicksDirective,
    DetailComponent,
    PlacesComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: ''
    }),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [PlacesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
