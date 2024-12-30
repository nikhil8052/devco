import React, { useState } from "react";

const Portfoliosection = ({ portfolioItems, portfoliotabs }) => {
  const [activeTab, setActiveTab] = useState("All");
  const [selectedItem, setSelectedItem] = useState(null); // Track the selected portfolio item
  const [showModal, setShowModal] = useState(false); // Control modal visibility

  // Filter items based on activeTab
  const filteredItems =
    activeTab === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeTab);

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Trigger download of case study PDF
    const link = document.createElement("a");
    link.href = `/images/${selectedItem.title}.pdf`; // Replace with the actual PDF path
    link.download = `${selectedItem.title}-CaseStudy.pdf`;
    link.click();

    // Close the modal
    setShowModal(false);
  };

  // Close modal on clicking outside the modal content
  const handleOutsideClick = (e) => {
    if (e.target.classList.contains("pdf-model")) {
      setShowModal(false);
    }
  };

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
                        </div>
                      </div>
                      <div className="case_categry">
                        <h4>{item.category}</h4>
                      </div>
                      <div className="case_button">
                        <img
                          src="/images/downloadcaseimage.svg"
                          width={100}
                          height={100}
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

      {/* Modal */}
      {showModal && selectedItem && (
        <div
          className="pdf-model fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={handleOutsideClick}
        >
          <div className="model_div bg-gray-950 rounded-lg shadow-lg p-8 max-w-lg w-full relative">
            <button
              className="close_popup absolute top-4 right-4 text-white text-2xl font-bold"
              onClick={() => setShowModal(false)}
            >
              &times;
            </button>
            <h5 className="text-white mb-4">Please fill the below form to download the PDF</h5>
            <h3 className="text-xl font-bold mb-4 text-white">{selectedItem.title}</h3>
            <form onSubmit={handleFormSubmit}>
              <div className="mb-4">
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-400">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  required
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-400">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  required
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-400">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="button_wrap flex justify-end space-x-4">
                <button
                  type="submit"
                  className="bg-customBlue text-customwhite px-6 py-3 rounded-md shadow-md transition flex items-center hover:bg-[#ffffff] hover:text-black"
                >
                  Download
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfoliosection;
