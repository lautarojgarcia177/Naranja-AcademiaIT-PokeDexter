import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchPokemonComponent } from './search-pokemon/search-pokemon.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MdbFormsModule, MdbModule } from 'mdb-angular-ui-kit';
import { PokemonComponent } from './pokemon/pokemon.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { SpinnerHttpInterceptor } from './http-interceptors/spinner-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    SearchPokemonComponent,
    PokemonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MdbModule,
    MdbFormsModule,
    NgxSpinnerModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: SpinnerHttpInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
