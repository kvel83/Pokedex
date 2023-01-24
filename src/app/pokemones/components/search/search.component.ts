import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';




import { LisPokemonResult, Result } from '../../interfaces/listPokemonResult.interface';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  @Input()
  listPokemonResults!: LisPokemonResult;
  @Output()
  pokemonSelected: EventEmitter<string> = new EventEmitter<string>();
  pokemon: string = '';
  pokemonFilter: Result[] = [];

   filter(pokemon: string): Result[]{
    if (pokemon !== ''){
      let _pokemon = pokemon.toLowerCase();
      this.pokemonFilter = this.listPokemonResults.results.filter(pokemon => pokemon.name.toLowerCase().indexOf(_pokemon) === 0);
      console.log(this.pokemonFilter);
      return this.listPokemonResults.results.filter(pokemon => pokemon.name.toLowerCase().indexOf(_pokemon) === 0)
    }else{
      this.pokemonFilter = []
      return this.pokemonFilter;
    };
  };

  sendPokemon(pokemon: string){
    this.pokemonFilter = [];
    this.pokemonSelected.emit(pokemon);
  }


}
