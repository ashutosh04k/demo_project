import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import S1 from '../assets/marketingassets/S1.png';
import S2 from '../assets/marketingassets/S2.png';
import S3 from '../assets/marketingassets/S3.png';


const testimonials = [
  {
    id: 1,
    image: S1,
    label: '25% des noyés ont +65 ans',
  },
  {
    id: 2,
    image: S2,
    label: '44% des noyés chez les -6 ans',
  },
  {
    id: 3,
    image: S3,
    label: '35% des noyés ont < 25 ans',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((current + 1) % testimonials.length);
  const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="py-10 bg-[#0b1f17] text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Marketing Assets</h2>
        <p className="text-center text-gray-300 mb-10">Designing assets that amplify your message and drive results.</p>

        <div className="relative bg-white rounded-3xl p-6 md:p-12 shadow-lg">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            {/* Left image */}
            <img
              src={testimonials[(current + testimonials.length - 1) % testimonials.length].image}
              alt="Previous"
              className="hidden md:block w-1/4 rounded-lg shadow-md opacity-80"
            />

            {/* Center (main) image */}
            <motion.img
              key={testimonials[current].id}
              src={testimonials[current].image}
              alt="Main"
              className="w-1/2 md:w-1/4 rounded-lg shadow-xl z-10"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            />

            {/* Right image */}
            <img
              src={testimonials[(current + 1) % testimonials.length].image}
              alt="Next"
              className="hidden md:block w-1/4 rounded-lg shadow-md opacity-80"
            />
          </div>

          <div className="text-center mt-6 text-gray-700">
            <p className="text-sm">{testimonials[current].label}</p>
          </div>

          {/* Arrows */}
          <div className="absolute bottom-6 right-6 flex space-x-4">
            <button onClick={prev} className="text-gray-800 hover:text-green-600">
              <FaArrowLeft size={20} />
            </button>
            <button onClick={next} className="text-gray-800 hover:text-green-600">
              <FaArrowRight size={20} />
            </button>
          </div>
        </div>

        <p className="text-center text-sm text-gray-400 mt-4">{current + 1} / {testimonials.length}</p>
      </div>
    </section>
  );
}
