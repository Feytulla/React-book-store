import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router";
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { addPageNumber } from '../../store/search';
import { apiSearch } from '../../store/search';

function Pagination() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const param = useParams();
    const data = useSelector((state) => state.search.data[0]);
    const [totalBooks, setTotalBooks] = useState(0);
    const pageNumbers = [];
    const [prev, setPrev] = useState(1);
    const [next, setNext] = useState(+param.pageNumber + 2 || +pageNumbers.length);
    const [toggleNext, setToggleNext] = useState(true);
    const [toggleLastNum, setToggleLastNum] = useState(true);
    const [togglePrev, setTogglePrev] = useState(true);
    const [toggleFirstNum, setToggleFirstNum] = useState(true);


    useEffect(() => {
        if (data) {
            setTotalBooks(
                +data.total / +data.books.length
            )
        }
    }, [data])

    for (let i = 1; i <= Math.ceil(totalBooks / 10); i++) {
        pageNumbers.push(i);
    }

    useEffect(() => {
        setPrev(param.pageNumber - 1 || 1)
        setNext(+param.pageNumber + 1 || +pageNumbers.length)
    }, [param, pageNumbers.length])

    useEffect(() => {
        if (+param.pageNumber == +pageNumbers.length) {
            setToggleNext(false)
        } else if (+param.pageNumber < pageNumbers.length) {
            setToggleNext(true)
        }

        if (+param.pageNumber == (+pageNumbers.length - 2)) {
            setToggleLastNum(false)
        } else if (+param.pageNumber < (+pageNumbers.length - 2)) {
            setToggleLastNum(true)
        }

    }, [pageNumbers, param, data])

    useEffect(() => {
        if (+param.pageNumber === 1) {
            setTogglePrev(false)
        } else if (+param.pageNumber > 1) {
            setTogglePrev(true)
        }

        if (+param.pageNumber < 3) {
            setToggleFirstNum(false)
        } else if (+param.pageNumber > 2) {
            setToggleFirstNum(true)
        }

    }, [pageNumbers, param, data])

    function pag(number) {
        const result = param.searchResult;
        const pageNumber = number;
        dispatch(addPageNumber(number));
        dispatch(apiSearch({ result, pageNumber }))
    }

    function nextBtn() {
        let number = +param.pageNumber;
        const par = +param.pageNumber
        if (+param.pageNumber < pageNumbers.length) {
            number = number + 1
            navigate(`/search/${param.searchResult}/${number}`)

        } else {
            setToggleNext(false)
        }
    }

    function lastPage() {
        navigate(`/search/${param.searchResult}/${pageNumbers.length}`)
    }

    function prevBtn() {
        let number = +param.pageNumber;
        const par = +param.pageNumber
        if (+param.pageNumber > 1) {
            number = number - 1
            navigate(`/search/${param.searchResult}/${number}`)

        } else {
            setToggleNext(false)
        }
    }

    function firstPage() {
        navigate(`/search/${param.searchResult}/${1}`)
    }

    return (
        <>
            <nav>
                <ul className='pagination'>
                    {togglePrev &&
                        <li className='page-item'>
                            <span onClick={() => prevBtn()} className='page-link'>Назад</span>
                        </li>
                    }
                    {toggleFirstNum &&
                        <>
                            <li className='page-item d-flex'>
                                <span onClick={() => firstPage()} className='page-link'>{1}</span>
                                <span className='page-link'>...</span>
                            </li>
                        </>
                    }
                    {
                        pageNumbers.map(number => {
                            if (number >= prev && number <= next) {
                                return (
                                    <>
                                        <li key={number} className='page-item'>
                                            <NavLink onClick={() => pag(number)} to={`/search/${param.searchResult}/${number}`} className='page-link'>
                                                {number}
                                            </NavLink>
                                        </li>
                                    </>
                                )
                            }
                        })
                    }
                    {toggleLastNum &&
                        <>
                            <li className='page-item d-flex'>
                                <span className='page-link'>...</span>
                                <span onClick={() => lastPage()} className='page-link'>{pageNumbers.length}</span>
                            </li>
                        </>
                    }
                    {toggleNext &&
                        <li className='page-item'>
                            <span onClick={() => nextBtn()} className='page-link'>Далее</span>
                        </li>
                    }
                </ul>
            </nav>
        </>
    )
}


export default Pagination