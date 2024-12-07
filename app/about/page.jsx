import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function AboutPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">About Lagos General Hospital</h1>

      <div className="mb-8">
        <Image
          src="/placeholder.svg?height=400&width=800"
          alt="Lagos General Hospital"
          width={800}
          height={400}
          className="rounded-lg"
        />
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Our History</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            Lagos General Hospital was founded in 1970 with a mission to provide
            high-quality healthcare services to the people of Lagos and beyond.
            Over the past five decades, we have grown from a small clinic to a
            comprehensive medical center, constantly evolving to meet the
            changing healthcare needs of our community.
          </p>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Our Mission</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            Our mission is to deliver exceptional, patient-centered healthcare
            with compassion and integrity. We strive to improve the health and
            well-being of our community through innovative medical practices,
            continuous learning, and a commitment to excellence in all aspects
            of our service.
          </p>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Our Values</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Patient-Centered Care: We put our patients first in everything we
              do.
            </li>
            <li>
              Excellence: We strive for the highest standards in medical care
              and service.
            </li>
            <li>
              Integrity: We conduct ourselves with honesty, transparency, and
              ethical behavior.
            </li>
            <li>
              Compassion: We treat every patient with kindness, empathy, and
              respect.
            </li>
            <li>
              Innovation: We embrace new technologies and methods to improve
              patient outcomes.
            </li>
            <li>
              Teamwork: We collaborate effectively to provide comprehensive
              care.
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Our Achievements</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Recognized as the Best Hospital in Lagos State for three
              consecutive years (2020-2022)
            </li>
            <li>
              Achieved Joint Commission International (JCI) accreditation in
              2019
            </li>
            <li>
              Performed the first successful heart transplant in Nigeria in 2021
            </li>
            <li>
              Established a state-of-the-art cancer treatment center in 2018
            </li>
            <li>
              Launched a telemedicine program in 2020, expanding access to
              healthcare across Nigeria
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
