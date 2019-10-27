import React from 'react';

const PokemonDetail = ({pokemon}) => {

    return(
        <div className="column is-one-thirds">
            <div className="card">
                <div className="card-header">
                    <p className="card-header-title">
                        Details
                    </p>
                </div>
                <div className="card-content">
                    <div className="columns">
                        <div className="column is-half">
                            <p className="is-6 has-text-grey">
                                Height
                            </p>
                            <p>
                                {pokemon.height}
                            </p>
                            <p className="is-6 has-text-grey">
                                Weight
                            </p>
                            <p>
                                {pokemon.weight}
                            </p>
                        </div>
                        <div className="column is-half">
                            <p className="is-6 has-text-grey">
                                Stats
                            </p>
                            <>
                            {
                                pokemon.stats.map((stats, index) => { 
                                    return <p key={index} >{ stats.stat.name } : { stats.base_stat }</p>;
                                })
                            }
                            </>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PokemonDetail;