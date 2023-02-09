import { appState } from "../AppState.js"
import { WildPokemon } from "../Models/Pokemon.js"
import { pokedexApiService } from "../Services/PokedexApiService.js"
import { Pop } from "../Utils/Pop.js"
import { setHTML } from "../Utils/Writer.js"

function _drawPokedex(){
    let template = ''
    appState.pokedex.forEach(p => template += WildPokemon.PokedexListTemplate(p))
    setHTML('pokedex-list', template)
}

function _drawPokemon(){
    setHTML('pokemon', appState.pokemon?.PokemonTemplate)
}

export class PokedexApiController {
    constructor(){
        this.getPokemon()
        appState.on('pokedex', _drawPokedex)
        appState.on('pokemon', _drawPokemon)
    }

    async getPokemon() {
    try {
        await pokedexApiService.getPokemon()
    } catch (error) {
        console.error(error)
        Pop.error(error.message)
    }
    }

    async getPokemonByName(name){
        try {
            console.log(name, 'poke name')
            await pokedexApiService.getPokemonByName(name)
        } catch (error) {
            Pop.error(error)
            console.log(error.message);
        }
    }
}