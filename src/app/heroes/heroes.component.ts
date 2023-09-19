import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  // hero = 'Windstorm';
  heroes: Hero[] = [];
  constructor(private heroService: HeroService,
    private messageService: MessageService) { }

  selectedHero?: Hero;

  ngOnInit(): void {
    this.getHeroes();
  }

  // Khi một siêu anh hùng được chọn,
  // phương thức này sẽ gán siêu anh hùng được chọn vào thuộc tính
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

getHeroes(): void {
  this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
}
}
