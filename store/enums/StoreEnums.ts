enum Actions {
    // action types
    GET_ALL_POKEMON = "allPokemon",
    GET_DETAIL_POKEMON = "detailPokemon",
}
  
enum Mutations {
    // mutation types
    SET_ERROR = "setError",
    SET_VALUE_POKEMONS = "setPokemons",
    SET_VALUE_POKEMON = "setPokemonDetail"
}
  
export { Actions, Mutations };