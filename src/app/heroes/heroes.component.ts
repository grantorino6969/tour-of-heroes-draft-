import { Component } from '@angular/core';
import { Hero } from '../hero';
//import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {
 //heroes = HEROES;
 heroes: Hero[] = [];
 selectedHero?: Hero;

 constructor(private heroService: HeroService, private messageService:MessageService) {}

 ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
                     .subscribe(heroes =>(this.heroes = heroes)
                    );
  }
 
  //NO LONGER USED
  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  //   this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  //   console.log(this.selectedHero);
  // }
 
}
