import React, { useContext, useEffect } from 'react';
import Card from '../PokemonCard';
import Pagination from '../Pagination';
import { PokemonContext } from '../../contexts/index';
import { getPokemonId } from '../../helpers/index';
import { useLocation} from "react-router";
import qs from 'qs';

const PokemonList = () => {
    const { state, getAll } = useContext(PokemonContext);
    let location = useLocation();
    let params = qs.parse(location.search, { ignoreQueryPrefix: true })
    
    useEffect(() => {
        getAll(params)
    }, []);
        
    return(
        <>
            <section className="section">
                <div className="container">
                    <div className="columns is-multiline is-centered">
                    {
                        typeof state.pokemonData !== 'undefined' && state.pokemonData.loading == false
                        ? state.pokemonData.pokemon.map(pokemon => { 
                                return <Card key={getPokemonId(pokemon.url)} id={getPokemonId(pokemon.url)} pokemon={pokemon} />;
                            }
                        ) : null
                    }
                    </div>
                    <div className="columns is-multiline is-centered">
                    {
                        typeof state.pokemonData !== 'undefined' && state.pokemonData.loading == false
                        ? <Pagination page={params.page} />
                        : null
                    }
                    </div>
                </div>
            </section>
            
        </>
    );
};

export default PokemonList;