// app/contact/page.tsx
import React from 'react';

export default function Contact() {
  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold text-center">Contact Us</h1>
      <p className="mt-4 text-lg text-center">
        We'd love to hear from you! Whether you have a question about our services, need a quote, or just want to say hello, feel free to reach out.
      </p>
      
      {/* Contact Form */}
      <form className="mt-8 max-w-lg mx-auto">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            type="text" 
            id="name" 
            required 
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            type="email" 
            id="email" 
            required 
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            id="message" 
            rows={4} 
            required 
          />
        </div>

        <div className="flex items-center justify-center">
          <button 
            type="submit" 
            className="bg-teal-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Send Message
          </button>
        </div>
      </form>

      {/* Additional Contact Information */}
      <h2 className="mt-8 text-3xl font-bold text-center">Our Contact Information</h2>
      <p className="mt-4 text-lg text-center">Call us: 03002901901</p>
      <p className="mt-4 text-lg text-center">Call us: 03002601601</p>
      <p className="mt-2 text-lg text-center">Email: gbcaterersdecorators786@gmail.com</p>
      <p className="mt-2 text-lg text-center">Location: DHA phase 2 , karachi , Pakistan</p>

      {/* Social Media Links */}
      <h2 className="mt-8 text-3xl font-bold text-center">Follow Us</h2>
      <div className="flex justify-center space-x-4 mt-4">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600">
          Facebook
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-purple-600">
          Instagram
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400">
          Twitter
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-purple-400">
          youtube
        </a>
      </div>
    </div>
  );
}
