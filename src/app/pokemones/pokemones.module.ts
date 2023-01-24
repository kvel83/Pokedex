import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PokemonComponent } from './components/pokemon/pokemon.component';
import { GeneralComponent } from './components/general/general.component';
import { TableComponent } from './components/table/table.component';
import { SearchComponent } from './components/search/search.component';

import {MatPaginatorModule} from '@angular/material/paginator';


import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FilterPipe } from './pipes/filter.pipe';
import { EventEmitterService } from './services/event-emitter.service';






@NgModule({
  declarations: [
    PokemonComponent,
    GeneralComponent,
    TableComponent,
    SearchComponent,
    FilterPipe
  ],
  exports:[
    GeneralComponent,
    PokemonComponent,
    TableComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatPaginatorModule,
    ReactiveFormsModule
  ],
  providers: [
    EventEmitterService
  ]
})
export class PokemonesModule { }
