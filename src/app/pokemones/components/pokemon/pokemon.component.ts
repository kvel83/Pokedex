import { Component, OnInit, Input } from '@angular/core';
import { EventEmitterService } from '../../services/event-emitter.service';
import { Pokemon } from '../../interfaces/pokemon.interface';
import { PokemonSelectedService } from '../../services/pokemon-selected.service';
import { PokemonsService } from '../../services/pokemons.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css'],
})
export class PokemonComponent {
  @Input()
  pokemonSel: string = "";
  errorExist: boolean = false;
  selectedPokemon!: Pokemon;
  abilities: string = '';
  types: string = '';

  constructor (private pokemonService:PokemonsService, private pokemonSelectedService: PokemonSelectedService, private eventEmitterService: EventEmitterService) {}
  ngOnInit(){
    if (this.eventEmitterService.subsVar==undefined) {
      this.eventEmitterService.subsVar = this.eventEmitterService.
      invokeGetPokemon.subscribe((name:string) => {
        this.getPokemon();
      });
    }
  };


  getPokemon(){
    this.pokemonSel = this.pokemonSelectedService.getPokemon();
    this.pokemonService.getPokemon(this.pokemonSel).subscribe(
      {
        next: response => {
          this.selectedPokemon =  response;
          this.getPokemonAbilities();
          this.getPokemonTypes();
        },
        error: error => {
                this.errorExist = true;
               }
      }
    );

  };

  getPokemonAbilities(){
    this.selectedPokemon.abilities.forEach(ability => {
      this.abilities = this.abilities + ' ' + ability.ability.name + ' ,'
    });
    this.abilities = this.abilities.substring(0, this.abilities.length - 1);
    };

  getPokemonTypes(){
    this.selectedPokemon.types.forEach(type => {
      this.types = this.types + ' ' + type.type.name + ' ,'
    });
    this.types = this.types.substring(0, this.types.length - 1);
  }

  }


