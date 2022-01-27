function QuickOrder() {
    return (
        <>
            <div className="content-container">
                <h4 className="h4">Мы вам перезвоним</h4>
                <form className="needs-validation quick-form" novalidate>
                    <div className="row g-3">
                        <div className="quick-form__name">
                            <label for="validationDefault01" className="form-label">Ваше имя:</label>
                            <input type="text" className="form-control" id="validationDefault01" placeholder="Введите Ваше имя" required />
                        </div>
                        <div className="quick-form__phone">
                            <label for="validationDefault02" className="form-label">Ваше телефон:</label>
                            <input type="number" className="form-control" id="validationDefault02" placeholder="+38(xxx) xxx xx xx" required />
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="true" id="invalidCheck2" required />
                            <label className="form-check-label" for="invalidCheck2">
                                Я даю согласие на обработку и использование моих персональных данных.
                            </label>
                        </div>
                        <div>
                            <button className="btn quick-form__btn" type="submit">Отправить форму</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default QuickOrder