import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { apiSearch } from '../../store/search';
import { addValue } from '../../store/search';
import { addPageNumber } from '../../store/search';

function SearchInput() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const params = useParams();
    const result = params.searchResult;
    const pageNumber = params.pageNumber;

    useEffect(() => {
        dispatch(addPageNumber(1))
        dispatch(apiSearch({ result, pageNumber }))
    }, [result, pageNumber])

    function submitHandler(e) {
        e.preventDefault()
    }

    function push(event) {
        const value = event.target.value;
        dispatch(addValue(value))
        navigate(`/search/${value}/${pageNumber}`)
    }
    return (
        <>
            <form action="" onSubmit={submitHandler}>
                <div className="search">
                    <div className="search__icon">
                        <i className="fas fa-search"></i>
                    </div>
                    <div className="search__row">
                        <input type="text" className="search__input" placeholder="Поиск по товарам" value={result} onChange={event => push(event)} />
                    </div>
                </div>
            </form>
        </>
    )
}

export default SearchInput