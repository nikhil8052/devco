"use client";
import React, { useState } from "react";

const Portfoliosection = ({ portfolioItems, portfoliotabs }) => {
  const [activeTab, setActiveTab] = useState("All");
  const [selectedItem, setSelectedItem] = useState(null); // Track the selected portfolio item
  const [showModal, setShowModal] = useState(false); // Control modal visibility

  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState(""); // New state for success message
  const fields = [
    { id: "firstName", label: "First Name", type: "text", required: true },
    { id: "lastName", label: "Last Name", type: "text", required: true },
    { id: "email", label: "Email", type: "email", required: true },
  ];

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    setErrors((prev) => ({ ...prev, [id]: "" }));
    setSuccessMessage(""); // Reset success message on input change
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

    const requestData = {
      ...formData,
      documentTitle: selectedItem?.title,
      data_type: "portfolio",
    };

    try {
      const response = await fetch(
        "https://devco1.wpenginepowered.com/wp-json/custom/v1/portfolio?username=devdotco&password=MnFI4eZLxMDNSWF0WZa6AmiX",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(requestData),
        }
      );

      if (!response.ok) throw new Error("Failed to send email");

      const result = await response.json();
      console.log("API Response:", result);

      // Display success message
      setSuccessMessage("Form submitted successfully!");

      // Open PDF if available
      if (selectedItem?.pdfLink) {
        window.open(selectedItem.pdfLink, "_blank");
      }

      // Reset form
      setFormData({});
      setErrors({});
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit form. Please try again.");
    }
  };
  const handleOutsideClick = (e) => {
    if (e.target.classList.contains("pdf-model")) {
      setShowModal(false);
      setSuccessMessage(""); // Reset success message when modal is closed
    }
  };
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

      {/* Modal */}
      {showModal && selectedItem && (
        <div className="pdf-model fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50" onClick={handleOutsideClick}>
          <div className="model_div bg-gray-950 rounded-lg shadow-lg p-8 max-w-lg w-full relative">
            <button className="close_popup absolute top-4 right-4 text-white text-2xl font-bold" onClick={() => setShowModal(false)}>
              &times;
            </button>
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
              <div className="button_wrap flex flex-col items-end space-y-2">
                <button type="submit" className="bg-customBlue text-customwhite px-6 py-3 rounded-md shadow-md transition flex items-center hover:bg-[#ffffff] hover:text-black">
                  Submit
                </button>
                {successMessage && <p className="text-green-500 text-sm mt-2">{successMessage}</p>}
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfoliosection;
