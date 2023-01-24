import { Component } from '@angular/core';
import { LisPokemonResult, Result } from '../../interfaces/listPokemonResult.interface';
import { PokemonsService } from '../../services/pokemons.service';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent {

  abc= [
    {
      letter:"A",
      amountOfExistence:0
    },
    {
      letter:"B",
      amountOfExistence:0
    },
    {
      letter:"C",
      amountOfExistence:0
    },
    {
      letter:"D",
      amountOfExistence:0
    },
    {
      letter:"E",
      amountOfExistence:0
    },
    {
      letter:"F",
      amountOfExistence:0
    },
    {
      letter:"G",
      amountOfExistence:0
    },
    {
      letter:"H",
      amountOfExistence:0
    },
    {
      letter:"I",
      amountOfExistence:0
    },
    {
      letter:"J",
      amountOfExistence:0
    },
    {
      letter:"K",
      amountOfExistence:0
    },
    {
      letter:"L",
      amountOfExistence:0
    },
    {
      letter:"M",
      amountOfExistence:0
    },
    {
      letter:"N",
      amountOfExistence:0
    },
    {
      letter:"O",
      amountOfExistence:0
    },
    {
      letter:"P",
      amountOfExistence:0
    },
    {
      letter:"Q",
      amountOfExistence:0
    },
    {
      letter:"R",
      amountOfExistence:0
    },
    {
      letter:"S",
      amountOfExistence:0
    },
    {
      letter:"T",
      amountOfExistence:0
    },
    {
      letter:"U",
      amountOfExistence:0
    },
    {
      letter:"V",
      amountOfExistence:0
    },
    {
      letter:"W",
      amountOfExistence:0
    },
    {
      letter:"X",
      amountOfExistence:0
    },
    {
      letter:"Y",
      amountOfExistence:0
    },
    {
      letter:"Z",
      amountOfExistence:0
    }
  ];
  listPokemonResult: LisPokemonResult = {
    count:0,
    next:"",
    previous:null,
    results:[]
  };
  pokemonFilteredTable:Result[] = [];
  errorExist: boolean = false;
  pokemonAmount: number = 0;

  constructor (private pokemonService:PokemonsService){this.searchPokemon();};

  ngOnInit(){

  }

  searchPokemon (){
    this.pokemonService.getPokemons("")
      .subscribe(
        {
          next: response => {
            this.listPokemonResult =  response;
            this.pokemonFilteredTable = this.listPokemonResult.results;
          },
          error: error => {
                  this.errorExist = true;
                 }
        }
      );
  };

  getPokemonNumberOf(letter: string){
    this.pokemonAmount = 0;
    this.pokemonFilteredTable.forEach(poke => {
      if (poke.name[0].toLowerCase() === letter.toLowerCase()){this.pokemonAmount+=1};
    });
    return this.pokemonAmount;



  }

}
