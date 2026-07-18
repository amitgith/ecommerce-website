import React from "react";
import {
  ShoppingBag,
  Users,
  ShieldCheck,
  Truck,
  Star,
  ArrowRight,
} from "lucide-react";
import { NavLink } from "react-router";

const About = () => {
  const reviews = [
    {
      name: "John Carter",
      review:
        "SkyMart offers an amazing shopping experience. Fast delivery and excellent product quality!",
    },
    {
      name: "Priya Singh",
      review:
        "The customer support is outstanding. I received my order on time and loved the service.",
    },
    {
      name: "Rahul Verma",
      review:
        "Affordable prices, secure payments, and a smooth shopping experience. Highly recommended!",
    },
  ];

  const team = [
    {
      name: "Amit Kumar Sharma",
      role: "Founder & CEO",
    },
    {
      name: "Sanjeet Sharma",
      role: "Operations Manager",
    },
    {
      name: "Rahul Sharma",
      role: "Lead Developer",
    },
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-indigo-600 text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center">
          <ShoppingBag size={55} className="mx-auto mb-5" />

          <h1 className="text-5xl font-bold">About SkyMart</h1>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-indigo-100">
            SkyMart is your trusted online shopping destination, delivering
            quality products, affordable prices, and exceptional customer
            service—all in one place.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-4xl font-bold text-gray-800">Our Story</h2>

            <p className="text-lg leading-8 text-gray-600">
              SkyMart was created with one simple goal—to make online shopping
              easy, reliable, and enjoyable for everyone. We carefully select
              quality products and focus on providing a seamless shopping
              experience with secure payments, quick delivery, and dedicated
              customer support.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow-lg">
            <h3 className="mb-6 text-2xl font-semibold text-gray-800">
              Why Customers Choose Us
            </h3>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Truck className="text-indigo-600" />
                <p>Fast & Reliable Delivery</p>
              </div>

              <div className="flex items-center gap-4">
                <ShieldCheck className="text-indigo-600" />
                <p>100% Secure Payments</p>
              </div>

              <div className="flex items-center gap-4">
                <Users className="text-indigo-600" />
                <p>Trusted by Thousands of Customers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-800">
            What We Stand For
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our mission is to create a shopping platform where quality,
            affordability, trust, and customer satisfaction come together. We
            continuously innovate to provide the best online shopping experience
            for every customer.
          </p>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="mb-12 text-center text-4xl font-bold text-gray-800">
          Customer Reviews
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="rounded-xl bg-white p-6 shadow-md transition hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-3 flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>

              <p className="text-gray-600">"{review.review}"</p>

              <h4 className="mt-5 font-semibold text-gray-800">
                {review.name}
              </h4>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-12 text-center text-4xl font-bold text-gray-800">
            Meet the Team
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            {team.map((member, index) => (
              <div
                key={index}
                className="rounded-xl bg-gray-50 p-8 text-center shadow-md"
              >
                <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-indigo-600 text-3xl font-bold text-white">
                  {member.name.charAt(0)}
                </div>

                <h3 className="text-xl font-semibold">{member.name}</h3>

                <p className="mt-2 text-gray-500">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-indigo-600 py-20 text-center text-white">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-4xl font-bold">Ready to Shop with SkyMart?</h2>

          <p className="mt-5 text-lg text-indigo-100">
            Discover thousands of quality products at unbeatable prices and
            enjoy a secure shopping experience.
          </p>

          <button className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3 font-semibold text-indigo-600 transition hover:bg-gray-100 cursor-pointer">
            <NavLink to={'/shop'} >Start Shopping</NavLink>
            <ArrowRight size={18} />
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
