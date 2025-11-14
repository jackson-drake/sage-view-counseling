import React from "react";
import bekaImage from '../assets/beka.JPEG';
import sageBackground from '../assets/sage.jpg';

export default function Home() {
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
                Find Peace & Healing at Sage View Counseling
              </h1>
              <p className="text-lg md:text-xl mb-6 text-gray-800">
                Compassionate therapy for individuals, couples & families.
              </p>
              <a
                href="#booking"
                className="px-6 py-3 bg-[#808c78] hover:bg-[#6f7a65] text-white font-semibold rounded-xl shadow"
              >
                Book an Appointment
              </a>
            </div>
          </header>

          {/* Section Title */}
          <section className="flex justify-center mb-12">
            <div className="bg-white p-6 rounded-xl max-w-3xl w-full text-center shadow">
              <h2 className="text-3xl font-bold text-[#808c78]">
                Meet Your Therapist
              </h2>
            </div>
          </section>

          {/* Therapist Card - single column always */}
          <section id="therapists" className="flex justify-center mb-12">
            <div className="bg-white/90 rounded-2xl shadow-lg p-6 max-w-3xl flex flex-col items-center">
              <img
                src={bekaImage}
                alt="Beka Harrop"
                className="w-full h-auto max-h-[36rem] object-contain shadow-lg rounded-2xl mb-6"
              />
              <div className="text-center">
                <h3 className="text-3xl md:text-4xl font-bold mb-4 text-[#808c78]">
                  Beka Harrop, Licensed Clinical Social Worker
                </h3>
                <p className="text-gray-700 mb-6 text-lg">
                  Hi, I’m Beka! I graduated from the University of Utah’s Masters of Social Work program in May 2022 after previously attending BYU-Idaho studying health science and psychology. I help teenagers and adults live fulfilling lives, navigating issues like relationships, depression, anxiety, grief, stress, and life transitions.
                  <br /><br />
                  In my free time, you can find me cooking, baking, hosting girls’ nights, or spending time with my family.
                </p>
                <a href="#booking" className="text-[#808c78] font-semibold hover:underline text-lg md:text-xl">
                  Book with Beka →
                </a>
              </div>
            </div>
          </section>

          {/* Booking Section */}
          <section id="booking" className="flex justify-center mb-12">
            <div className="w-full max-w-3xl bg-[#ffc0cb]/90 p-8 rounded-2xl shadow-lg text-center">
              <h2 className="text-3xl font-bold mb-6 text-[#808c78]">Ready to Get Started?</h2>
              <p className="text-gray-800 mb-8 text-lg">
                Choose a therapist and schedule your first session. We’re here to support you every step of the way.
              </p>
              <a
                href="/contact"
                className="px-8 py-4 bg-[#808c78] hover:bg-[#6f7a65] text-white rounded-xl text-lg font-semibold shadow"
              >
                Book Now
              </a>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
