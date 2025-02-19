'use client';
import React, { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';

const schema = yup.object().shape({
  firstName: yup.string().required('First Name is required'),
  lastName: yup.string().required('Last Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  phone: yup.string()
    .matches(/^\d{10}$/, 'Phone number must be 10 digits')
    .required('Phone is required'),
  CodingSkills: yup.string().required('Coding Skills are required'),
});

const Careerpage = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const [fileError, setFileError] = useState("");
  const [fileName, setFileName] = useState('');
  const [resume, setResume] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleFileChange = (event) => {
    const file = event.target.files;
    if (file.length > 0) {
      setFileName(file[0].name);
      setResume(file);
      setFileError("");
    } else {
      setFileError("File is required");
    }
  };

  const onSubmit = async (data) => {
    if (!resume) {
      setFileError("Resume is required");
      return;
    }
  
    const apiUrl = 'https://devco1.wpenginepowered.com/wp-json/custom/v1/send-career?username=devdotco&password=MnFI 4eZL xMDN SWF0 WZa6 AmiX';
  
    const formData = new FormData();
    formData.append("firstName", data.firstName);
    formData.append("lastName", data.lastName);
    formData.append("email", data.email);
    formData.append("phone", data.phone);
    formData.append("CodingSkills", data.CodingSkills);
    formData.append("resume", resume);
    formData.append("additionalInfo", data.additionalInfo);

  
  

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        body: formData,
      });
  
      if (response.ok) {
        setSuccessMessage("Thank you for reaching out! Your request has been received, and our team will get back to you within 24 hours!");
        setErrorMessage('');
        reset();
        setFileName('');
        setResume(null);
      } else {
        setErrorMessage("Error submitting form.");
      }
    } catch {
      setErrorMessage("Unexpected error occurred.");
    }
  };
  

  return (
    <div className="form_page py-20" style={{
      backgroundImage: "url('/images/faz_bg.png')",
      backgroundRepeat: "no-repeat",
    }}>
      <div className="container pb-20">
        <div className='section_head text-center mb-20'>
          <h1 className="text-[34px] 2xl:text-[64px] xl:text-[45px] md:text-[36px] sm:text-[34px] font-semibold text-white-800"> Software Development <span className="text-headingBlue">Careers </span></h1>
        </div>
        <div className="page_row flex gap-8">
          <div className="page_col w-[50%]">
            <div className="text_col_left">
              <p className="bold">At DEV.co, we strive to create an environment where the self-motivated, autonomous, entrepreneurial software engineer can truly thrive.</p>
              <p>
                If you are the type of software engineer who thrives in a challenging environment where new opportunities mean new areas for future career growth and development, then joining the DEV.co Team may be your next best career move.<br></br>

                As a team, we espouse the virtues of integrity, creativity, quality and in challenging the software engineering status quo. Above all, taking care of our employees is at the pinnacle of what we do as a company.<br></br>

                We work on extremely exciting and interesting projects in a dynamic, fun and fast-paced environment. If this sounds like a fit for you, please get in touch via the form at right.</p>
            </div>
          </div>
          <div className="page_col w-[50%]">
            <div className="text_col_form">
              <div className='form_title'>
                <h3>Join Our Team</h3>
              </div>
              <div className="form">
                <form className="site_form" onSubmit={handleSubmit(onSubmit)} >
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
                          {...register('firstName')}
                          className="w-full p-2 border border-gray-300 rounded-md"
                        />
                        <p className="text-red-500">{errors.firstName?.message}</p>
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
                          {...register('lastName')}
                          className="w-full p-2 border border-gray-300 rounded-md"
                        />
                        <p className="text-red-500">{errors.lastName?.message}</p>
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
                          {...register('email')}
                          className="w-full p-2 border border-gray-300 rounded-md"
                        />
                        <p className="text-red-500">{errors.email?.message}</p>
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
                          {...register('phone')}
                          className="w-full p-2 border border-gray-300 rounded-md"
                        />
                        <p className="text-red-500">{errors.phone?.message}</p>
                      </div>
                    </div>
                    <div className='form_col'>
                      <div className='form_group'>
                        <label htmlFor="CodingSkills" className="block text-sm font-medium mb-2">
                          Your Coding Skills<span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="CodingSkills"
                          name="CodingSkills"
                          {...register('CodingSkills')}
                          className="w-full p-2 border border-gray-300 rounded-md"
                        />
                        <p className="text-red-500">{errors.CodingSkills?.message}</p>
                      </div>
                    </div>
                    <div className='form_col'>
                      <div className='form_group'>
                        <label htmlFor="resume" className="block text-sm font-medium mb-2">
                          Upload Resume/CV <span className="text-red-500">*</span>
                        </label>
                        <div className="file-upload-container">
                          <input
                            type="file"
                            id="resume"
                            name="resume"
                            accept=".pdf,.doc,.docx"
                            className="file-input hidden"
                            onChange={handleFileChange}
                          />
                          
                          <p className="text-red-500">{fileError}</p>
                          <label htmlFor="resume" className="file-upload-label w-full p-2 border border-gray-300 rounded-md flex justify-center items-center cursor-pointer">
                            <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M22.3071 10.167C21.934 10.167 21.6408 10.4602 21.6408 10.8333V18.9086C21.6408 19.6282 21.0545 20.1878 20.3349 20.1878H2.63847C1.91889 20.1878 1.33256 19.6015 1.33256 18.9086V10.8333C1.33256 10.4602 1.0394 10.167 0.66628 10.167C0.293163 10.167 0 10.4602 0 10.8333V18.9086C0 20.3478 1.17265 21.5204 2.63847 21.5204H20.3615C21.8273 21.5204 23 20.3478 23 18.9086V10.8333C22.9733 10.4602 22.6802 10.167 22.3071 10.167Z" fill="#4353FF" />
                              <path d="M11.2464 18.5358C11.6195 18.5358 11.9127 18.2426 11.9127 17.8695V2.7316L15.6439 5.92974C15.7771 6.03635 15.9104 6.08965 16.0703 6.08965C16.2568 6.08965 16.4434 6.0097 16.5766 5.84979C16.8165 5.58328 16.7899 5.15686 16.4967 4.917L11.6995 0.786057L11.6728 0.759406C11.6462 0.759406 11.6462 0.732755 11.6195 0.732755C11.5929 0.732755 11.5662 0.706104 11.5662 0.706104C11.5396 0.706104 11.5396 0.679452 11.5129 0.679452C11.4863 0.679452 11.4596 0.652801 11.433 0.652801C11.4063 0.652801 11.4063 0.652801 11.3797 0.652801C11.2997 0.62615 11.2197 0.62615 11.1398 0.652801C11.1131 0.652801 11.1131 0.652801 11.0865 0.652801C11.0598 0.652801 11.0332 0.679452 11.0065 0.679452C11.0065 0.679452 10.9799 0.679452 10.9532 0.679452C10.9266 0.679452 10.8999 0.706104 10.8999 0.706104C10.8733 0.706104 10.8733 0.732755 10.8466 0.732755L10.82 0.759406L5.96946 4.917C5.70295 5.15686 5.64965 5.58328 5.88951 5.84979C6.12937 6.1163 6.55579 6.1696 6.8223 5.92974L10.5535 2.7316V17.8695C10.5801 18.2426 10.8999 18.5358 11.2464 18.5358Z" fill="#4353FF" />
                            </svg>
                          </label>
                        </div>
                        {fileName && (
                          <p className="mt-2 text-sm text-white-500">Selected file: {fileName}</p>
                        )}
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
                          {...register('additionalInfo')}
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
                    {successMessage && (
                      <div className="form_col">
                        <div className="form_group">
                          <p className="text-green-500">{successMessage}</p>
                        </div>
                      </div>
                    )}
                    {errorMessage && (
                      <div className="form_col">
                        <div className="form_group">
                          <p className="text-red-500">{errorMessage}</p>
                        </div>
                      </div>
                    )}
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