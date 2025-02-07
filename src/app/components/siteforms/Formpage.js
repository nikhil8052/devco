'use client';

import React, { useState } from 'react';
import ContactAddress from './ContactAddress.js';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';

const schema = yup.object().shape({
  firstName: yup.string().required('First Name is required'),
  lastName: yup.string().required('Last Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  phone: yup.string().matches(/^\+?[0-9]{10,15}$/, 'Invalid phone number').required('Phone is required'),
  help: yup.string().required('Please select an option'),
  additionalInfo: yup.string().required('Additional Information is required'),
});

const formFields = [
  { id: "firstName", label: "First Name", type: "text" },
  { id: "lastName", label: "Last Name", type: "text" },
  { id: "email", label: "Email", type: "email" },
  { id: "phone", label: "Phone", type: "tel" },
  {
    id: "help", label: "How Can We Help", type: "select", options: [
      { value: "web development", label: "I need custom web development" },
      { value: "app development", label: "I need custom app development" },
      { value: "IT staffing assistance", label: "I am looking for IT staffing assistance" },
      { value: "Super custom", label: "I need something super custom" },
    ]
  },
  { id: "additionalInfo", label: "Additional Information", type: "textarea" },
];

const Formpage = () => {
  const [successMessage, setSuccessMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    setSuccessMessage(""); // Clear any existing success message

    const apiUrl = 'https://devco1.wpenginepowered.com/wp-json/custom/v1/send-mail?username=devdotco&password=MnFI 4eZL xMDN SWF0 WZa6 AmiX';
    const payload = data;
    
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      
      if (response.ok) {
        setSuccessMessage("Thank you for reaching out! Your request has been received, and our team will get back to you within 24 hours.");
        reset();

        // Hide success message after 5 seconds
        setTimeout(() => {
          setSuccessMessage("");
        }, 5000);
      } else {
        console.error('Error sending email:', result);
      }
    } catch (error) {
      console.error('Unexpected error:', error);
    }
  };

  return (
    <div className="form_page py-20">
      <div className="container">
        <div className="page_row flex gap-8">
          <div className="page_col w-[50%]">
            <div className="text_col_left">
              <h1 className="text-[34px] 2xl:text-[50px] xl:text-[45px] md:text-[36px] sm:text-[34px] font-semibold mb-4">
                Contact Us
              </h1>
              <ContactAddress />
            </div>
          </div>
          <div className="page_col w-[50%]">
            <div className="text_col_form">
              <div className='form_title'>
                <h3>Tell us how we can help you</h3>
              </div>
              <div className="form">
                <form className="site_form" onSubmit={handleSubmit(onSubmit)}>
                  <div className="form_row">
                    {formFields.map((field, index) => (
                      <div className="form_col" key={index}>
                        <div className="form_group">
                          <label htmlFor={field.id} className="block text-sm font-medium mb-2">
                            {field.label} {field.required && <span className="text-red-500">*</span>}
                          </label>
                          {field.type === 'select' ? (
                            <>
                              <select
                                id={field.id}
                                {...register(field.id)}
                                className="w-full p-2 border border-gray-300 rounded-md"
                              >
                                <option value="">Select an option</option>
                                {field.options.map((option, optionIndex) => (
                                  <option value={option.value} key={optionIndex}>
                                    {option.label}
                                  </option>
                                ))}
                              </select>
                              <p className="text-red-500 text-sm">{errors[field.id]?.message}</p>
                            </>
                          ) : field.type === 'textarea' ? (
                            <>
                              <textarea
                                id={field.id}
                                {...register(field.id)}
                                rows="4"
                                className="w-full p-2 border border-gray-300 rounded-md"
                              ></textarea>
                              <p className="text-red-500 text-sm">{errors[field.id]?.message}</p>
                            </>
                          ) : (
                            <>
                              <input
                                type={field.type}
                                id={field.id}
                                {...register(field.id)}
                                className="w-full p-2 border border-gray-300 rounded-md"
                              />
                              <p className="text-red-500 text-sm">{errors[field.id]?.message}</p>
                            </>
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
                {/* Success Message */}
                {successMessage && (
                  <div className="text-green-500 text-sm mt-3">
                    {successMessage}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Formpage;
