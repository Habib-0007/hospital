import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <header className="p-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-800">
          Hospital Management System
        </h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link
                href="/patient-portal"
                className="text-blue-600 hover:text-blue-800"
              >
                Patient Portal
              </Link>
            </li>
            <li>
              <Link
                href="/doctors"
                className="text-blue-600 hover:text-blue-800"
              >
                Our Doctors
              </Link>
            </li>
            <li>
              <Link
                href="/appointments"
                className="text-blue-600 hover:text-blue-800"
              >
                Book Appointment
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="container mx-auto px-6 py-12 text-center">
        <h2 className="text-4xl font-bold text-blue-900 mb-4">
          Welcome to Our Hospital
        </h2>
        <p className="text-xl text-gray-700 mb-8">
          Providing quality healthcare with compassion and expertise.
        </p>
        <div className="flex justify-center space-x-4">
          <Button asChild>
            <Link href="/appointments">Book an Appointment</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/patient-portal">Patient Portal</Link>
          </Button>
        </div>
      </main>
      <footer className="bg-blue-800 text-white py-6 mt-12">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2023 Hospital Management System. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
