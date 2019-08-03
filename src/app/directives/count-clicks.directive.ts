import {Directive, HostListener, HostBinding} from "@angular/core";

@Directive({
  selector: 'li[count-clicks]' //only for anchor (hiperlinks)
})


export class CountClicksDirective{
  clicksNum = 0;
  @HostBinding('style.opacity') opacity: number = .1
  @HostListener('click', ['$event.target'] ) onClick(btn){ //the event is associate with the onClick
    console.log('a', btn, "Number of clicks: ", this.clicksNum++)
    this.opacity += .1;
  }


}
