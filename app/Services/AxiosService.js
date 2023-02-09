// @ts-ignore
export const pokedexApi = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/pokemon',
    timeout: 2500
})

// @ts-ignore
export const sandboxApi = axios.create({
    baseURL: 'https://bcw-sandbox.herokuapp.com/api/',
    timeout: 2500
})