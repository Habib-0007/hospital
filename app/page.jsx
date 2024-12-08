import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="text-center hero-section">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to Lagos General Hospital
        </h1>
        <p className="text-xl mb-8">
          Providing Quality Healthcare for Over 50 Years
        </p>
        <Button
          asChild
          size="lg"
          className="bg-main text-white border-[1px] border-main hover:bg-white hover:text-main transition-colors duration-200 ease-in justify-center items-center text-center"
        >
          <Link href="/appointments">Book an Appointment</Link>
        </Button>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-6">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            "Emergency Care",
            "General Medicine",
            "Pediatrics",
            "Obstetrics & Gynecology",
            "Surgery",
            "Cardiology",
          ].map((service) => (
            <Card key={service} className="rotate-[2deg] bg-main text-white">
              <CardHeader>
                <CardTitle>{service}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We provide top-notch {service.toLowerCase()} services with
                  state-of-the-art facilities.
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button asChild variant="outline">
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </section>

      <section className="bg-blue-50 p-8 rounded-lg">
        <h2 className="text-3xl font-semibold mb-6">Why Choose Us?</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <li className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Experienced and Qualified Doctors</span>
          </li>
          <li className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>State-of-the-Art Medical Facilities</span>
          </li>
          <li className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>24/7 Emergency Services</span>
          </li>
          <li className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Patient-Centered Care Approach</span>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-6">Latest News</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { title: "New MRI Machine Installed", date: "2023-11-15" },
            { title: "Free Health Camp Next Month", date: "2023-11-10" },
          ].map((news) => (
            <Card key={news.title}>
              <CardHeader>
                <CardTitle>{news.title}</CardTitle>
                <CardDescription>{news.date}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
