import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Partners() {


    const settings = {
        className: "center",
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 5,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 820,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 620,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <div className="partners">
                <h2 className="partners__title title text-center mt-5 mb-5">Наши партнёры</h2>
                <div className="partners__slider">
                    <Slider {...settings}>
                        <div className="partners__item">
                            <img src={require('../../images/partners/1.png')} alt="1" />
                        </div>
                        <div className="partners__item">
                            <img src={require('../../images/partners/2.png')} alt="2" />
                        </div>
                        <div className="partners__item">
                            <img src={require('../../images/partners/3.png')} alt="3" />
                        </div>
                        <div className="partners__item">
                            <img src={require('../../images/partners/4.png')} alt="4" />
                        </div>
                        <div className="partners__item">
                            <img src={require('../../images/partners/5.png')} alt="5" />
                        </div>
                        <div className="partners__item">
                            <img src={require('../../images/partners/6.webp')} alt="6" />
                        </div>
                        <div className="partners__item">
                            <img src={require('../../images/partners/7.webp')} alt="7" />
                        </div>
                        <div className="partners__item">
                            <img src={require('../../images/partners/8.webp')} alt="8" />
                        </div>
                        <div className="partners__item">
                            <img src={require('../../images/partners/9.webp')} alt="9" />
                        </div>
                        <div className="partners__item">
                            <img src={require('../../images/partners/10.webp')} alt="10" />
                        </div>
                    </Slider>
                </div>

            </div>
        </>
    )
}

export default Partners