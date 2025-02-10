'use client';

import React, { useState } from "react";
import Image from "next/image";

const Portfoliomain1 = ({ portfolioCol1, portfolioCol2 }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  const fields = [
    { id: "firstName", label: "First Name", type: "text", required: true },
    { id: "lastName", label: "Last Name", type: "text", required: true },
    { id: "email", label: "Email", type: "email", required: true },
  ];

  const getPdfFilename = (title) => title.replace(/\s+/g, "-");

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    setErrors((prev) => ({ ...prev, [id]: "" }));
  };

  const validateForm = () => {
    const newErrors = {};
    fields.forEach((field) => {
      if (field.required && !formData[field.id]) {
        newErrors[field.id] = `${field.label} is required`;
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const FormData = {
      ...formData,
      pdfTitle: selectedItem.title,
      data_type: "portfolio",
    };

    try {
      const response = await fetch(
        "https://devco1.wpenginepowered.com/wp-json/custom/v1/portfolio?username=devdotco&password=MnFI4eZLxMDNSWF0WZa6AmiX",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(FormData),
        }
      );
      if (!response.ok) throw new Error("Failed to send email");

      const pdfFilename = getPdfFilename(selectedItem.title);
      const pdfPath = `/images/pdf/${pdfFilename}.pdf`;

      const link = document.createElement("a");
      link.href = pdfPath;
      link.target = "_blank";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setFormData({});
      setShowModal(false);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit form. Please try again.");
    }
  };

  const handleOutsideClick = (e) => {
    if (e.target.classList.contains("pdf-model")) {
      setShowModal(false);
    }
  };

  return (
    <div className="portfolio_section py-10 md:py-20">
      <div className="container mx-auto">
        <div className="portfolio_grid flex justify-between gap-5">
          {[portfolioCol1, portfolioCol2].map((col, i) => (
            <div key={i} className={`portfolio_col md:w-[50%] w-[100%]`}>
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
                          <Image src="/images/downloadcaseimage.svg" width={100} height={100} alt="Download Case Study" />
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
        <div className="pdf-model fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50" onClick={handleOutsideClick}>
          <div className="model_div bg-gray-950 rounded-lg shadow-lg p-8 max-w-lg w-full relative">
            <button className="close_popup absolute top-4 right-4 text-white text-2xl font-bold" onClick={() => setShowModal(false)}>
              &times;
            </button>
            <h5 className="text-white mb-4">Please fill the below form to download the PDF</h5>
            <h3 className="text-xl font-bold mb-4 text-white">{selectedItem.title}</h3>
            <form onSubmit={handleFormSubmit}>
              {fields.map((field) => (
                <div className="mb-4" key={field.id}>
                  <label htmlFor={field.id} className="block text-sm font-medium text-gray-400">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    id={field.id}
                    required={field.required}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    value={formData[field.id] || ""}
                    onChange={handleInputChange}
                  />
                  {errors[field.id] && <p className="text-red-500 text-sm mt-1">{errors[field.id]}</p>}
                </div>
              ))}
              <div className="button_wrap flex justify-end space-x-4">
                <button type="submit" className="bg-customBlue text-customwhite px-6 py-3 rounded-md shadow-md transition flex items-center hover:bg-[#ffffff] hover:text-black">
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

export default Portfoliomain1;
