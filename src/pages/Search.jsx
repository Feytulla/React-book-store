import { useState } from "react";
import { useParams } from "react-router";
import Breadcrumb from '../components/Breadcrumb';
import SearchList from '../components/search/SearchList';
import SearchComp from '../components/SearchComp';
import Pagination from '../components/search/Pagination';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { addValue } from "../store/search";
import SearchInput from "../components/search/SearchInput";
import Sorting from "../components/search/Sorting";

function Search() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const pageNumber = useSelector((state) => state.search.pageNumber);

    return (
        <>
            <div className="containers">
                <Breadcrumb currentPage={'Поиск'} />
                <h1 className='title'>Поиск</h1>
                <SearchInput />
                <Sorting />
                <SearchList />
                <Pagination />
            </div>
        </>
    )
}


export default Search