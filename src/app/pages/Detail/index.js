import React, { useContext, useEffect } from 'react';
import Card from '../../components/PokemonCard';
import PDetail from '../../components/PokemonDetail';
import { PokemonContext } from '../../contexts/index';
import { useParams} from "react-router";

const Detail = () => {
    const { state, getDetail } = useContext(PokemonContext);
    const { name } = useParams();

    useEffect(() => {
        getDetail(name)
    }, []);
    
    return(
        <section className="section">
            <div className="columns">
                <>
                    {
                        typeof state.pokemonDetail !== 'undefined' && state.pokemonDetail.loading == false
                        ? <Card id={state.pokemonDetail.pokemon.id} pokemon={state.pokemonDetail.pokemon} />
                        : null
                    }
                </>
                <>
                    {
                        typeof state.pokemonDetail !== 'undefined' && state.pokemonDetail.loading == false
                        ? <PDetail pokemon={state.pokemonDetail.pokemon} />
                        : null
                    }
                </>
            </div>
        </section>
    );
};

export default Detail;