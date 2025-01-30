'use client';

import React from 'react';
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
  { id: "firstName", label: "First Name", type: "text"},
  { id: "lastName", label: "Last Name", type: "text",  },
  { id: "email", label: "Email", type: "email", },
  { id: "phone", label: "Phone", type: "tel",  },
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

// const handleSubmit = async (event) => {
//   event.preventDefault(); // Prevent the default form submission

//   const formData = new FormData(event.target); // Get the form data
  
//   // Convert form data to an object
//   const data = {};
//   formData.forEach((value, key) => {
//     data[key] = value;
//   });

//   try {
//     const response = await fetch('/api/submitForm', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(data),
//     });
    
//     if (response.ok) {
//       alert('Form submitted successfully');
//     } else {
//       alert('Failed to submit form');
//     }
//   } catch (error) {
//     console.error('Error:', error);
//     alert('An error occurred while submitting the form');
//   }
// };

const Formpage = () => {


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });


  
  const onSubmit = async (data) => {
    console.log( data , " This is the data ")
    return 
    try {
      const response = await fetch('/api/submitForm', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      
      if (response.ok) {
        alert('Form submitted successfully');
      } else {
        alert('Failed to submit form');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while submitting the form');
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
                              name={field.id}
                              {...register(field.id)}
                              className="w-full p-2 border border-gray-300 rounded-md"
                              required={field.required}
                            >
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
                              name={field.id}
                              {...register(field.id)}
                              rows="4"
                              className="w-full p-2 border border-gray-300 rounded-md"
                            ></textarea>
                            <p className="text-red-500 text-sm">{errors[field.id]?.message}</p>
                            </>

                          ) : (<>
                            <input
                              type={field.type}
                              id={field.id}
                              name={field.id}
                              {...register(field.id)}
                              required={field.required}
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Formpage;
