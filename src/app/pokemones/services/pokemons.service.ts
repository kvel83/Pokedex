import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LisPokemonResult } from '../interfaces/listPokemonResult.interface';
import { Pokemon } from '../interfaces/pokemon.interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {
  subscribe(arg0: { next: (response: any) => void; error: (error: any) => void; }) {
    throw new Error('Method not implemented.');
  }

  private apiUrl: string = 'https://pokeapi.co/api/v2/pokemon/';
  private detailURL: string = '?limit=1279';

  constructor(private http: HttpClient) { }

  getPokemons(detail:string): Observable<LisPokemonResult>{
    return this.http.get<LisPokemonResult>(this.apiUrl + this.detailURL)}
  getPokemon(detail:string): Observable<Pokemon>{
    return this.http.get<Pokemon>(this.apiUrl + detail)}
  }

