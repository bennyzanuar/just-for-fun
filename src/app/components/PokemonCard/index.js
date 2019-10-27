import React from 'react';
import {Link} from 'react-router-dom';
import Image from '../ImageComp';

const PokemonCard = ({id, pokemon}) => {

    return(
        <div key={id} className="column is-one-fifth">
            <div className="box">
                <div className="card-image">
                    <Link to={`/pokemon/${pokemon.name}/`}>
                       <Image data={pokemon} id={id} />
                   </Link>
                </div>
                <div className="card-content">
                    <div className="media">
                        <div className="media-content">
                            <p className="subtitle is-6 has-text-grey">
                                #{id}
                            </p>
                            <p className="title is-5 is-capitalized">
                                <Link to={`/pokemon/${pokemon.name}/`} className="has-text-black">
                                    {pokemon.name}
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PokemonCard;