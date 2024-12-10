import React from 'react';

const Careerpage = () => {
  return (
    <div className="form_page py-20" style={{
      backgroundImage: "url('/images/faz_bg.png')",
      backgroundRepeat: "no-repeat",
    }}>
      <div className="container">
        <div className="page_row flex gap-8">
          <div className="page_col w-[50%]">
            <div className="text_col_left">
              <h1 className="text-[34px] 2xl:text-[50px] xl:text-[45px] md:text-[36px] sm:text-[34px] font-semibold mb-4">
                Contact Us
              </h1>
            </div>
          </div>
          <div className="page_col w-[50%]">
            <div className="text_col_form">
              <div className='form_title'>
                <h3>Join Our Team</h3>
              </div>
              <div className="form">
                <form className="site_form">
                  <div className='form_row'>
                    <div className='form_col'>
                        <div className='form_group'>
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
                    </div>
                    <div className='form_col'>
                      <div className='form_group'>
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
                    </div>
                    <div className='form_col'>
                      <div className='form_group'>
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
                    </div>
                    <div className='form_col'>
                      <div className='form_group'>
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
                    </div>
                    <div className='form_col'>
                        <div className='form_group'>
                            <label htmlFor="help" className="block text-sm font-medium mb-2">
                            How Can We Help
                          </label>
                          <select
                            id="help"
                            name="help"
                            className="w-full p-2 border border-gray-300 rounded-md"
                          >
                            <option value="inquiry">General Inquiry</option>
                            <option value="support">Support</option>
                            <option value="feedback">Feedback</option>
                          </select>
                      </div>
                    </div>
                    <div className='form_col'>
                        <div className='form_group'>
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
                    </div>
                    <div className='form_col'>
                        <div className='form_group'>
                            <button type="submit" className="cta">Submit Form</button>
                      </div>
                    </div>
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

export default Careerpage;