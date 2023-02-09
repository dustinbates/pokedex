import { appState } from "../AppState.js";
import { WildPokemon } from "../Models/Pokemon.js";
import { pokedexApi } from "./AxiosService.js"

class PokedexApiService{
    async getPokemonByName(name) {
        const res = await pokedexApi.get(name)
        console.log('get by index', res.data);
        appState.pokemon = new WildPokemon(res.data)
        console.log('got the pokemon ', appState.pokemon);
        
    }

    async getPokemon() {
        const res = await pokedexApi.get('?limit=151')
        console.log('get pokeApi pokemon', res.data);
        appState.pokedex = res.data.results
    }

}

export const pokedexApiService = new PokedexApiService()