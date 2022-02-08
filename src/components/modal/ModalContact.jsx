function ModalContact() {
    return (
        <>
            <div className="modal-contact">
                <div className="modal-container">
                    <ul className='contact__item mt-4'>
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
            </div>
        </>
    )
}
export default ModalContact