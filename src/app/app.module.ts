import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BreakingBadComponent } from './components/breaking-bad/breaking-bad.component';
import { RickAndMortyComponent } from './components/rick-and-morty/rick-and-morty.component';

@NgModule({
  declarations: [AppComponent, RickAndMortyComponent, BreakingBadComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
