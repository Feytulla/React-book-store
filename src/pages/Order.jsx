import Breadcrumb from '../components/Breadcrumb'

function Order() {
    return (
        <>
            <div className="containers">
                <Breadcrumb currentPage={'Оформление заказа'} />
                <h1 className="title mb-4">Оформление заказа</h1>
                <div className="content-container">
                    <h5 className='h5'>Авторизация (если вы уже зарегистрированы на сайте)</h5>
                    <form className='sign-form d-flex'>
                        <div class="mb-3 sign-form__email">
                            <label for="exampleInputEmail1" class="form-label">Ваш email:</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Введите Ваш email" />
                        </div>
                        <div class="mb-3 sign-form__password">
                            <label for="exampleInputPassword1" class="form-label">Ваше пароль:</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Введите Ваш пароль" />
                        </div>
                        <div class="mb-3 sign-form__btn">
                            <button type="submit" class="btn submit">Войти</button>
                        </div>
                    </form>
                </div>
                <h4 className="h4 order__h4">ИЛИ</h4>
                <form class="needs-validation" novalidate>
                    <div className="content-container">
                        <h5 className="h5">Введите ваши данные (для регистрации на сайте отметьте чекбокс внизу)</h5>
                        <div className="row g-3 reg-form">
                            <div class="col-md-4">
                                <div className="reg-form__name">
                                    <label for="validationDefault01" class="form-label">Ваше имя:</label>
                                    <input type="text" class="form-control" id="validationDefault01" placeholder="Введите Ваше имя" required />
                                </div>
                            </div>
                            <div class="col-md-5">
                                <div className="reg-form__email">
                                    <label for="validationDefault02" class="form-label">Ваш email:</label>
                                    <input type="email" class="form-control " id="validationDefault02" placeholder="Введите Ваш email" required />
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div className="reg-form__password">
                                    <label for="validationDefault02" class="form-label">Ваше телефон:</label>
                                    <input type="number" class="form-control" id="validationDefault02" placeholder="Введите Ваш номер телефона" required />
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="true" id="invalidCheck2" required />
                                    <label class="form-check-label" for="invalidCheck2">
                                        Создать аккаунт для покупок в дальнейшем.
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="content-container mt-5">
                        <h5 className="h5">Выбрать способ доставки</h5>
                        <p>Пожалуйста, выберите способ доставки, который вам подходит.</p>
                        <strong>Доставка Новой Почтой</strong>
                        <div class="col-12 mt-3">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="true" id="invalidCheck2" required />
                                <label class="form-check-label" for="invalidCheck2">
                                    Создать аккаунт для покупок в дальнейшем.
                                </label>
                                <div className="marker">Цена по запросу!</div>
                            </div>
                        </div>
                    </div>
                    <div className="content-container mt-5">
                        <h5 className="h5">Оплата</h5>
                        <p>Пожалуйста, выберите удобный для вас способ оплаты. Карта для оплаты 5168 7422 1128 7903 Широбоков Александр</p>
                        <div className="row">
                            <div class="col-md-4">
                                <select class="form-select" required>
                                    <option selected disabled value="">Выберите...</option>
                                    <option>Оплата при доставке</option>
                                </select>
                                <div class="invalid-feedback">
                                    Пожалуйста, выберите корректный город.
                                </div>
                            </div>
                            <div className="col-md-12 w100"></div>
                            <div class="col-md-6 mt-3 mb-5">
                                <label for="validationCustom03" class="form-label">Добавьте комментарий к заказу (укажите адресную доставку):</label>
                                <textarea class="form-control reg-form__address" id="validationCustom03" required />
                                <div class="invalid-feedback">
                                    Укажите действующий город.
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Order