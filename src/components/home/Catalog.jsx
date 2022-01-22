import { Link } from "react-router-dom"

function Catalog() {
    return (
        <>
            <h4 className="catalog-title">Катарог товаров</h4>
            <ul className="catalog">
                <li className="catalog__item">
                    <Link to="*" className="catalog__link"><i className="fas fa-book catalog__icon"></i> Уникальные и коллекционные книги</Link>
                </li>
                <li className="catalog__item">
                    <Link to="*" className="catalog__link"><i className="fas fa-book catalog__icon"></i> Украинская книга</Link>
                </li>
                <li className="catalog__item">
                    <Link to="*" className="catalog__link"><i className="fas fa-book catalog__icon"></i> Собрания сочинений и библиотеки</Link>
                </li>
                <li className="catalog__item">
                    <Link to="*" className="catalog__link"><i className="fas fa-book catalog__icon"></i> Искусство и культура</Link>
                </li>
                <li className="catalog__item">
                    <Link to="*" className="catalog__link"><i className="fas fa-book catalog__icon"></i> История, филосовия, психология</Link>
                </li>
                <li className="catalog__item">
                    <Link to="*" className="catalog__link"><i className="fas fa-book catalog__icon"></i> Энциклопедии и справочники</Link>
                </li>
                <li className="catalog__item">
                    <Link to="*" className="catalog__link"><i className="fas fa-book catalog__icon"></i> Религия</Link>
                </li>
                <li className="catalog__item">
                    <Link to="*" className="catalog__link"><i className="fas fa-book catalog__icon"></i> Фотоальбомы</Link>
                </li>
                <li className="catalog__item">
                    <Link to="*" className="catalog__link"><i className="fas fa-book catalog__icon"></i> Кулинария, спиртные напитки</Link>
                </li>
                <li className="catalog__item">
                    <Link to="*" className="catalog__link"><i className="fas fa-book catalog__icon"></i> Кожаные ежедневники и др.</Link>
                </li>
                <li className="catalog__item">
                    <Link to="*" className="catalog__link"><i className="fas fa-book catalog__icon"></i> Подержанные книги</Link>
                </li>
                <li className="catalog__item">
                    <Link to="*" className="catalog__link"><i className="fas fa-book catalog__icon"></i> Мебель для кабинета и библиотеки</Link>
                </li>
            </ul>
        </>
    )
}

export default Catalog