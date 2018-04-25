import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {
	public compteur:number=0;
	@Output() public myEvent: EventEmitter<boolean> = new EventEmitter();


	addition(){
		this.myEvent.emit(true);
	}
    
    soustraction(){
    	this.myEvent.emit(false);
    }


  constructor() { }

  ngOnInit() {
  }

}
