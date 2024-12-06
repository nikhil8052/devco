import React from 'react';
import Image from 'next/image';

const Portfoliomain = () => {
  // Portfolio data for column 1
  const portfolioCol1 = [
    {
      logo: '/images/pepsi_logo.svg',
      gridLogo: '/images/pepsi_round.svg',
      title: 'Pepsi Case Study',
    },
    {
      logo: '/images/Monumetric1.svg',
      gridLogo: '/images/monumetric_round.svg',
      title: 'Monumetric Case Study',
      downloadIcon: '/images/downloadcaseimage.svg',
    },
    {
      logo: '/images/lawcologo.svg',
      gridLogo: '',
      title: 'Law.co Case Study',
    },
    {
      logo: '/images/logo_stapple.svg',
      gridLogo: '',
      title: 'Staples Case Study',
    },
  ];

  // Portfolio data for column 2
  const portfolioCol2 = [
    {
      logo: '/images/emoov-white.svg',
      gridLogo: '/images/emoov.svg',
      title: 'Emoov Case Study',
    },
    {
      logo: '/images/Groupon_Logo 1.svg',
      gridLogo: '',
      title: 'Groupon Case Study',
    },
    {
      logo: '/images/mob_appli.svg',
      gridLogo: '',
      title: 'Mobile Applications Case Study',
    },
    {
      logo: '/images/logo_sales.svg',
      gridLogo: '/images/salesforce.svg',
      title: 'Salesforce Case Study',
    },
  ];

  return (
    <div className="portfolio_section py-20">
      <div className="container mx-auto">
        <div className="portfolio_grid flex justify-between gap-5">
          {/* Portfolio Column 1 */}
          <div className="portfolio_col portfolio_col1 lg:w-[50%] w-[100%]">
            {portfolioCol1.map((item, index) => (
              <div className="portfolio_box" key={index}>
                <div className="box_inner">
                  <div className="box_logo">
                    <Image src={item.logo} width={100} height={100} alt="Portfolio Logo" />
                  </div>
                  {item.gridLogo && (
                    <div className="grid_logo" style={{ backgroundImage: `url(/images/gridbg.svg)` }}>
                      <Image src={item.gridLogo} width={100} height={100} alt="Portfolio Grid Logo" />
                    </div>
                  )}
                  <div className="box_text">
                    <h3>{item.title}</h3>
                    <div className="download_div">
                      <a href="#">
                        <Image src="/images/downloadcaseimage.svg" width={100} height={100} alt="Download Case Study" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Portfolio Column 2 */}
          <div className="portfolio_col portfolio_col2 lg:w-[50%] w-[100%]">
            {portfolioCol2.map((item, index) => (
              <div className="portfolio_box" key={index}>
                <div className="box_inner">
                  <div className="box_logo">
                    <Image src={item.logo} width={100} height={100} alt="Portfolio Logo" />
                  </div>
                  {item.gridLogo && (
                    <div className="grid_logo" style={{ backgroundImage: `url(/images/gridbg.svg)` }}>
                      <Image src={item.gridLogo} width={100} height={100} alt="Portfolio Grid Logo" />
                    </div>
                  )}
                  <div className="box_text">
                    <h3>{item.title}</h3>
                    <div className="download_div">
                      <a href="#">
                        <Image src="/images/downloadcaseimage.svg" width={100} height={100} alt="Download Case Study" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfoliomain;
