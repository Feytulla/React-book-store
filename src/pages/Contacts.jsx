import Breadcrumb from '../components/Breadcrumb';
import BookQualities from '../components/BookQualities';

function Contacts() {
    return (
        <>
            <div className="containers">
                <Breadcrumb currentPage={'Контакты'} />
                <h1 className="title mb-4">Связаться с нами</h1>
                <div className="content-container">
                    <div className="row">
                        <div className="col-12 col-sm-6 col-md-4">
                            <ul className='contact__items mt-4'>
                                <li className='contact__item d-flex align-items-center'><i className="fas fa-clock icon-color"></i><span className='contact__text'>с 10 до 21</span></li>
                                <li className='contact__item d-flex align-items-center'><i className="fas fa-map-marker-alt icon-color"></i><span className='contact__text'>Украина, Одесса Космонавта Комарова, 10</span></li>
                                <li className='contact__item d-flex align-items-center'>
                                    <i className="fas fa-phone-alt icon-color"></i>
                                    <div className='contact__text'>
                                        <div>+38 066 950-13-30</div>
                                        <div>+38 098 950-13-30</div>
                                    </div>
                                </li>
                                <li className='contact__item d-flex align-items-center'><i className="fas fa-envelope icon-color"></i><span className='contact__text'>kniginya.com@gmail.com</span></li>
                            </ul>
                        </div>
                        <div className="col-12 col-sm-6 col-md-8">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d343.7905028799018!2d30.717112779605436!3d46.422456855237854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c6330ca72c2315%3A0xde6264fe20279b3e!2z0YPQuy4g0JrQvtGB0LzQvtC90LDQstGC0LAg0JrQvtC80LDRgNC-0LLQsCwgMTAsINCe0LTQtdGB0YHQsCwg0J7QtNC10YHRgdC60LDRjyDQvtCx0LvQsNGB0YLRjCwg0KPQutGA0LDQuNC90LAsIDY1MDAw!5e0!3m2!1sru!2s!4v1642940018317!5m2!1sru!2s" width="100%" height="100%" style={{ border: 0 }} allowfullscreen="" loading="lazy"></iframe>
                        </div>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-12 col-md-7">
                        <div className="content-container ml-2">
                            <h4 className="h4">Кто мы?</h4>
                            <p><strong>«КНИГИНЯ» </strong>представляет собой новый вид книжного сервиса в Одессе и регионах , в которых организована продажа лучших изданий известных украинских и зарубежных издательских домов. Наш ассортимент включает в себя широкий спектр художественной литературы, всемирной истории и истории религий, роскошных альбомов по живописи и искусству, иллюстрированных энциклопедий и словарей. Всё это раритетные, уникально-лимитированные, коллекционные, подарочные издания книг. Почему для нас так важно качество книжной продукции? Дело в том, что книга нам видится не просто источником информации, а своего рода фамильной ценностью: она должна передаваться из рук в руки, из поколения в поколения.</p>
                            <BookQualities />
                        </div>
                    </div>
                    <div className="col-12 col-md-5 mt-4 mt-md-0">
                        <div className="content-container mr-2">
                            <h4 className="h4">Написать нам</h4>
                            <form className="form">
                                <div className="mb-3 form__name">
                                    <label className="form-label">Ваше имя:</label>
                                    <input type="text" className="form-control" placeholder="Введите Ваше имя" />
                                </div>
                                <div className="mb-3 form__email">
                                    <label for="exampleInputEmail1" className="form-label">Ваш email:</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Введите Ваш email" />
                                </div>
                                <div className="mb-3 form__comment">
                                    <label className="form-label">Ваш вопрос:</label>
                                    <textarea name="comment" id="" placeholder="Введите Ваш вопрос"></textarea>
                                </div>
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                        <label className="form-check-label" for="exampleCheck1">Я даю согласие на обработку и использование моих персональных данных.</label>
                                </div>
                                <button type="submit" className="btn form__btn">Отправить</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contacts