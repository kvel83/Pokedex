import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { Result } from './pokemones/interfaces/listPokemonResult.interface';
// import { ConsoleReporter } from 'jasmine';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pokedex';
  pokemonName!: string;
  subject = new Subject<string>();

  getPokemon(pokemon: string){
    console.log(pokemon);
    this.pokemonName = pokemon;
    console.log(this.pokemonName);
  }
}
