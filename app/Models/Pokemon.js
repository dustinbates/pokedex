export class WildPokemon {
    constructor(data) {
        this.name = data.name.charAt(0).toUpperCase() + data.name.slice(1)
        this.url = data.url
        // @ts-ignore
        this.img= data.sprites.other["official-artwork"].front_shiny

    }

    get PokemonTemplate(){
        return `
        <div class="col-8 m-auto p-4 rounded elevation-5 border border-dark bg-danger text-light">
            <h1>${this.name}</h1>
            <div class="poke-img">
            <img src="${this.img}" alt="">
            </div>
            <div class="d-flex justify-content-around mt-4">
                <h2>Height: ?</h2>
                <h2>Weight: ?</h2>
            </div>
        </div>
        `
    }

    static PokedexListTemplate(pokemon){
        return `
        <div class="col-12 text-center">
            <button onclick="app.pokedexApiController.getPokemonByName('${pokemon.name}')" class="btn btn-outline-danger w-100 fw-bold mb-1">${pokemon.name}</button>
        </div>
        `
    }
}

export class CaughtPokemon {
    constructor(data) {
        this.name = data.species.name,
        this.url = data.species.url
        this.img = data.sprites.other["original-artwork"].front_shiny
        this.height = data.height
        this.weight = data.weight

    }
}