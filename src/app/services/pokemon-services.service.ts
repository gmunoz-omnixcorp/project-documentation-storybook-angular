import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonServicesService {
  public endpoint = 'https://pokeapi.co/api/v2/pokemon/';
  constructor(private _http: HttpClient) { }
  public getPokemon() {
    return this._http.get(this.endpoint)
  }
}
