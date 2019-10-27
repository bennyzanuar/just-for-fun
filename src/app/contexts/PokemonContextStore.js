import React, { useReducer } from 'react';
import Axios from 'axios';

import {
    FETCH_POKEMON_REQUEST,
    FETCH_POKEMON_SUCCESS,
    FETCH_POKEMON_FAILURE,
    FETCH_SPECIES_REQUEST,
    FETCH_SPECIES_SUCCESS,
    FETCH_SPECIES_FAILURE
} from '../actions';

import pokemonReducer from '../reducers/pokemonReducer';
import { PokemonContext } from './index';

const PokemonContextStore = (props) => {
    const { children } = props;
    const [state, dispatch] = useReducer(pokemonReducer, []);
    
    const getAll = async ({ page }) => {
        try {
            let defaultLimit = 20 
            let offset = (page - 1) * defaultLimit
            
            dispatch({
                type: FETCH_POKEMON_REQUEST,
            });
            
            const data = await Axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${defaultLimit}`);
                        
            dispatch({
                type: FETCH_POKEMON_SUCCESS,
                payload: data.data.results
            })
        } catch (error) {
            dispatch({
                type: FETCH_POKEMON_FAILURE,
                payload: error
            })
        }
    };
    
    const getDetail = async (name) => {
        try {
            dispatch({
                type: FETCH_SPECIES_REQUEST,
            });
            
            const data = await Axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);

            dispatch({
                type: FETCH_SPECIES_SUCCESS,
                payload: data.data
            })
        } catch (error) {
            dispatch({
                type: FETCH_SPECIES_FAILURE,
                payload: error
            })
        }
    };
    
    return (
        <PokemonContext.Provider
            value={{
                state,
                getAll,
                getDetail,
            }}
        >
            {props.children}
        </PokemonContext.Provider>
    );
};

export default PokemonContextStore;