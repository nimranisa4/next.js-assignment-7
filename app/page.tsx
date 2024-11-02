// app/page.tsx
import React from 'react';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gray-800 h-screen text-white flex flex-col justify-center items-center">
        <h1 className="text-5xl font-bold">Welcome to GB Caterers & Decorators!!!</h1>
        <p className="text-lg mt-4">Where flavor meets elegance.</p>
        <button className="mt-8 px-6 py-2 bg-teal-500 text-white rounded-lg">
          Learn More
        </button>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-100">
        <h2 className="text-3xl font-bold text-center">Our Services</h2>
        <div className="flex justify-around mt-8">
          <div className="text-center">
            <h3 className="mt-4 text-xl font-semibold">Catering</h3>
            <p>Delicious menus for all occasions.</p>
          </div>
          <div className="text-center">
            <h3 className="mt-4 text-xl font-semibold">Decoration</h3>
            <p>Elegant and personalized event decor.</p>
          </div>
        </div>
      </section>

      {/* Popular Dishes Section */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center">Popular Dishes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
          <div className="text-center">
            <h3 className="mt-4 font-semibold">Chicken Biryani</h3>
          </div>
          <div className="text-center">
            <h3 className="mt-4 font-semibold">Seekh Kebab</h3>
          </div>
          <div className="text-center">
            <h3 className="mt-4 font-semibold">Nihari</h3>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-100">
        <h2 className="text-3xl font-bold text-center">Customer Reviews</h2>
        <div className="flex justify-around mt-8">
          <div className="max-w-md text-center">
            <p className="italic">
              "Amazing food and beautiful decor. Our event was a success!"
            </p>
            <p className="font-bold mt-4">- Sarah K.</p>
          </div>
          <div className="max-w-md text-center">
            <p className="italic">
              "The catering was outstanding, and the decorations were stunning!"
            </p>
            <p className="font-bold mt-4">- Ali R.</p>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center">Get in Touch</h2>
        <div className="mt-8 text-center">
          <p>Call us: Call us: 03002901901</p>
          <p>Call us: Call us: 03002601601</p>
          <p>Email: gbcaterersdecorators786@gmail.com</p>
        </div>
      </section>
    </>
  );
}
