import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component implements OnInit {
  public compteur: number = 0;
  public result:number =0;

  operation(event:EventListener):number{

  	if(event.valueOf() == true){
		this.compteur=this.compteur+1;
	  	this.result = this.result+1
	  	return this.result    	
	  }
  	else{
		this.compteur=this.compteur-1;
	  	this.result = this.result-1
	  	return this.result    	
	  }
  
  }

  constructor() { }

  ngOnInit() {
  }

}
