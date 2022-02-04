function Sorting() {
    return (
        <>
            <div className="sorting d-flex">
                <span>Вид:</span>
                <div className="sorting-col">
                    <div className="d-flex">
                        <div className="sorting__columns">
                            <div className="columns-row">
                                <span className="columns-block col-4"></span>
                                <span className="columns-block col-4"></span>
                                <span className="columns-block col-4"></span>
                                <span className="columns-block col-4"></span>
                                <span className="columns-block col-4"></span>
                                <span className="columns-block col-4"></span>
                                <span className="columns-block col-4"></span>
                                <span className="columns-block col-4"></span>
                                <span className="columns-block col-4"></span>
                            </div>
                        </div>
                        <div className="sorting__row">
                            <div className="columns-row">
                                <span className="row-block"></span>
                                <span className="row-block"></span>
                                <span className="row-block"></span>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center align-items-center">
                        <span>Сортировка: </span>
                        <select class="form-select" aria-label="Default select example">
                            <option selected value="default">По умолчанию</option>
                            <option value="high">Сначала дешёвые</option>
                            <option value="low">Сначала дорогие</option>
                        </select>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sorting