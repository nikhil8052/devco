import React from 'react';

const formFields = [
  { id: "firstName", label: "First Name", type: "text", required: true },
  { id: "lastName", label: "Last Name", type: "text", required: true },
  { id: "email", label: "Email", type: "email", required: true },
  { id: "phone", label: "Phone", type: "tel", required: true },
  {
    id: "help", label: "How Can We Help", type: "select", options: [
      { value: "inquiry", label: "General Inquiry" },
      { value: "support", label: "Support" },
      { value: "feedback", label: "Feedback" },
    ]
  },
  { id: "additionalInfo", label: "Additional Information", type: "textarea" },
];

const addresses = [
  {
    icon: '/images/locventrfff.svg', // Replace with actual icon path
    title: 'Seattle, WA',
    description: '1425 Broadway 22689 Seattle, WA 98112',
  },
  {
    icon: '/images/locventrfff.svg', // Replace with actual icon path
    title: 'West Palm Beach, FL',
    description: '700 S Rosemary Ave Suite 204 West Palm Beach, FL 33401',
  },
  {
    icon: '/images/phnvectrkjkjh.svg', // Replace with actual icon path
    title: '',
    description: '',
    phnlink: '+1 (206) 438-9789',
  },
];

const Formpage = () => {
  return (
    <div className="form_page py-20">
      <div className="container">
        <div className="page_row flex gap-8">
          <div className="page_col w-[50%]">
            <div className="text_col_left">
              <h1 className="text-[34px] 2xl:text-[50px] xl:text-[45px] md:text-[36px] sm:text-[34px] font-semibold mb-4">
                Contact Us
              </h1>
              <div className="address_wrapper">
                {addresses.map((address, index) => (
                  <div className="address_box" key={index}>
                    <div className="address_icon">
                      <img src={address.icon} alt={`${address.title || 'Phone'} icon`} />
                    </div>
                    <div className="addrs-text">
                      {address.title && <h4>{address.title}</h4>}
                      {address.description && <p>{address.description}</p>}
                      {address.phnlink && (
                        <p>
                          <a href={`tel:${address.phnlink}`} className="phone_link">
                            {address.phnlink}
                          </a>
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="page_col w-[50%]">
            <div className="text_col_form">
              <div className='form_title'>
                <h3>Tell us how we can help you</h3>
              </div>
              <div className="form">
                <form className="site_form">
                  <div className="form_row">
                    {formFields.map((field, index) => (
                      <div className="form_col" key={index}>
                        <div className="form_group">
                          <label htmlFor={field.id} className="block text-sm font-medium mb-2">
                            {field.label} {field.required && <span className="text-red-500">*</span>}
                          </label>
                          {field.type === 'select' ? (
                            <select
                              id={field.id}
                              name={field.id}
                              className="w-full p-2 border border-gray-300 rounded-md"
                              required={field.required}
                            >
                              {field.options.map((option, optionIndex) => (
                                <option value={option.value} key={optionIndex}>
                                  {option.label}
                                </option>
                              ))}
                            </select>
                          ) : field.type === 'textarea' ? (
                            <textarea
                              id={field.id}
                              name={field.id}
                              rows="4"
                              className="w-full p-2 border border-gray-300 rounded-md"
                            ></textarea>
                          ) : (
                            <input
                              type={field.type}
                              id={field.id}
                              name={field.id}
                              required={field.required}
                              className="w-full p-2 border border-gray-300 rounded-md"
                            />
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="form_row">
                    <div className="form_col w-full">
                      <div className="form_group mt-5">
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

export default Formpage;
