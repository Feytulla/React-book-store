import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { apiSearch } from '../store/search';
import { addValue } from '../store/search';




function Search() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const value = useSelector((state) => state.search.value);

    useEffect(() => {
        dispatch(apiSearch(value))
    }, [value])

    function submitHandler(e) {
        e.preventDefault()
        navigate('/search')
        dispatch(apiSearch(value))
    }

    return (
        <>
            <form action="" onSubmit={submitHandler}>
                <div className="search">
                    <div className="search__icon">
                        <i className="fas fa-search"></i>
                    </div>
                    <div className="search__row">
                        <input type="text" className="search__input" placeholder="Поиск по товарам" value={value} onChange={event => dispatch(addValue(event.target.value))} />
                    </div>
                </div>
            </form>
        </>
    )
}

export default Search