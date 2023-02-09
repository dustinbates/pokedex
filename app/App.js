import { PokedexApiController } from "./Controllers/PokedexApiController.js";
import { PokemonController } from "./Controllers/PokemonController.js";
import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  // valuesController = new ValuesController();
  pokedexApiController = new PokedexApiController()
  pokemonController = new PokemonController()
}

window["app"] = new App();
