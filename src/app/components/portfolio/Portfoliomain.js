"use client";

import React, { useState } from "react";
import Image from "next/image";
import Protfolioform from "./Protfolioform"; // Import the PopupForm component

const Portfoliomain = ({ portfolioCol1, portfolioCol2 }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="portfolio_section py-10 md:py-20">
      <div className="container mx-auto">
        <div className="portfolio_grid flex justify-between gap-5">
          {[portfolioCol1, portfolioCol2].map((col, i) => (
            <div key={i} className="portfolio_col md:w-[50%] w-[100%]">
              {col.map((item, index) => (
                <div className="portfolio_box" key={index}>
                  <div className="box_inner">
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
                        <a
                          href="#"
                          onClick={() => {
                            setSelectedItem(item);
                            setShowModal(true);
                          }}
                        >
                          <Image src={item.buttnimage} width={100} height={100} alt="Download Case Study" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {showModal && selectedItem && (
        <Protfolioform
          selectedItem={selectedItem}
          onClose={() => {
            setShowModal(false);
            setSelectedItem(null);
          }}
          onSubmit={() => {
            // Handle form submission if needed
          }}
        />
      )}
    </div>
  );
};

export default Portfoliomain;