import React from "react";
import sageBackground from '../assets/sage.jpg';

export default function Contact() {
  return (
    <div
      className="min-h-screen bg-fixed bg-cover bg-center py-12"
      style={{ backgroundImage: `url(${sageBackground})` }}
    >
      <div className="flex justify-center w-full px-4">
        <div className="w-full max-w-3xl">

          <section className="flex justify-center mb-12">
            <div className="bg-white/90 p-6 rounded-xl shadow text-center">
              <h2 className="text-3xl font-bold text-[#808c78] mb-2">Contact Us</h2>
              <p className="text-gray-700">
                Have questions or want to schedule a session? Fill out the form below.
              </p>
            </div>
          </section>

          <section className="flex justify-center">
            <div className="bg-white/90 rounded-2xl shadow-lg p-8 w-full">
              <form className="flex flex-col gap-6">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#808c78]"
                  required
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#808c78]"
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#808c78]"
                />
                <select className="p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#808c78]">
                  <option>Preferred Session Type</option>
                  <option>Individual Therapy</option>
                  <option>Couples Therapy</option>
                  <option>Family Therapy</option>
                  <option>Teen & Young Adult Support</option>
                </select>
                <textarea
                  placeholder="Message"
                  rows={5}
                  className="p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#808c78]"
                  required
                ></textarea>
                <button
                  type="submit"
                  className="px-8 py-4 bg-[#808c78] hover:bg-[#6f7a65] text-white rounded-xl font-semibold text-lg shadow"
                >
                  Send Message
                </button>
              </form>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
