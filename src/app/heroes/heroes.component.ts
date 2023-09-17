import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  // hero = 'Windstorm';
  heroes = HEROES;

  selectedHero?: Hero;
  // Khi một siêu anh hùng được chọn,
  // phương thức này sẽ gán siêu anh hùng được chọn vào thuộc tính
onSelect(hero: Hero): void {
  this.selectedHero = hero;
}
}
