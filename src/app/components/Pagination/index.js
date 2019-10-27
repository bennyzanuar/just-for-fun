import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { PokemonContext } from '../../contexts/index';
    
const Pagination = ({ page }) => {
    const { getAll } = useContext(PokemonContext);
    const next = typeof page == 'undefined' ? 2 : parseInt(page) + 1
    const prev = typeof page == 'undefined' ? 0 : parseInt(page) - 1
    
    const paginate = (p) => {
        getAll({ page : p })
    }
    
    return(
        <nav className="pagination" role="navigation" aria-label="pagination">
            <Link onClick={(e) => paginate(prev) } to={`/?page=${prev}`} className="pagination-previous" disabled={ parseInt(page) <=1 ? "disabled" : "" } >Previous</Link>
            <Link onClick={(e) => paginate(next) } to={`/?page=${next}`} className="pagination-next">Next page</Link>
        </nav>
    );
};

export default Pagination;