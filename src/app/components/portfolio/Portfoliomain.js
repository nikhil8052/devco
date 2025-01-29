'use client';

import React, { useState } from "react";
import Image from "next/image";

const Portfoliomain = ({ portfolioCol1, portfolioCol2 }) => {
  const [selectedItem, setSelectedItem] = useState(null); // Track selected portfolio item
  const [showModal, setShowModal] = useState(false); // Control modal visibility

  // Convert title to match the filename format
  const getPdfFilename = (title) => {
    return title.replace(/\s+/g, "-"); // Replace spaces with "-"
  };

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!selectedItem) return;

    // Generate the PDF filename dynamically
    const pdfFilename = getPdfFilename(selectedItem.title);

    // Correct the file path (public/images/pdf/)
    const pdfPath = `/images/pdf/${pdfFilename}.pdf`; 

    // Open the PDF in a new tab
    const link = document.createElement("a");
    link.href = pdfPath; // Path to PDF inside the "public/images/pdf" folder
    link.target = "_blank"; // Open in a new tab
    document.body.appendChild(link); // Append to DOM for click
    link.click();
    document.body.removeChild(link); // Remove after click

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
          <a
            href="#"
            onClick={() => {
              setSelectedItem(item); // Set selected item
              setShowModal(true); // Show modal
            }}
          >
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
                      <a
                        href="#"
                        onClick={() => {
                          setSelectedItem(item); // Set selected item
                          setShowModal(true); // Show modal
                        }}
                      >
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
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfoliomain;
