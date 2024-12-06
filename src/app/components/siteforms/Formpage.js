import React from 'react';

const Formpage = () => {
  return (
    <div className="form_page py-20">
      <div className="container">
        <div className="page_row flex gap-8">
          <div className="page_col w-[50%]">
            <div className="text_col_form">
              <h1 className="text-[34px] 2xl:text-[50px] xl:text-[45px] md:text-[36px] sm:text-[34px] font-semibold mb-4">
                Contact Us
              </h1>
            </div>
          </div>
          <div className="page_col w-[50%]">
            <div className="text_col_form">
              <div className="form">
                <form className="space-y-4">
                  {/* First Name */}
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full p-2 border border-gray-300 rounded-md"
                    />
                  </div>
                  {/* Last Name */}
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full p-2 border border-gray-300 rounded-md"
                    />
                  </div>
                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full p-2 border border-gray-300 rounded-md"
                    />
                  </div>
                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="w-full p-2 border border-gray-300 rounded-md"
                    />
                  </div>
                  {/* How Can We Help */}
                  <div>
                    <label htmlFor="help" className="block text-sm font-medium mb-2">
                      How Can We Help
                    </label>
                    <select
                      id="help"
                      name="help"
                      className="w-full p-2 border border-gray-300 rounded-md"
                    >
                      <option value="" disabled selected>
                        Select an option
                      </option>
                      <option value="inquiry">General Inquiry</option>
                      <option value="support">Support</option>
                      <option value="feedback">Feedback</option>
                    </select>
                  </div>
                  {/* Additional Information */}
                  <div>
                    <label htmlFor="additionalInfo" className="block text-sm font-medium mb-2">
                      Additional Information
                    </label>
                    <textarea
                      id="additionalInfo"
                      name="additionalInfo"
                      rows="4"
                      className="w-full p-2 border border-gray-300 rounded-md"
                    ></textarea>
                  </div>
                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Formpage;
