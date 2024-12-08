import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className={`bg-white shadow-[0px_2px_2px_rgba(0,0,0,0.1)]`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-main">
          Lagos General Hospital
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="hover:text-main">
                Home
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-main">
                Services
              </Link>
            </li>
            <li>
              <Link href="/doctors" className="hover:text-main">
                Doctors
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-main">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-main">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex space-x-2">
          <Button
            asChild
            variant="outline"
            className="bg-main text-white border-[1px] border-main hover:bg-white hover:text-main transition-colors duration-200 ease-in justify-center items-center text-center"
          >
            <Link href="/appointments">Book Appointment</Link>
          </Button>
          <Button
            asChild
            className="bg-white text-main hover:bg-main hover:text-white border-[1px] border-main transition-colors duration-200 ease-in justify-center items-center text-center"
          >
            <Link href="/patient-portal">Patient Portal</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
