import Breadcrumb from '../components/Breadcrumb'

function Order() {
    return (
        <>
            <div className="containers">
                <Breadcrumb currentPage={'Оформление заказа'} />
                <h1 className="title mb-4">Оформление заказа</h1>
                <div className="content-container">
                    <h5 className='h5'>Авторизация (если вы уже зарегистрированы на сайте)</h5>
                    <form className='reg-form d-flex'>
                        <div class="mb-3 reg-form__email">
                            <label for="exampleInputEmail1" class="form-label">Ваш email:</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Введите Ваш email" />
                        </div>
                        <div class="mb-3 reg-form__password">
                            <label for="exampleInputPassword1" class="form-label">Ваше пароль:</label>
                            <input type="password" class="form-control" placeholder="Введите Ваше пароль" />
                        </div>
                        <div class="mb-3 reg-form__btn">
                            <button type="submit" class="btn submit">Войти</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Order