import BookQualities from '../BookQualities'

function HomeSlider() {
    return (
        <>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" className="carousel__ind active" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" className="carousel__ind" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" className="carousel__ind" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="d-flex slider__container">
                            <div className="col-6 col-sm-6">
                                <div className="slider__head">
                                    <h2 className="title">Индивидуальный переплёт</h2>
                                    <p className="slider__subtitle">книг и библиотек</p>
                                </div>
                                <BookQualities />
                            </div>
                            <div className="col-6 col-sm-6">
                                <img src={require('../../images/slider/slider_1.jpg')} />
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="d-flex slider__container">
                            <div className="col-6 col-sm-6">
                                <div className="slider__head">
                                    <h2 className="slider__title title">Подарок для людей у которых всё есть</h2>
                                </div>
                                <BookQualities />
                            </div>
                            <div className="col-6 col-sm-6">
                                <img src={require('../../images/slider/slider_2.jpg')} />
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="d-flex slider__container">
                            <div className="col-6 col-sm-6">
                                <div className="slider__head">
                                    <h2 className="slider__title title">Книги – это инвестирование в себя</h2>
                                    <p className="slider__subtitle">коллекционные книги – это капиталовложение</p>
                                </div>
                                <BookQualities />
                            </div>
                            <div className="col-6 col-sm-6">
                                <img src={require('../../images/slider/slider_3.jpg')} />
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prevv" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <i className="fas fa-chevron-left"></i>
                </button>
                <button className="carousel-control-nextt" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <i className="fas fa-chevron-right"></i>
                </button>
            </div>
        </>
    )
}

export default HomeSlider