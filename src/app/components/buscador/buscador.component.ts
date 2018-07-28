import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../servicios/heroes.service';
import { HeroesComponent } from '../heroes/heroes.component';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  providers: [HeroesComponent],
})
export class BuscadorComponent implements OnInit {

heroes: Heroe[] = [];
termino: string;

  constructor( private activatedRoute: ActivatedRoute,
              private _heroesService: HeroesService,
            public heroesComponent: HeroesComponent) {

               }

  ngOnInit() {

    this.activatedRoute.params.subscribe ( params => {
      // console.log(params['termino']);
      this.termino = params['termino'];
      this.heroes = this._heroesService.buscarHeroes( params['termino']);
      console.log( this.heroes);
    });

  }


}
