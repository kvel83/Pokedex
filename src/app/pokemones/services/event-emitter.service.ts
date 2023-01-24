import { Injectable, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';

@Injectable({
  providedIn: 'root'
})
export class EventEmitterService {

  invokeGetPokemon = new EventEmitter();
  subsVar!: Subscription;

  constructor() { }

  onSearchPokemonClick(){
    this.invokeGetPokemon.emit();
  }
}
