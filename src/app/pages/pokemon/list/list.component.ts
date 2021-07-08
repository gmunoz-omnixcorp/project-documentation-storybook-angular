import { Component, OnInit } from '@angular/core';
import { PokemonServicesService } from 'src/app/services/pokemon-services.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  listPokemon: any = [];
  constructor(private PokemonServicesService: PokemonServicesService) { }

  ngOnInit(): void {
    this.PokemonServicesService.getPokemon().subscribe( (resp:any) => {
      this.listPokemon = resp.results;
      console.log(resp)
    })
  }

}
