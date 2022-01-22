function Search() {
    return (
        <>
            <form action="">
                <div className="search">
                    <div className="search__icon">
                        <i className="fas fa-search"></i>
                    </div>
                    <div className="search__row">
                        <input type="text" className="search__input" placeholder="Поиск по товарам" />
                    </div>
                </div>
            </form>
        </>
    )
}

export default Search