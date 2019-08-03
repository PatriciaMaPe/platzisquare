import {Directive, OnInit, ElementRef, Renderer2, Input} from "@angular/core";

@Directive({
  selector: '[standout]' //atribute type -> []
})

export class StandOutDirective implements OnInit{
  constructor(private theRef: ElementRef, private renderer: Renderer2){}

  @Input('standout') plan : string = '';

  ngOnInit(){
      if(this.plan == 'premium'){
        this.renderer.setStyle(this.theRef.nativeElement,'background-color', 'yellow');
        this.renderer.setStyle(this.theRef.nativeElement,'font-weight', 'bold');
        //setStyle parameters : native element, css atribute, value

      }
  }
}
