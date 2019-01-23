import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styles: []
})
export class HeroeTarjetaComponent implements OnInit {

@Input() heroe: any = {};
@Input() index: number;
@Output() heroeSeleccionado: EventEmitter<number>; //Output trabaja con eventos, en este caso tiene como nombre heroeSeleccionado y como valor se ingresa EventEmitter<tipo_de_dato>. Acá usaremos number, por ser el tipo de dato proveniente de la variable index de la linea anterior.

//En el costructor inicializamos el EventEmitter
  constructor( private router:Router) {
    this.heroeSeleccionado = new EventEmitter();
  }

  ngOnInit() {
  }

  verHeroe(){
      //console.log(this.index);
        this.router.navigate( ['/heroe',this.index] );
        //this.heroeSeleccionado.emit( this.index ); //Emitimos la info del heroe a partir del ID.
  }
}
