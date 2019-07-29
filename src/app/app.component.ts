import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PlatziSquare';
  isReady = false;

  constructor(){
    setTimeout(() => {
      this.isReady = true;
    }, 3000)
  }
}
