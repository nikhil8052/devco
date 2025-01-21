'use client';
import { useState } from 'react';
import AdminLayout from '../../layouts/AdminLayout';
import AjaxRequest from '../../utils/helper'; 

export default function Page() {
    const [formValues, setFormValues] = useState({
        email: '',
        location: '',
        address: '',
        city: '',
        profile: null, // For the file input
    });

    const handleInputChange = (e) => {
        const { name, value, type, files } = e.target;
        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: type === 'file' ? files[0] : value, // Handle file inputs separately
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission

        const formData = new FormData();
        formData.append('email', formValues.email);
        formData.append('location', formValues.location);
        formData.append('address', formValues.address);
        formData.append('city', formValues.city);
        if (formValues.profile) {
            formData.append('profile', formValues.profile); // Append the file
        }


        const response = await AjaxRequest('https://your-api-endpoint.com/add-author', 'POST', formData, {
            headers: {
                'Content-Type': 'multipart/form-data', // Set correct content type for form data
            },
        });

        console.log('Response:', response); // Handle response


        console.log(formValues); // Log all form values
    };

    
    return (
        <AdminLayout>
            <>
                <h2 className="mb-4">Add Author</h2>
                <section>
                    <div className="card p-3">
                        <form onSubmit={handleSubmit}>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputEmail4">Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="inputEmail4"
                                        name="email"
                                        placeholder="Email"
                                        value={formValues.email}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputPassword4">Location</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="inputPassword4"
                                        name="location"
                                        placeholder="Location"
                                        value={formValues.location}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="inputAddress">Address</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="inputAddress"
                                    name="address"
                                    placeholder="1234 Main St"
                                    value={formValues.address}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-12">
                                    <label htmlFor="inputCity">City</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="inputCity"
                                        name="city"
                                        placeholder="City"
                                        value={formValues.city}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                            <div className="input-group mb-5 mt-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">Profile</span>
                                </div>
                                <div className="custom-file">
                                    <input
                                        type="file"
                                        className="custom-file-input"
                                        id="inputGroupFile01"
                                        name="profile"
                                        onChange={handleInputChange}
                                    />
                                    <label className="custom-file-label" htmlFor="inputGroupFile01">
                                        {formValues.profile ? formValues.profile.name : 'Choose file'}
                                    </label>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary">
                                Add
                            </button>
                        </form>
                    </div>
                </section>
            </>
        </AdminLayout>
    );
}
