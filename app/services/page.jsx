import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const services = [
  {
    name: "Emergency Care",
    description: "24/7 emergency medical services for critical conditions.",
    details: [
      "Trauma care",
      "Cardiac emergencies",
      "Stroke treatment",
      "Critical care",
    ],
  },
  {
    name: "General Medicine",
    description:
      "Comprehensive care for adults, including preventive services and management of chronic conditions.",
    details: [
      "Annual check-ups",
      "Chronic disease management",
      "Vaccinations",
      "Health screenings",
    ],
  },
  {
    name: "Pediatrics",
    description:
      "Specialized medical care for infants, children, and adolescents.",
    details: [
      "Well-child visits",
      "Immunizations",
      "Developmental assessments",
      "Pediatric consultations",
    ],
  },
  {
    name: "Obstetrics & Gynecology",
    description:
      "Comprehensive care for women's health, including pregnancy and reproductive health.",
    details: [
      "Prenatal care",
      "Childbirth services",
      "Gynecological exams",
      "Family planning",
    ],
  },
  {
    name: "Surgery",
    description: "Advanced surgical procedures across various specialties.",
    details: [
      "General surgery",
      "Orthopedic surgery",
      "Neurosurgery",
      "Minimally invasive procedures",
    ],
  },
  {
    name: "Cardiology",
    description:
      "Diagnosis and treatment of heart and cardiovascular system disorders.",
    details: [
      "Cardiac assessments",
      "ECG and stress tests",
      "Heart disease management",
      "Cardiac rehabilitation",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service) => (
          <Card key={service.name}>
            <CardHeader>
              <CardTitle>{service.name}</CardTitle>
              <CardDescription>{service.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5">
                {service.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
