import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <>
            <main>
                <div className="containers">
                    <div className="row">
                        <div className="col-6 col-sm-3">
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
                        </div>
                        <div className="col-6 col-sm-9">
                            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                                <div class="carousel-indicators">
                                    <button type="button" className="carousel__ind active" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" className="carousel__ind" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                    <button type="button" className="carousel__ind" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                </div>
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <div className="d-flex slider__container">
                                            <div className="col-6 col-sm-6">
                                                <div className="slider__head">
                                                    <h2 className="slider__title title">Индивидуальный переплёт</h2>
                                                    <p className="slider__subtitle">книг и библиотек</p>
                                                </div>
                                                <div className="slider__body row">
                                                    <div className="slider__item col-3">
                                                        <img src={require('../images/icon/icon-heart.png')} alt="" />
                                                        <p className="slider__text">Ручная работа</p>
                                                    </div>
                                                    <div className="slider__item col-3">
                                                        <img src={require('../images/icon/icon-quality.png')} alt="" />
                                                        <p className="slider__text">Лучшие специалисты</p>
                                                    </div>
                                                    <div className="slider__item col-3">
                                                        <img src={require('../images/icon/icon-membrane.png')} alt="" />
                                                        <p className="slider__text">Применение качественных материалов</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-6 col-sm-6">
                                                <img src={require('../images/slider/slider_1.jpg')} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="carousel-item">
                                        <div className="d-flex slider__container">
                                            <div className="col-6 col-sm-6">
                                                <div className="slider__head">
                                                    <h2 className="slider__title title">Индивидуальный переплёт</h2>
                                                    <p className="slider__subtitle">книг и библиотек</p>
                                                </div>
                                                <div className="slider__body">
                                                    <div className="slider__item col-3">
                                                        <img src={require('../images/icon/icon-heart.png')} alt="" />
                                                        <p className="slider__text">Ручная работа</p>
                                                    </div>
                                                    <div className="slider__item col-3">
                                                        <img src={require('../images/icon/icon-quality.png')} alt="" />
                                                        <p className="slider__text">Лучшие специалисты</p>
                                                    </div>
                                                    <div className="slider__item col-3">
                                                        <img src={require('../images/icon/icon-membrane.png')} alt="" />
                                                        <p className="slider__text">Применение качественных материалов</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-6 col-sm-6">
                                                <img src={require('../images/slider/slider_2.jpg')} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="carousel-item">
                                        <div className="d-flex slider__container">
                                            <div className="col-6 col-sm-6">
                                                <div className="slider__head">
                                                    <h2 className="slider__title title">Индивидуальный переплёт</h2>
                                                    <p className="slider__subtitle">книг и библиотек</p>
                                                </div>
                                                <div className="slider__body">
                                                    <div className="slider__item col-3">
                                                        <img src={require('../images/icon/icon-heart.png')} alt="" />
                                                        <p className="slider__text">Ручная работа</p>
                                                    </div>
                                                    <div className="slider__item col-3">
                                                        <img src={require('../images/icon/icon-quality.png')} alt="" />
                                                        <p className="slider__text">Лучшие специалисты</p>
                                                    </div>
                                                    <div className="slider__item col-3">
                                                        <img src={require('../images/icon/icon-membrane.png')} alt="" />
                                                        <p className="slider__text">Применение качественных материалов</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-6 col-sm-6">
                                                <img src={require('../images/slider/slider_3.jpg')} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button class="carousel-control-prevv" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                    <i class="fas fa-chevron-left"></i>
                                </button>
                                <button class="carousel-control-nextt" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                    <i class="fas fa-chevron-right"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Home