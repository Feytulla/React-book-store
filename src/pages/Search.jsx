import { useState } from "react";
import { useParams } from "react-router";
import Breadcrumb from '../components/Breadcrumb';
import SearchList from '../components/search/SearchList';
import SearchComp from '../components/SearchComp';
import Pagination from '../components/search/Pagination';
import { Provider, useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { addValue } from "../store/search";
import SearchInput from "../components/search/SearchInput";
import Sorting from "../components/search/Sorting";
import Context from '../context';

function Search() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const pageNumber = useSelector((state) => state.search.pageNumber);
    const [mazay, setMazay] = useState(true);
    const [widthBlock, setWidthBlock] = useState(false);
    const [mozActive,setMozActive] = useState(true);
    const [widActive,setWidActive] = useState();


    function toggleMazay() {
        setMazay(true)
        setWidthBlock(false)
        setMozActive('active-row');
        setWidActive('')
    }

    function toggleWidth() {
        setMazay(false)
        setWidthBlock(true)
        setMozActive('');
        setWidActive('active-row')
    }

    return (
        <>
            <Context.Provider value={{mazay,widthBlock, toggleMazay, toggleWidth,mozActive,widActive }}>
                <div className="containers">
                    <Breadcrumb currentPage={'Поиск'} />
                    <h1 className='title'>Поиск</h1>
                    <SearchInput />
                    <Sorting />
                    <SearchList />
                    <Pagination />
                </div>
            </Context.Provider>
        </>
    )
}


export default Search