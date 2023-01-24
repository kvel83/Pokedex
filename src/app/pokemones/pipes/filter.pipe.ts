import { Pipe, PipeTransform } from '@angular/core';
import { Result } from '../interfaces/listPokemonResult.interface';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value:any,args: any): any {
    const pokemonsResult: Result[] = [];
    for (const pokemon of value){
      if (pokemon.name.indexOf(args.toLowerCase()) > -1){
        pokemonsResult.push(pokemon);
      };
    };
    return pokemonsResult;
  };

}
