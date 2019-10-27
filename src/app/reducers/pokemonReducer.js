import {
    FETCH_POKEMON_REQUEST,
    FETCH_POKEMON_SUCCESS,
    FETCH_POKEMON_FAILURE,
    FETCH_SPECIES_REQUEST,
    FETCH_SPECIES_SUCCESS,
    FETCH_SPECIES_FAILURE,
} from '../actions'

const INITIAL_STATE = {
    pokemonData: {
        pokemon: null,
        error: null,
        loading: false
    }
};

export default function usersReducer(state = INITIAL_STATE, action) {
    const { type, payload } = action;
        
    switch (type) {
        case FETCH_POKEMON_REQUEST:
            return {
                ...state,
                pokemonData: {
                    pokemon: null,
                    error: null,
                    loading: true
                }
            };
        case FETCH_POKEMON_SUCCESS:
            return {
                ...state,
                pokemonData: {
                    pokemon: action.payload,
                    error: null,
                    loading: false
                }
            };
        case FETCH_POKEMON_FAILURE:
            return {
                ...state,
                pokemonData: {
                    pokemon: null,
                    error: action.payload,
                    loading: false
                }
            };
        case FETCH_SPECIES_REQUEST:
            return {
                ...state,
                pokemonDetail: {
                    pokemon: null,
                    error: null,
                    loading: true
                }
            };
        case FETCH_SPECIES_SUCCESS:
            return {
                ...state,
                pokemonDetail: {
                    pokemon: action.payload,
                    error: null,
                    loading: false
                }
            };
        case FETCH_SPECIES_FAILURE:
            return {
                ...state,
                pokemonDetail: {
                    pokemon: null,
                    error: action.payload,
                    loading: false
                }
            };

        default:
            return state;
    }
}