import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HeroListComponent} from './hero-list/hero-list.component';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
const heroesRoutes: Routes = [
  { path: 'heroes', redirectTo: '/superheroes' },
  { path: 'hero/:id', redirectTo: '/superheroes/:id' },
  { path: 'superheroes',  component: HeroListComponent, data: { animation: 'heroes' } },
  { path: 'superheroes/:id', component: HeroDetailComponent, data: { animation: 'hero' } }
];

@NgModule({
  imports: [
    RouterModule.forChild(heroesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class HeroesRoutingModule { }
