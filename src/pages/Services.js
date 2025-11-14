import React from "react";
import { Link } from "react-router-dom";
import sageBackground from '../assets/sage.jpg';

export default function Services() {
  return (
    <div
      className="min-h-screen bg-fixed bg-cover bg-center py-12"
      style={{ backgroundImage: `url(${sageBackground})` }}
    >
      <div className="flex justify-center w-full">
        <div className="w-full max-w-6xl px-4">

          {/* Hero Banner */}
          <header className="w-full h-64 md:h-96 flex items-center justify-center text-center mb-12">
            <div className="bg-pink-100/80 p-8 rounded-2xl max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#808c78]">
                Our Therapy Services
              </h1>
              <p className="text-lg md:text-xl mb-6 text-gray-800">
                Compassionate, evidence-based therapy for individuals, couples, and families.
              </p>
              <Link
                to="/contact"
                className="px-6 py-3 bg-[#808c78] hover:bg-[#6f7a65] text-white font-semibold rounded-xl shadow"
              >
                Book an Appointment
              </Link>
            </div>
          </header>

          {/* Section Title */}
          <section className="mt-12 flex justify-center">
            <div className="bg-white p-6 rounded-xl max-w-3xl w-full text-center shadow">
              <h2 className="text-3xl font-bold text-[#808c78]">
                What We Offer
              </h2>
            </div>
          </section>

          {/* Services Cards */}
          <section className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="bg-white/90 rounded-2xl shadow-lg p-6">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#808c78]">Individual Therapy</h3>
              <p className="text-gray-700 text-lg">
                Personalized one-on-one sessions to help clients navigate challenges such as anxiety, depression, stress, life transitions, and self-growth.
              </p>
            </div>

            <div className="bg-white/90 rounded-2xl shadow-lg p-6">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#808c78]">Couples Therapy</h3>
              <p className="text-gray-700 text-lg">
                Support for couples to improve communication, resolve conflicts, and strengthen relationships using evidence-based techniques.
              </p>
            </div>

            <div className="bg-white/90 rounded-2xl shadow-lg p-6">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#808c78]">Family Therapy</h3>
              <p className="text-gray-700 text-lg">
                Helping families navigate challenges, improve dynamics, and foster understanding and support across all members.
              </p>
            </div>

            <div className="bg-white/90 rounded-2xl shadow-lg p-6">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#808c78]">Teen & Young Adult Support</h3>
              <p className="text-gray-700 text-lg">
                Targeted support for teens and young adults dealing with anxiety, peer pressure, self-esteem, and academic stress.
              </p>
            </div>
          </section>

          {/* Booking Section */}
          <section id="booking" className="mt-12 mb-12 flex justify-center">
            <div className="w-full max-w-3xl bg-[#ffc0cb]/90 p-8 rounded-2xl shadow-lg text-center">
              <h2 className="text-3xl font-bold mb-6 text-[#808c78]">Ready to Get Started?</h2>
              <p className="text-gray-800 mb-8 text-lg">
                Choose a service and schedule your first session. We’re here to support you every step of the way.
              </p>
              <Link
                to="/contact"
                className="px-8 py-4 bg-[#808c78] hover:bg-[#6f7a65] text-white rounded-xl text-lg font-semibold shadow"
              >
                Book Now
              </Link>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
