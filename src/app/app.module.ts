import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchPokemonComponent } from './search-pokemon/search-pokemon.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MdbFormsModule, MdbModule } from 'mdb-angular-ui-kit';

@NgModule({
  declarations: [
    AppComponent,
    SearchPokemonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MdbModule,
    MdbFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
