import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import toast from 'react-hot-toast';
const ContactUs = () => {
  const [state, handleSubmitt] = useForm("xdknaarq");
  if (state.succeeded) {
      toast.success("form is submitted")
  }



  
  return (
    <div className="max-w-lg mx-auto p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold my-4">Contact Us</h2>
      <form onSubmit={handleSubmitt}  className="space-y-4 mt-10">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm `}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
          <input
            type="email"
            required
            id="email"
            name="email"
            className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm `}
          />
        </div>
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject:</label>
          <input
            type="text"
            id="subject"
            name="subject"
            required
            className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm `}
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message:</label>
          <textarea
            id="message"
            name="message"
            required
            rows="4"
            className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm `}
          />
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 bg-orange-500 text-white font-semibold rounded-md shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:opacity-50"
        >
            send Message
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
