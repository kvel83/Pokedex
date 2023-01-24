import { Injectable } from '@angular/core';
import { Pokemon } from '../interfaces/pokemon.interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonSelectedService {

  private pokemon: string = '';

  constructor() { }

  setPokemon(pokemon: string){
    this.pokemon = pokemon;
  }

  getPokemon(){
    return this.pokemon
  }


}
