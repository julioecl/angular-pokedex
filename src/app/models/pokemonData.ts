export type PokemonData = {
  name:string
  id:number
  sprites:{
    other:{
      dream_world:{
        front_default: any
      }
    }
  }
  types:{
    slot:number
    type:{
      name:string
      url:string
    }
  }[]
}
