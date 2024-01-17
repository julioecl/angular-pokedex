import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonService } from '../../services/pokemon.service';
import { PokemonData } from '../../models/pokemonData';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  pokemon?:PokemonData | any
  constructor(
    private service:PokemonService
  ) {
    this.pokemon = {
      id:0,
      name:'',
      sprites: {
        other: {
          dream_world:{
            front_default:''
          }
        }
      },
      types:[]
    }
  }

  ngOnInit(): void{
    this.getPokemon('pikachu')
  }

  getPokemon(searchName:string){
    this.service.getPokemon(searchName).subscribe(
      {
        next: (res) => {
          this.pokemon ={
            id: res.id,
            name: (res.name),
            sprites: res.sprites.other.dream_world.front_default,
            types: res.types
          }
        }
      }
    )
  }
}
