import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const doctors = [
  {
    name: "Dr. Chidi Okafor",
    specialty: "Cardiology",
    image: "/placeholder.svg?height=200&width=200",
    bio: "Dr. Okafor is a renowned cardiologist with over 15 years of experience in treating heart conditions.",
  },
  {
    name: "Dr. Amina Bello",
    specialty: "Pediatrics",
    image: "/placeholder.svg?height=200&width=200",
    bio: "Dr. Bello specializes in pediatric care and has a passion for ensuring the health and well-being of children.",
  },
  {
    name: "Dr. Oluwaseun Adeleke",
    specialty: "Obstetrics & Gynecology",
    image: "/placeholder.svg?height=200&width=200",
    bio: "Dr. Adeleke is an experienced OB-GYN dedicated to providing comprehensive care for women's health.",
  },
  {
    name: "Dr. Emeka Nwosu",
    specialty: "General Surgery",
    image: "/placeholder.svg?height=200&width=200",
    bio: "Dr. Nwosu is a skilled surgeon with expertise in both traditional and minimally invasive surgical techniques.",
  },
];

export default function DoctorsPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">Our Doctors</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {doctors.map((doctor) => (
          <Card key={doctor.name}>
            <CardHeader>
              <Image
                src={doctor.image}
                alt={doctor.name}
                width={200}
                height={200}
                className="rounded-full mx-auto"
              />
              <CardTitle className="text-center mt-4">{doctor.name}</CardTitle>
              <CardDescription className="text-center">
                {doctor.specialty}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>{doctor.bio}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
