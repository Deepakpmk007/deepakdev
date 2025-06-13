"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";

export default function Contact() {
  const router = useRouter();
  const container = useRef();
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
      <div className="md:w-[50%]">
        <p className="md:text-8xl text-lg font-bold text-slate-900">
          Let's learn more about <span>your</span> our project!
        </p>
        <div className="flex gap-3 text-2xl md:text-5xl text-teal-400  pt-10">
          <Link href="https://github.com/Deepakpmk007" target="block">
            <FiGithub className="hover:text-teal-600 transition-all" />
          </Link>

          <Link
            href="https://www.linkedin.com/in/deepak-k-9304b7255"
            target="block"
          >
            <FiLinkedin className="hover:text-teal-600 transition-all" />
          </Link>

          <Link href="https://instagram.com/deepakpmk__?igshid=MzNlNGNkZWQ4Mg==">
            <FiInstagram className="hover:text-teal-600 transition-all" />
          </Link>
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-5 md:w-[50%] h-full justify-center"
      >
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
          className="border border-gray-300 p-2 rounded-md outline-none"
        />

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
          className="border border-gray-300 p-2 rounded-md outline-none"
        />

        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          rows={2}
          required
          className="border border-gray-300 p-2 rounded-md outline-none"
        />

        <button
          type="submit"
          className="border bg-teal-400 border-gray-300 p-2 rounded-md outline-none"
        >
          Send Message
        </button>
      </form>
    </>
  );
}
