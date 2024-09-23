"use client"; // For using Framer Motion with Next.js

import { motion } from "framer-motion";
import { useState } from "react";
import ContactInfoBox from "./ContactInfoBox";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("All fields are required!");
      return;
    }
    emailjs
      .send(
        "service_ko6sa4f", // Outlook Service ID
        "template_x0h4c85", // Template ID
        {
          from_name: formData.name,
          message: formData.message,
          reply_to: formData.email,
        },
        "ioiNsMrKNGNVuWaZb", // Public API Key
      )
      .then((response) => {
        // Refresh the page after successful submission
        window.location.reload();
      })
      .catch((err) => {
        alert("Failed to send email.");
      });
  };

  return (
    <motion.section
      id="contact"
      className="min-h-screen overflow-hidden bg-gradient-to-r from-[#87c3b6] via-[#a3e4d7] to-[#eecc99] py-24 lg:py-40 xl:py-24 2xl:py-32"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          {/* Left Section */}
          <motion.div
            className="w-full px-4 lg:w-7/12 xl:w-8/12"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="mb-12 rounded-lg bg-[#30336b] px-8 py-11 shadow-three sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
              <motion.h2
                className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Need Help? Open a Ticket
              </motion.h2>
              <motion.p
                className="mb-12 text-base font-medium text-body-color"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Our support team will get back to you ASAP via email.
              </motion.p>

              {/* Contact Form */}
              <form onSubmit={handleSubmit}>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your name"
                        required
                        className="w-full rounded-sm border border-stroke bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email"
                        required
                        className="w-full rounded-sm border border-stroke bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="message"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Message
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={5}
                        placeholder="Enter your Message"
                        required
                        className="w-full resize-none rounded-sm border border-stroke bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <button className="rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark">
                      Submit Ticket
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </motion.div>

          {/* Right Section (Contact Info Box) */}
          <motion.div
            className="w-full px-4 lg:w-5/12 xl:w-4/12"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <ContactInfoBox />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
