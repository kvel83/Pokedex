import { Component, EventEmitter,OnInit, Output } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { LisPokemonResult, Result } from '../../interfaces/listPokemonResult.interface';
import { PokemonsService } from '../../services/pokemons.service';
import { PokemonComponent } from '../pokemon/pokemon.component';
import { PokemonSelectedService } from '../../services/pokemon-selected.service';
import { EventEmitterService } from '../../services/event-emitter.service';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  providers: [PokemonComponent]
})
export class TableComponent implements OnInit{
  pokemon: string = '';
  errorExist : boolean = false;
  listPokemonResult: LisPokemonResult = {
    count:0,
    next:"",
    previous:null,
    results:[]
  };
  pokemonFilteredTable:Result[] = [];
  filteredPokemons: Result[] = [];
  from: number = 0;
  pageSize: number = 20;
  to: number = 20;
  // @Output()
  // pokemonSelected: EventEmitter<string> = new EventEmitter<string>();
  @Output() pokemonSelected = new EventEmitter<string>;
  pokemonFilter: Result[] = [];
  // pokemonFilter: Observable<string[]>;


  constructor(private pokemonService:PokemonsService, private pokemonSelectedService: PokemonSelectedService, private eventEmitterService: EventEmitterService) {
    this.pokemon = pokemonSelectedService.getPokemon();
  }

  ngOnInit(){
    this.searchPokemon();
  }

  private _filter(val: string): Result[]{
    const formatVal = val.toLocaleLowerCase();


    return this.listPokemonResult.results.filter(pokemon => pokemon.name.toLowerCase().indexOf(formatVal) === 0);
  }

  changePage(e:PageEvent){
    console.log(e);
    this.from = e.pageIndex * e.pageSize;
    this.to = this.from + e.pageSize;

  }

  searchPokemon (){
    this.errorExist = false;
    this.pokemonService.getPokemons("")
      .subscribe(
        {
          next: response => {
            this.listPokemonResult =  response;
            this.pokemonFilteredTable = this.listPokemonResult.results;
            console.log(this.pokemonFilteredTable);
            this.pokemonFilteredTable = this.pokemonFilteredTable.sort((firstPokemon: Result, secondPokemon: Result) => (firstPokemon.name > secondPokemon.name)? 1 : -1);
          },
          error: error => {
                  this.errorExist = true;

                 }
        }
      );
  };
  filter(): Result[]{
    if (this.pokemon !== ''){
      let _pokemon = this.pokemon.toLowerCase();
      this.pokemonFilter = this.listPokemonResult.results.filter(pokemon => pokemon.name.toLowerCase().indexOf(_pokemon) === 0);
      console.log(this.pokemonFilter);
      return this.listPokemonResult.results.filter(pokemon => pokemon.name.toLowerCase().indexOf(_pokemon) === 0)
    }else{
      this.pokemonFilter = []
      return this.pokemonFilter;
    };
   };
   sendPokemon(pokemon: string){
     this.pokemonFilter = [];
     this.pokemon = pokemon;
     console.log(pokemon);
     this.pokemonSelectedService.setPokemon(pokemon);
     this.pokemon = this.pokemonSelectedService.getPokemon();
    //  this.pokemonSelected.emit(pokemon);
    this.eventEmitterService.onSearchPokemonClick();


   }
}
