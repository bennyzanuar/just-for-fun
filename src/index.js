import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/style.sass';
import App from './app';
import PokemonContextStore from './app/contexts/PokemonContextStore';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(
    <PokemonContextStore>
        <App />
    </PokemonContextStore>,
    document.getElementById('root'),
);

serviceWorker.unregister();
