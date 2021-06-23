import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Ficon from "../assets/ficon.png"
import Micon from "../assets/micon.png"

const Reviews = () => {
    return (
        <header className="reviews__wrapper">
            <div className="reviews__info" id = "reviews">
                <h1>My happy clients</h1>
                <div className="reviews__carousel">
                    <Carousel interval={5000} showArrows={false} autoPlay={true} infiniteLoop={true} showStatus={false} showThumbs={false}>
                    <div className="carousel__container">
                            <img className="reviews__img" style={{width: "120px", height: "120px"}} src={Micon}></img>
                            <h4>Teg Keene</h4>
                            <p>"Excellent work. Professional, hard working. Good communication. Highly recommend. Will definitely use again."</p>
                        </div>
                        <div className="carousel__container">
                            <img className="reviews__img" style={{width: "120px", height: "120px"}} src={Ficon}></img>
                            <h4>Maria Malik</h4>
                            <p>"Inshal was great to work with. He had excellent communications, was punctual, and provided great suggestions."</p>

                        </div> 
                        <div className="carousel__container">
                            <img className="reviews__img" style={{width: "120px", height: "120px"}} src={Micon}></img>
                            <h4>Ghazi Butt</h4>
                            <p>"Inshal is great, I wouldn't hesitate to recommend him for front end development. Always went above and beyond expectation."</p>
                        </div> 
                    </Carousel>
                </div>

                <div className="reviews__mobile">
                        <div className="carousel__container">
                            <img className="reviews__img" style={{width: "120px", height: "120px"}} src={Micon}></img>
                            <h4>Teg Keene</h4>
                            <p>"Excellent work. Professional, hard working. Good communication. Highly recommend. Will definitely use again."</p>
                        </div>
                        <div className="carousel__container">
                            <img className="reviews__img" style={{width: "120px", height: "120px"}} src={Ficon}></img>
                            <h4>Maria Malik</h4>
                            <p>"Inshal was great to work with. He had excellent communications, was punctual, and provided great suggestions."</p>

                        </div> 
                        <div className="carousel__container">
                            <img className="reviews__img" style={{width: "120px", height: "120px"}} src={Micon}></img>
                            <h4>Ghazi Butt</h4>
                            <p>"Inshal is great, I wouldn't hesitate to recommend him for front end development. Always went above and beyond expectation."</p>
                        </div> 
                </div>


            </div>
        </header>
    )
}

export default Reviews
