import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})

export class HeroeComponent {

  heroe: any = {};
  editorialImg: string;

  constructor(private activatedRoute: ActivatedRoute, private heroesService: HeroesService) {
    // Se obtiene el valor por parametro que esta en el activatedRoute
    activatedRoute.params.subscribe(params => {

      this.heroe = this.heroesService.getHeroe(params['id']);
      this.validateImage();
      // console.log(this.hero);
    });

  }

  validateImage() {

    if (this.heroe.casa === 'DC') {
      this.editorialImg = 'assets/images/dc.png';
      console.log(this.editorialImg);
    } else {
      this.editorialImg = 'assets/images/marvel.png';
      console.log(this.editorialImg);
    }

  }

}
