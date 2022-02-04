import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { apiSearch } from '../../store/search';
import { addValue } from '../../store/search';
import { addPageNumber } from '../../store/search';




function SearchInput() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const result = useSelector((state) => state.search.value);
    const pageNumber = useSelector((state) => state.search.pageNumber);

    useEffect(() => {
        dispatch(addPageNumber(1))
        dispatch(apiSearch({result,pageNumber}))
    }, [result])

    function submitHandler(e) {
        e.preventDefault()
        navigate(`/search/${result}/${pageNumber}`)
    }
    
    return (
        <>
            <form action="" onSubmit={submitHandler}>
                <div className="search">
                    <div className="search__icon">
                        <i className="fas fa-search"></i>
                    </div>
                    <div className="search__row">
                        <input type="text" className="search__input" placeholder="Поиск по товарам" value={result} onChange={event => dispatch(addValue(event.target.value))} />
                    </div>
                </div>
            </form>
        </>
    )
}

export default SearchInput