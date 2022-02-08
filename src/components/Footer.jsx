import { Link } from 'react-router-dom';

function Footer() {
    return (
        <>
            <footer className="footer mt-5">
                <div className="containers pt-5 pb-3">
                    <div className="row">
                        <div className="col-12 col-md-3 text-center text-md-left footer__col">
                            <Link to='/'><img src={require('../images/footerLogo.png')} alt="" /></Link>
                        </div>
                        <div className="col-12 col-md-3 mt-4 mt-md-0 footer__col">
                            <h3 className="footer__title">Наш магазин</h3>
                            <ul className='footer__items mt-4'>
                                <li className='footer__item'><Link to='about'>О нас</Link></li>
                                <li className='footer__item'><Link to='PaymentAndDelivery'>Оплата и доставка</Link></li>
                                <li className='footer__item'><Link to='*'>Политика безопасности</Link></li>
                                <li className='footer__item'><Link to='*'>Возврат товара</Link></li>
                                <li className='footer__item'><Link to='*'>Карта сайта</Link></li>
                            </ul>
                        </div>
                        <div className="col-12 col-md-3 mt-4 mt-md-0 footer__col">
                            <h3 className="footer__title">Контакты</h3>
                            <ul className='footer__items mt-4'>
                                <li className='footer__item d-flex align-items-center'><i className="fas fa-map-marker-alt"></i><div className='footer__text'>Украина, Одесса Космонавта Комарова, 10</div></li>
                                <li className='footer__item d-flex align-items-center'>
                                    <i className="fas fa-phone-alt"></i>
                                    <div className='footer__text'>
                                        <div>+38 066 950-13-30</div>
                                        <div>+38 098 950-13-30</div>
                                    </div>
                                </li>
                                <li className='footer__item d-flex align-items-center'><i className="fas fa-envelope"></i><span className='footer__text'>kniginya.com@gmail.com</span></li>
                            </ul>
                        </div>
                        <div className="col-12 col-md-3 footer__col">
                            <h3 className="footer__title">Социальные сети</h3>
                            <div className="mt-4">
                                <a href="" className='footer__social-link'><i className="fab fa-facebook-f"></i></a>
                                <a href="" className='footer__social-link'><i className="fab fa-twitter"></i></a>
                                <a href="" className='footer__social-link'><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className='text-center'>
                        <p className='footer__copyright'>Уникальные и коллекционные книги | Украинская книга | Художественная литература, поэзия | Собрания сочинений и библиотеки | Искусство и культура | История и философия, психология Энциклопедии и справочники | Религия | Фотоальбомы | Кулинария, спиртные напитки | Ежедневники и др. | Подержанные книги | Мебель для кабинета и библиотеки, предметы интерьера</p>
                        <p className='footer__copyright'> Сайт сделан в оброзовательских целях и не имеет общего с оригинальным сайтом </p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer