// import { useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { apiSearch } from '../store/search';
// import { addValue } from '../store/search';
// import { addPageNumber } from '../store/search';




// function Search() {
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const value = useSelector((state) => state.search.value);
//     const pageNumber = useSelector((state) => state.search.pageNumber);

//     useEffect(() => {
//         dispatch(addPageNumber(1))
//         dispatch(apiSearch({value,pageNumber}))
//         // navigate(`/search/${value}/${pageNumber}`)
//     }, [value])

//     function submitHandler(e) {
//         e.preventDefault()
//         navigate(`/search/${value}/${pageNumber}`)
//         dispatch(apiSearch(value))
//     }
    
//     const push = (event) => {
//         const value = event.target.value;
//         dispatch(addValue(value))
//         // navigate(`/search/${value}/${pageNumber}`)
//     }
//     return (
//         <>
//             <form action="" onSubmit={submitHandler}>
//                 <div className="search">
//                     <div className="search__icon">
//                         <i className="fas fa-search"></i>
//                     </div>
//                     <div className="search__row">
//                         <input type="text" className="search__input" placeholder="Поиск по товарам" value={value} onChange={event => push(event)} />
//                     </div>
//                 </div>
//             </form>
//         </>
//     )
// }

// export default Search