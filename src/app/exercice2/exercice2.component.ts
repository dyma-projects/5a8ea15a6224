import { Component, OnInit, ViewChild, ElementRef, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-exercice2',
  templateUrl: './exercice2.component.html',
  styleUrls: ['./exercice2.component.css']
})
export class Exercice2Component implements OnInit {

 	public valeur: string;
 	@ViewChild('val') public el :ElementRef ;

 	setVal():string{
  		 return this.valeur = this.el.nativeElement.value;
 	}  


  constructor() { }

  ngOnInit() {
  }

}
