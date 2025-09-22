import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Testimonials from './components/Testimonials';
import { FaCircleArrowRight } from "react-icons/fa6";

// Single-file React component for a Logo Designer website
// Uses Tailwind CSS for styling. Default export is the top-level component.

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [enq, setEnq] = useState({ name: '', email: '', message: '' });
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(null);

  const services = [
    { id: 1, title: 'Brand Identity', desc: 'Full identity: logo, color, typography.' },
    { id: 2, title: 'Logo Refresh', desc: 'Modernize an existing logo.' },
    { id: 3, title: 'Mascot Design', desc: 'Character-driven logos for fun brands.' },
    { id: 4, title: 'Wordmark & Monogram', desc: 'Type-focused logo solutions.' },
    { id: 5, title: 'Packaging Marks', desc: 'Logo variants for packaging.' },
    { id: 6, title: 'Brand Guidelines', desc: 'Rules to keep your brand consistent.' }
  ];

  const portfolio = new Array(8).fill(0).map((_, i) => ({
    id: i,
    title: `Project ${i + 1}`,
    image: `https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=1200&q=60&ixid=${i}`
  }));

  function handleEnqSubmit(e) {
    e.preventDefault();
    // placeholder for submit logic
    alert(`Thanks ${enq.name || 'there'} — enquiry received!`);
    setEnq({ name: '', email: '', message: '' });
  }

  // Framer Motion variants for the staggered image animations
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  const heroImages = [
    'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=1200&q=60', // Modern logo mockup
    'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=1200&q=60', // Elegant logo on paper
    'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=1200&q=60', // Minimalist logo on business card
    'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=1200&q=60', // Colorful logo on screen
  ];


  return (
    <div className="min-h-screen bg-[#122118] text-gray-200">
      {/* NAVBAR */}
      <header className="sticky top-0 z-40 bg-[#122118]/60 backdrop-blur-md border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <LogoMark />
                <span className="font-semibold text-lg text-white">CreatorLogos</span>
              </div>
              <nav className="hidden md:flex gap-6 ml-8">
                <a href="#home" className="hover:text-indigo-400">Home</a>
                <a href="#services" className="hover:text-indigo-400">Services</a>
                <a href="#portfolio" className="hover:text-indigo-400">Portfolio</a>
                <a href="#testimonials" className="hover:text-indigo-400">Clients</a>
                <a href="#contact" className="hover:text-indigo-400">Contact</a>
              </nav>
            </div>

            <div className="flex items-center gap-4">
            <a href="#enquiry" className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 text-white font-medium shadow-sm hover:opacity-95 whitespace-nowrap">
              Book a Free Demo <FaCircleArrowRight />
            </a>
              <button
                onClick={() => setMenuOpen(v => !v)}
                className="md:hidden p-2 rounded-lg border border-gray-700 text-gray-200"
                aria-label="Menu"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-gray-700 bg-[#122118]/80">
            <div className="px-4 py-4 flex flex-col gap-3 text-white">
              <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
              <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
              <a href="#portfolio" onClick={() => setMenuOpen(false)}>Portfolio</a>
              <a href="#testimonials" onClick={() => setMenuOpen(false)}>Clients</a>
              <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <main>
        <section id="home" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }} className="text-4xl sm:text-5xl font-extrabold leading-tight text-white">
              Memorable logos. Distinctive brands.
            </motion.h1>
            <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }} className="mt-4 text-lg text-gray-400">
              We design logos that tell your story at a glance. Fast turnaround, strategic thinking and pixel-perfect execution.
            </motion.p>

            <div className="mt-6 flex gap-3 items-center">
              <a href="#portfolio" className="px-5 py-3 rounded-lg bg-transparent border border-gray-600 text-white shadow-sm hover:bg-gray-700">View work</a>
              <a href="#services" className="px-5 py-3 rounded-lg bg-indigo-600 text-white hover:opacity-95">Our services</a>
            </div>

            {/* Enquiry short form in hero */}
            <form id="enquiry" onSubmit={handleEnqSubmit} className="mt-8 bg-gray-900 rounded-xl p-4 max-w-md shadow">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input value={enq.name} onChange={e => setEnq({...enq, name: e.target.value})} required placeholder="Your name" className="px-3 py-2 border border-gray-700 rounded bg-gray-800 text-white placeholder-gray-400" />
                <input value={enq.email} onChange={e => setEnq({...enq, email: e.target.value})} required placeholder="Email" type="email" className="px-3 py-2 border border-gray-700 rounded bg-gray-800 text-white placeholder-gray-400" />
              </div>
              <textarea value={enq.message} onChange={e => setEnq({...enq, message: e.target.value})} placeholder="Tell us about your project" className="w-full mt-3 px-3 py-2 border border-gray-700 rounded bg-gray-800 text-white placeholder-gray-400" rows={3} />
              <div className="mt-3 flex items-center justify-between">
                <button type="submit" className="px-4 py-2 rounded-lg bg-indigo-600 text-white font-medium">Send enquiry</button>
                <small className="text-xs text-gray-500">Typical reply in 24 hours</small>
              </div>
            </form>
          </div>

          {/* Visual / mockup & Image Grid */}
          <div className="flex justify-center lg:justify-end">
            <motion.div
              initial="hidden"
              animate="show"
              variants={containerVariants}
              className="grid grid-cols-2 gap-4 w-full max-w-md"
            >
              {/* Main Mockup - now part of the grid for consistent animation */}
              <motion.div
                variants={itemVariants}
                className="col-span-2 rounded-3xl p-6 shadow-lg h-64 flex flex-col justify-end"
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=1200&q=60')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
              >
                <div className="mt-auto text-sm text-white bg-black/30 rounded p-1 text-center">Clean, flexible & brand-led.</div>
              </motion.div>

              {/* Smaller Images */}
              {heroImages.map((src, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="w-full h-32 rounded-xl shadow-md bg-cover bg-center"
                  style={{ backgroundImage: `url(${src})` }}
                />
              ))}
            </motion.div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="py-12 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white">Our Services</h2>
            <p className="mt-2 text-gray-400">From single-logo packages to full brand systems.</p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map(s => (
                <motion.article key={s.id} whileHover={{ y: -6 }} className="p-6 rounded-xl border border-gray-700 shadow-sm bg-gray-800">
                  <h3 className="font-semibold text-lg text-white">{s.title}</h3>
                  <p className="mt-2 text-sm text-gray-400">{s.desc}</p>
                  <div className="mt-4">
                    <button className="text-indigo-400 font-medium">Learn more →</button>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* PORTFOLIO */}
        <section id="portfolio" className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">Portfolio</h2>
              <p className="text-gray-500 hidden sm:block">Selected identity and logo work.</p>
            </div>

            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {portfolio.map(p => (
                <button key={p.id} onClick={() => { setActiveImage(p.image); setGalleryOpen(true); }} className="group rounded-lg overflow-hidden">
                  <div className="w-full h-40 bg-gray-100 bg-cover bg-center" style={{ backgroundImage: `url(${p.image})` }} />
                  <div className="mt-2 text-left text-sm font-medium text-gray-200">{p.title}</div>
                </button>
              ))}
            </div>

            {/* Gallery modal */}
            {galleryOpen && (
              <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
                <div className="max-w-3xl w-full">
                  <button onClick={() => setGalleryOpen(false)} className="mb-4 text-white">Close ✕</button>
                  <img src={activeImage} alt="project" className="w-full rounded-lg shadow-lg" />
                </div>
              </div>
            )}

          </div>
        </section>

        {/* Testimonials */}
        <Testimonials />

        {/* CONTACT & FOOTER */}
        <footer id="contact" className="py-12 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-white">Get in touch</h3>
              <p className="mt-2 text-gray-400">We’d love to hear about your project. Fill the form or reach out directly.</p>

              <div className="mt-4 space-y-2 text-sm text-gray-400">
                <div>📍 102 Creative Lane, Mumbai, India</div>
                <div>✉️ hello@creatorlogos.com</div>
                <div>📞 +91 98765 43210</div>
              </div>
            </div>

            <div className="md:col-span-2">
              <form onSubmit={handleEnqSubmit} className="bg-gray-800 p-6 rounded-xl shadow grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input required placeholder="Full name" value={enq.name} onChange={e => setEnq({...enq, name: e.target.value})} className="px-3 py-2 border border-gray-700 rounded bg-gray-800 text-white placeholder-gray-400" />
                <input required placeholder="Email" value={enq.email} onChange={e => setEnq({...enq, email: e.target.value})} className="px-3 py-2 border border-gray-700 rounded bg-gray-800 text-white placeholder-gray-400" />
                <input placeholder="Company (optional)" className="px-3 py-2 border border-gray-700 rounded bg-gray-800 text-white placeholder-gray-400 sm:col-span-2" />
                <textarea placeholder="Describe your project" value={enq.message} onChange={e => setEnq({...enq, message: e.target.value})} className="px-3 py-2 border border-gray-700 rounded bg-gray-800 text-white placeholder-gray-400 sm:col-span-2" rows={4} />
                <div className="sm:col-span-2 flex items-center justify-between">
                  <button type="submit" className="px-4 py-2 rounded-lg bg-indigo-600 text-white">Send message</button>
                  <small className="text-xs text-gray-500">Or email us at hello@creatorlogos.com</small>
                </div>
              </form>
            </div>

            <div className="md:col-span-3 mt-6 text-center text-xs text-white-500">© {new Date().getFullYear()} CreatorLogos — Crafted with ❤️</div>
          </div>
        </footer>
      </main>

      {/* Mobile sticky buttons */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 sm:hidden z-50 flex gap-3">
        <a href="#enquiry" className="px-4 py-3 bg-indigo-600 text-white rounded-full shadow-lg">Enq now</a>
      </div>

      <div className="fixed bottom-6 right-4 sm:hidden z-50 flex flex-col gap-3">
        <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="px-4 py-3 bg-green-500 text-white rounded-full shadow-lg">WhatsApp</a>
        <a href="tel:+919876543210" className="px-4 py-3 bg-gray-900 text-white rounded-full shadow-lg">Call</a>
      </div>

    </div>
  );
}

function LogoMark() {
  return (
    <svg width="40" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <rect width="48" height="48" rx="10" fill="url(#g)" />
      <path d="M14 34L24 14L34 34H14Z" fill="white" opacity="0.95" />
      <defs>
        <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="#6366F1" />
          <stop offset="1" stopColor="#06B6D4" />
        </linearGradient>
      </defs>
    </svg>
  );
}