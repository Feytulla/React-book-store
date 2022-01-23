function BookQualities() {
    return (
        <>
            <div className="book-qualities row mt-5">
                <div className="col-4">
                    <img src={require('../images/icon/icon-heart.png')} />
                    <p className="book-qualities__text">Ручная работа</p>
                </div>
                <div className="col-4">
                    <img src={require('../images/icon/icon-quality.png')} />
                    <p className="book-qualities__text">Лучшие специалисты</p>
                </div>
                <div className="col-4">
                    <img src={require('../images/icon/icon-membrane.png')} />
                    <p className="book-qualities__text">Применение качественных материалов</p>
                </div>
            </div>
        </>
    )
}

export default BookQualities