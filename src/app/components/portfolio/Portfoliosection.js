"use client";
import React, { useState } from "react";
import Protfolioform from "./Protfolioform"; // Import the reusable PopupForm component

const Portfoliosection = ({ portfolioItems, portfoliotabs }) => {
  const [activeTab, setActiveTab] = useState("All");
  const [selectedItem, setSelectedItem] = useState(null); // Track the selected portfolio item
  const [showModal, setShowModal] = useState(false); // Control modal visibility

  // Filter items based on activeTab
  const filteredItems =
    activeTab === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeTab);

  return (
    <div className="portfoliodwn_section py-20">
      <div className="container mx-auto">
        <div className="tab_section">
          <div className="section_head mb-8 text-center">
            <h4>Software Development Work Portfolio</h4>
          </div>
          <div className="mb-10 tab_btn_wrapper border-gray-200 dark:border-gray-700">
            <div className="tab_list_wrapper">
              <ul className="tab_list flex flex-wrap -mb-px text-sm font-medium text-center">
                {portfoliotabs.map((tab, index) => (
                  <li key={index} className="me-2" role="presentation">
                    <button
                      className={`inline-block p-4 rounded-t-lg ${
                        activeTab === tab ? "active" : "inactive"
                      }`}
                      onClick={() => setActiveTab(tab)}
                    >
                      {tab}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <div className="tab_content">
              <div className="portfolio_tab_box">
                {filteredItems.map((item, index) => (
                  <div
                    key={index}
                    className="portfolio_tablock cursor-pointer"
                    onClick={() => {
                      setSelectedItem(item);
                      setShowModal(true);
                    }}
                  >
                    <div className="portfolio_tab_row">
                      <div className="portfol_icon">
                        <img src={item.icon} alt={item.title} />
                        <div className="case_name">
                          <h4>{item.title}</h4>
                          <p className="text-[13px]">{item.case_discreption}</p>
                        </div>
                      </div>
                      <div className="case_categry">
                        <h4>{item.category}</h4>
                      </div>
                      <div className="case_button">
                        <img
                          src={item.buttnimage}
                          width={50}
                          height={50}
                          alt="Download Case Study"
                        />
                      </div>
                    </div>
                  </div>
                ))}
                {filteredItems.length === 0 && (
                  <div className="text-center text-gray-500">
                    No items available for this category.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Reusable PopupForm Component */}
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

export default Portfoliosection;