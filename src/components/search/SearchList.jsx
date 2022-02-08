import { useSelector } from "react-redux";

import Loading from '../Loading';
import SearchItem from "./SearchItem";

function SearchList() {
    const { status, error } = useSelector((state) => state.search);
    const books = useSelector((state) => state.search.bookItems[0]);

    return (
        <>
            <div className="row">
                {status === 'loading' && <Loading />}
                {error && <h2>An error occured: {error}</h2>}
                {
                    books && books.map((book, index) => {
                        return (
                            <SearchItem book={book} key={index} />
                        )
                    })
                }
            </div>
        </>
    )
}

export default SearchList