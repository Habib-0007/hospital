import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Lagos General Hospital
            </h3>
            <p>
              Providing quality healthcare services to the people of Lagos and
              beyond.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="hover:text-blue-400">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/doctors" className="hover:text-blue-400">
                  Doctors
                </Link>
              </li>
              <li>
                <Link href="/appointments" className="hover:text-blue-400">
                  Book Appointment
                </Link>
              </li>
              <li>
                <Link href="/patient-portal" className="hover:text-blue-400">
                  Patient Portal
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p>123 Hospital Road, Lagos, Nigeria</p>
            <p>Phone: +234 123 456 7890</p>
            <p>Email: info@lagosgeneralhospital.com</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>
            &copy; {new Date().getFullYear()} Lagos General Hospital. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
