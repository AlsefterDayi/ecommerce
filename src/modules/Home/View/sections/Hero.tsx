// Images
import { Link } from "react-router-dom";

// React icons
import { SlSpeedometer } from "react-icons/sl";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { heroCars } from "../../../../db/carsDb";

const Hero = () => {
  return (
    <section className="heroSection">
      <div className="row">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {heroCars.map((car) => (
            <SwiperSlide key={car.id}>
              <div className="hero">
                <div className="heroImg">
                  <img src={car.carImg} alt="bmw" />
                </div>
                <div className="heroInfo">
                  <p className="slideInfo">{car.edition}</p>
                  <h2 className="slideTitle">{car.name}</h2>
                  <p className="slideDetails">
                    {car.pack} <span>{car.packSeries}</span>
                  </p>
                  <p className="price">
                    ${car.monthlyPrice} <span>/</span> <span>Month</span>
                  </p>
                  <p className="priceDetails">
                    $0 first payment paid by Bmw up to ${car.monthlyPrice}.
                  </p>
                  <p className="priceDetails">Taxes, title and fees extra. </p>
                  <div className="btns">
                    <Link className="primaryBtn" to="#">
                      LEARN MORE
                    </Link>
                    <Link className="secondaryBtn" to="#">
                      <SlSpeedometer /> TEST DRIVE
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Hero;
