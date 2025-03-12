"use client";

import { testimonialsData } from "@/app/data/uxui"; 
import Slider from "react-slick"; 
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 

const Testimonials = () => {
  const sliderSettings = {
    dots: true, // Show navigation dots
    infinite: true, // Infinite looping
    speed: 500, // Slide transition speed
    slidesToShow: 1, // Show only one slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
    autoplay: false, // Auto slide
    autoplaySpeed: 3000, // Slide every 3 seconds
    arrows: true, // Hide prev/next arrows
  };

  return (
    <div className="testimonial lg:py-20 py-10">
      <div className="container mx-auto">
        <div className="testimonial_inner">
          <div className="section_head mb-5">
            <div className="head_border">
              <h3 className="text-[22px] uppercase">What Our Clients Say</h3>
            </div>
          </div>

          <div className="testimonial_slider_wrap">
            <Slider {...sliderSettings}>
              {testimonialsData.map((testimonial) => (
                <div key={testimonial.id} className="testimonial_slide">
                  <div className="testi_slide_inner">
                    <div className="test_slider_row">
                      <div className="client_img">
                        <img src={testimonial.image} alt={testimonial.name} />
                      </div>
                      <div className="client_content">
                        <div className="client_content_inner">
                          <div className="client_quote">
                            <img src="/images/Quote.svg" alt="Quote" />
                            <p className="text-customWhite xl:text-[20px] lg:text-[18px] md:text-[18px] sm:text-[14px] text-[14px]">
                              {testimonial.quote}
                            </p>
                          </div>
                          <div className="client_footer">
                            <h3>{testimonial.name}</h3>
                            <p>{testimonial.company}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Testimonials;
