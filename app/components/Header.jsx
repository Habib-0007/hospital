import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          Lagos General Hospital
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="hover:text-blue-600">
                Home
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-blue-600">
                Services
              </Link>
            </li>
            <li>
              <Link href="/doctors" className="hover:text-blue-600">
                Doctors
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-blue-600">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-600">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex space-x-2">
          <Button asChild variant="outline">
            <Link href="/appointments">Book Appointment</Link>
          </Button>
          <Button asChild>
            <Link href="/patient-portal">Patient Portal</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
