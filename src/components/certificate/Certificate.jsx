import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './certificate.css';
import certificationImage1 from '../../assets/edyst.jpg';
import certificationImage2 from '../../assets/ai.png';
import certificationImage3 from '../../assets/css.png';
import certificationImage4 from '../../assets/forage.png';
import certificationImage5 from '../../assets/front.png';
import certificationImage6 from '../../assets/html.png';
import certificationImage7 from '../../assets/mongodb.png';
import certificationImage8 from '../../assets/mongodb1.png';
import certificationImage9 from '../../assets/mongodb2.png';
import certificationImage10 from '../../assets/mongodb3.png';
import certificationImage11 from '../../assets/mongodb4.png';
import certificationImage12 from '../../assets/mongodb5.png';
import certificationImage13 from '../../assets/mongodb6.png';
import certificationImage14 from '../../assets/mongodb7.png';
import certificationImage15 from '../../assets/nodejs.png';
import certificationImage16 from '../../assets/sql.png';
import certificationImage17 from '../../assets/ml.png';



const Certificate = () => {
  return (
    <section id="certificate">
      <h5>My certification</h5>
      <h2>Certificate</h2>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2900,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="swiper" /* Ensure the className is correctly applied */
      >
        <SwiperSlide><img src={certificationImage1} alt="Certification 1" /></SwiperSlide>
        <SwiperSlide><img src={certificationImage2} alt="Certification 2" /></SwiperSlide>
        <SwiperSlide><img src={certificationImage3} alt="Certification 3" /></SwiperSlide>
        <SwiperSlide><img src={certificationImage4} alt="Certification 4" /></SwiperSlide>
        <SwiperSlide><img src={certificationImage5} alt="Certification 5" /></SwiperSlide>
        <SwiperSlide><img src={certificationImage6} alt="Certification 6" /></SwiperSlide>
        <SwiperSlide><img src={certificationImage7} alt="Certification 7" /></SwiperSlide>
        <SwiperSlide><img src={certificationImage8} alt="Certification 8" /></SwiperSlide>
        <SwiperSlide><img src={certificationImage9} alt="Certification 9" /></SwiperSlide>
        <SwiperSlide><img src={certificationImage10} alt="Certification 10" /></SwiperSlide>
        <SwiperSlide><img src={certificationImage11} alt="Certification 11" /></SwiperSlide>
        <SwiperSlide><img src={certificationImage12} alt="Certification 12" /></SwiperSlide>
        <SwiperSlide><img src={certificationImage13} alt="Certification 13" /></SwiperSlide>
        <SwiperSlide><img src={certificationImage14} alt="Certification 14" /></SwiperSlide>
        <SwiperSlide><img src={certificationImage15} alt="Certification 15" /></SwiperSlide>
        <SwiperSlide><img src={certificationImage16} alt="Certification 16" /></SwiperSlide>
        <SwiperSlide><img src={certificationImage17} alt="Certification 17" /></SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Certificate;
