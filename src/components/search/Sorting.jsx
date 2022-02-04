import { useContext } from "react";
import Context from "../../context";


function Sorting() {
    const { toggleMazay, toggleWidth,mozActive,widActive } = useContext(Context)
    

    
    return (
        <>
            <div className="sorting d-flex">
                <span>Вид:</span>
                <div className="sorting-col">
                    <div className="d-flex">
                        <div className="sorting__columns" onClick={() => toggleMazay()}>
                            <div className="columns-row">
                                <div className={`columns-row__mazay ${mozActive}`}></div>
                            </div>
                        </div>
                        <div className="sorting__row" onClick={() => toggleWidth()}>
                            <div className="columns-row">
                                <div className={`columns-row__width ${widActive}`}></div>
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