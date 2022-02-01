import Breadcrumb from '../components/Breadcrumb';
import SearchList from '../components/search/SearchList';
import SearchComp from '../components/SearchComp';

function Search() {

    return (
        <>
            <div className="containers">
                <Breadcrumb currentPage={'Поиск'} />
                <h1 className='title'>Поиск</h1>
                <SearchComp />
                <SearchList />
            </div>
        </>
    )
}


export default Search