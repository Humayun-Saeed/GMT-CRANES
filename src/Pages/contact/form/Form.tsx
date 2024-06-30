import React, { useState } from 'react';
import Input from "src/Components/Input/Input";
import TextareaComponent from "src/Components/TextAreaComponent/TextAreaComponent";
import emailjs from '@emailjs/browser';

export const Form = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    let tempErrors = {};
    if (!formData.firstName) tempErrors.firstName = 'First Name is required';
    if (!formData.lastName) tempErrors.lastName = 'Last Name is required';
    if (!formData.phoneNumber) tempErrors.phoneNumber = 'Phone Number is required';
    if (!formData.subject) tempErrors.subject = 'Subject is required';
    if (!formData.message) tempErrors.message = 'Message is required';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      const templateParams = {
        subject: formData.subject,
        message: `Name: ${formData.firstName} ${formData.lastName}\nPhone Number: ${formData.phoneNumber}\nSubject: ${formData.subject}\nMessage:${formData.message}`,
      };
  
      emailjs.send(
        'service_ncavqgh',
        'template_d4pk0vg',
        templateParams,
        'gSFSA_o23K3PEdAxl'
      ).then((response) => {
        setIsSubmitting(false);
        setFormData({
          firstName: '',
          lastName: '',
          phoneNumber: '',
          subject: '',
          message: '',
        });
      }).catch((err) => {
        setIsSubmitting(false);
      });
    }
  };
  
  return (
    <div className="w-full p-[4%] lg:ml-[2rem]">
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-[1.125rem]">
        <div className="flex flex-col items-start justify-between gap-[1rem] sm:flex-row">
          <div>
            <Input
              label="First Name"
              placeholder="Enter your First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
            {errors.firstName && <p className='text-[red] mt-4'>{errors.firstName}</p>}
          </div>
          <div>
            <Input
              label="Last Name"
              placeholder="Enter your Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
            {errors.lastName && <p className='text-[red] mt-4'>{errors.lastName}</p>}
          </div>
        </div>
        <div>
          <Input
            label="Phone Number"
            placeholder="Enter your Phone Number"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
          {errors.phoneNumber && <p className='text-[red] mt-4'>{errors.phoneNumber}</p>}
        </div>
        <div>
          <Input
            label="Subject"
            placeholder="Enter your Subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
          />
          {errors.subject && <p className='text-[red] mt-4'>{errors.subject}</p>}
        </div>
        <div>
          <TextareaComponent
            label="Message"
            className="w-full p-5 text-lg font-medium bg-transparent border rounded-lg outline-none resize-none border-main-color-4 text-main-color-4"
            rows={8}
            placeholder="Write your message here"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && <p className='text-[red] mt-4'>{errors.message}</p>}
        </div>
        <div className="mt-[0.1875rem]">
          {/* <label className="flex items-center gap-[0.5469rem] text-main-color-4">
            <input id="accept-checkbox" type="checkbox" className="w-[1.3125rem] h-[0.3125rem]" />
            <span className="text-lg font-medium">
              By filling out the form, I accept all
              <span> Privacy Policy</span> and
              <span>Terms</span> of the company.
            </span>
          </label> */}
        </div>
        <div className="mt-0.25rem">
          <button type="submit" className="rounded-full bg-[red] p-[1rem] h-[3.1875rem]" disabled={isSubmitting}>
            <p className="text-[white] font-bold">{isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}</p>
          </button>
        </div>
      </div>
    </form>
  </div>
  );
};
