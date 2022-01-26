import { Link } from "react-router-dom";

function DoneOrder() {
    return (
        <>
            <div className="content-container text-center">
                <i className="fab fa-shopify done-order__icon"></i>
                <h2 className="title mb-3 mt-3">Готово!</h2>
                <p>Спасибо за заказ, мы свяжемся с Вами</p>
                <div className="done-order__link mb-4"><Link to='/' className="">Вернуться</Link></div>
            </div>
        </>
    )
}

export default DoneOrder