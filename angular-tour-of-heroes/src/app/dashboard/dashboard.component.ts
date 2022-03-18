import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { Pet } from '../pet';
import { HeroService } from '../hero.service';
import { PetService } from '../pet.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  pets: Pet[] = [];

  constructor(private heroService: HeroService, private petService: PetService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }

  gePets(): void {
    this.petService.getPets()
      .subscribe(pets => this.heroes = pets.slice(1, 5));
  }
}