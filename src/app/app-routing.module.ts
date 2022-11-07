import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BreakingBadComponent } from './components/breaking-bad/breaking-bad.component';
import { RickAndMortyComponent } from './components/rick-and-morty/rick-and-morty.component';

const routes: Routes = [
  {
    path: '',
    component: BreakingBadComponent,
  },
  { path: 'RyM', component: RickAndMortyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
