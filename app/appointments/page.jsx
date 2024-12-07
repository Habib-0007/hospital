"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function AppointmentsPage() {
  const [date, setDate] = (useState < Date) | (undefined > new Date());
  const [doctor, setDoctor] = useState("");
  const [service, setService] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send this data to your backend
    console.log("Appointment booked:", { date, doctor, service });
    alert("Appointment booked successfully!");
  };

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">Book an Appointment</h1>
      <Card>
        <CardHeader>
          <CardTitle>Appointment Details</CardTitle>
          <CardDescription>
            Please fill in the details to book your appointment.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-2 text-sm font-medium">
                Select Date
              </label>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium">
                Select Doctor
              </label>
              <Select onValueChange={setDoctor}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a doctor" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="dr-okafor">Dr. Chidi Okafor</SelectItem>
                  <SelectItem value="dr-bello">Dr. Amina Bello</SelectItem>
                  <SelectItem value="dr-adeleke">
                    Dr. Oluwaseun Adeleke
                  </SelectItem>
                  <SelectItem value="dr-nwosu">Dr. Emeka Nwosu</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium">
                Select Service
              </label>
              <Select onValueChange={setService}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="general-checkup">
                    General Check-up
                  </SelectItem>
                  <SelectItem value="cardiology">
                    Cardiology Consultation
                  </SelectItem>
                  <SelectItem value="pediatrics">
                    Pediatric Consultation
                  </SelectItem>
                  <SelectItem value="obgyn">OB-GYN Consultation</SelectItem>
                  <SelectItem value="surgery">Surgical Consultation</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button type="submit">Book Appointment</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
