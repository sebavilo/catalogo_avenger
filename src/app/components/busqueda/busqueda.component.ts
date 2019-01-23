import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html'
})
export class BusquedaComponent implements OnInit {

heroes: any[] = [] //Arreglo que leera cuando encuentre las coincidencias. Por ser que pueden ser varias, se configura esta variable local como arreglo y como any
termino:string; //lo que sera ingresado en el input de busqueda


  constructor( private activatedRoute:ActivatedRoute,
                      private _heroesService: HeroesService) {

  }

  ngOnInit() {

    this.activatedRoute.params.subscribe( params =>{
      this.termino = params['termino'];
      console.log(params['termino']);
    this.heroes = this._heroesService.buscarHeroes( params['termino'] );
    console.log(this.heroes);//Desde acá mostrará los resultados
    })
  }
}
