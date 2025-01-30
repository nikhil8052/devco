'use client';

import Image from "next/image";

const Portfoliomain1 = ({ portfolioCol1, portfolioCol2 }) => {
  

  return (
    <div className="portfolio_section py-10 md:py-20">
      <div className="container mx-auto">
        <div className="portfolio_grid flex justify-between gap-5">
          {/* Portfolio Column 1 */}
          <div className="portfolio_col portfolio_col1 md:w-[50%] w-[100%]">
          {portfolioCol1.map((item, index) => (
  <div className="portfolio_box" key={index}>
    <div className="box_inner">
      {/* Only render box_logo if item.logo exists */}
      {item.logo && (
        <div className="box_logo">
          <Image src={item.logo} width={100} height={100} alt="Portfolio Logo" />
        </div>
      )}

      {item.gridLogo && (
        <div className="grid_logo" style={{ backgroundImage: `url(/images/gridbg.svg)` }}>
          <Image src={item.gridLogo} width={100} height={100} alt="Portfolio Grid Logo" />
        </div>
      )}

      <div className="box_text">
        <h3>{item.title}</h3>
        <div className="download_div">
          <a href="#">
            <Image
              src="/images/downloadcaseimage.svg"
              width={100}
              height={100}
              alt="Download Case Study"
            />
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
                    {/* Only render box_logo if item.logo exists */}
              {item.logo && (
                  <div className="box_logo">
                    <Image src={item.logo} width={100} height={100} alt="Portfolio Logo" />
                  </div>
              )}
                  {item.gridLogo && (
                    <div className="grid_logo" style={{ backgroundImage: `url(/images/gridbg.svg)` }}>
                      <Image src={item.gridLogo} width={100} height={100} alt="Portfolio Grid Logo" />
                    </div>
                  )}
                  <div className="box_text">
                    <h3>{item.title}</h3>
                    <div className="download_div">
                      <a href="#">
                        <Image
                          src="/images/downloadcaseimage.svg"
                          width={100}
                          height={100}
                          alt="Download Case Study"
                        />
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

export default Portfoliomain1;
