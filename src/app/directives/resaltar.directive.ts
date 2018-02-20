import { Directive, ElementRef, Renderer2, OnInit, Input } from "@angular/core";

@Directive({
    selector: '[resaltar]'
})

export class ResaltarDirective implements OnInit{
    constructor(private elRef: ElementRef, private render: Renderer2){}
    @Input('resaltar') plan : string = ' ';
    ngOnInit(){
        if(this.plan === 'pagado'){
            this.render.setStyle(this.elRef.nativeElement, 'background-color', 'yellow');
            this.render.setStyle(this.elRef.nativeElement, 'font-weight', 'bold');
        }
    }
}