"use client";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';  



const Developmentprocess = () => {
    const settings = {
        dots: false, 
        speed: 500,
        slidesToShow: 4, 
        slidesToScroll: 1,
        arrows: false,
        infinite: false,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]

    };

    const slides = [
        {
            id: 1,
            title: "Understanding",
            description:[ "Background details", 
                "Vision & values", 
                "Target personas", 
                "Stakeholder insights" 
            ],
              bgImage: "/images/Understanding.png"
        },
        {
            id: 2,
            title: "Research",
            description:[ "Customer research", 
                "Competitive analysis", 
                "Expert audits & insights", 
                "Current market positioning" 
            ],
              bgImage: "/images/Research.png"
        },
        {
            id: 3,
            title: "Strategy",
            description:[ "Story & personality", 
                "Market opportunities", 
                "Positioning & messaging", 
                "Creative brief development" 
            ],
              bgImage: "/images/Strategy.png"
        },
        {
            id: 4,
            title: "Creative",
            description:[ "Naming", 
                "Logo development", 
                "Graphics standards", 
                "Verify function",
                "Messaging framework",
            ],
             bgImage: "/images/Creative.png"
        },
        {
            id: 5,
            title: "Deliver",
            description:[ "Brand book & styleguide", 
                "Print integration", 
                "Online & mobile", 
                "Further brand extension" 
            ],
              bgImage: "/images/Deliver.png"
        },
    ];
    return (
        <div className="dev-process-wrapper pt-20 md:pb-10">
            <div className='container'>        
        <h2 className='text-[34px] 2xl:text-[70px] xl:text-[45px] md:text-[36px] sm:text-[34px] font-semibold text-white-800'>Our Development <span className='text-customwhite text-opacity-70'>Process</span></h2>
        <div className='dev-process-box'>
            <Slider {...settings}>
                {slides.map((slide) => (
                    <div key={slide.id} className='dev-process-slider'
                    >
                         <div className="bg-img-wrapper">
        <Image 
            src={slide.bgImage} 
            alt={slide.title} 
            layout="fill" 
            objectFit="cover" 
            priority
        />
    </div>
                        <span>{slide.id}</span>
                        <h6>{slide.title}</h6>
                        <ul className="description-list">
                        {slide.description.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                    </div>
                ))}
            </Slider>
        </div>
        </div>
    </div>
    );
};

export default Developmentprocess;
