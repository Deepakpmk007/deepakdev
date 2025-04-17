"use client";

import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  useEffect(() => {
    if (submitted) {
      toast.success("Thank you for your message!");
    }
  }, [submitted]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Something went wrong. Try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Failed to send message.");
    }
  };

  return (
    <>
      <Toaster position="bottom-right" reverseOrder={false} />
      <section
        id="contact"
        className="h-screen flex flex-col md:flex-row px-6 py-52 md:px-20 md:py-30 bg-[#e9edc9]"
      >
        <h2 className="font-righteous text-2xl md:text-7xl md:w-[15vw]">
          Love to hear from you
        </h2>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-full md:px-20 py-10 gap-10"
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="outline-none border-b-2 border-black md:text-2xl focus:bg-transparent transition duration-200 mb-4 md:w-[600px] px-5 font-martian"
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="outline-none border-b-2 border-black md:text-2xl focus:bg-transparent transition duration-200 mb-4 md:w-[600px] px-5 font-martian"
          />

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows={1}
            required
            className="outline-none border-b-2 border-black md:text-2xl focus:bg-transparent transition duration-200 mb-4 md:w-[600px] px-5 font-martian"
          />

          <button
            type="submit"
            className="bg-[#ff6b6b] w-fit px-4 py-2 font-playwrite cursor-pointer"
          >
            Send Message
          </button>
        </form>
      </section>
    </>
  );
}
