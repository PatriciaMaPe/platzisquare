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
import {Routes, RouterModule} from '@angular/router';

const appRoutes: Routes = [
  {path:'', component: PlacesComponent},
  {path:'places', component: PlacesComponent},
  {path:'detail/:id', component: DetailComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    StandOutDirective,
    CountClicksDirective,
    DetailComponent,
    PlacesComponent
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
