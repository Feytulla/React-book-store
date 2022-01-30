import { Link } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";

function DoneOrder() {
    return (
        <>
            <div className="containers">
                <Breadcrumb currentPage={'Оформление заказа'} />
                <div className="content-container text-center">
                    <i className="fab fa-shopify done-order__icon"></i>
                    <h2 className="title mb-3 mt-3">Готово!</h2>
                    <p>Спасибо за заказ, мы свяжемся с Вами</p>
                    <div className="done-order__link mb-4"><Link to='/' className="">Вернуться</Link></div>
                </div>
            </div>
        </>
    )
}

export default DoneOrder