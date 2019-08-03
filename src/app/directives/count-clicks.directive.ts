import {Directive, HostListener} from "@angular/core";

@Directive({
  selector: 'a[count-clicks]' //solamente aplica par ancors (hipervinculos)
})


export class CountClicksDirective{
  clicksNum = 0;
  @HostListener('click', ['$event.target'] ) onClick(btn){
    console.log('a', btn, "Number of clicks: ", this.clicksNum++)
  }
  //evento, lo que capturamos del evento, en que momento se dispara el evento,

}
