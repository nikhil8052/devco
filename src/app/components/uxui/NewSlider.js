"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { projects } from "@/app/data/uxui"; // Adjust the import path as needed

const sliderSettings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1441,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const NewSlider = () => {
  return (
    <div className="new_slider lg:py-20 py-10 relative z-10">
      <div className="section_inner relative z-10">
        <div className="section_head_block lg:mb-20 mb-10">
          <div className="container mx-auto">
            <div className="section_head_row">
              <div className="section_head_col">
                <div className="head_border">
                  <h3 className="text-[22px] uppercase">Featured Projects</h3>
                </div>
              </div>
              <div className="head_btnm_col">
                <a className="blue_arrow_cta" href="/portfolio">Recent Projects <img src="/images/round_arrow.svg" alt="round arrow"></img></a>
              </div>
            </div>
          </div>
        </div>

        <div className="new_slider_block">
          <div className="container mx-auto">
            <Slider {...sliderSettings} className="project_slider">
              {projects.map((project) => (
                <div className="project_slide" key={project.id}>
                  <div className="proj_slide_wrap">
                    <div
                      className="proj_box"
                      style={{ backgroundImage: `url(${project.backgroundImage})` }}
                    >
                      <div className="proj_box_head">
                        <img className="proj_logo" src={project.logo} alt={`${project.altText} Logo`} />
                        <div className="proj_description">{project.description}</div>
                      </div>
                      <div className="project_image">
                        <img className="proj_logo" src={project.projectImage} alt={project.altText} />
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

export default NewSlider;