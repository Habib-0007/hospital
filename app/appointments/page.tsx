"use client";

import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

export default function AppointmentsPage() {
  const [appointment, setAppointment] = useState({
    patientName: "",
    doctorId: "",
    date: "",
    time: "",
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/appointments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(appointment),
      });
      if (!response.ok) throw new Error("Failed to book appointment");
      setAppointment({ patientName: "", doctorId: "", date: "", time: "" });
      toast({
        title: "Success",
        description: "Appointment booked successfully",
      });
    } catch (error) {
      console.error("Error:", error);
      toast({
        title: "Error",
        description: "Failed to book appointment",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200 p-6">
          <h2 className="text-2xl font-semibold mb-6">Book an Appointment</h2>
          <form
            onSubmit={handleSubmit}
            className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md"
          >
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="patientName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Patient Name
                </label>
                <Input
                  id="patientName"
                  value={appointment.patientName}
                  onChange={(e) =>
                    setAppointment({
                      ...appointment,
                      patientName: e.target.value,
                    })
                  }
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="doctorId"
                  className="block text-sm font-medium text-gray-700"
                >
                  Doctor
                </label>
                <Select
                  onValueChange={(value) =>
                    setAppointment({ ...appointment, doctorId: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a doctor" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">Dr. Smith</SelectItem>
                    <SelectItem value="2">Dr. Johnson</SelectItem>
                    <SelectItem value="3">Dr. Williams</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label
                  htmlFor="date"
                  className="block text-sm font-medium text-gray-700"
                >
                  Date
                </label>
                <Input
                  id="date"
                  type="date"
                  value={appointment.date}
                  onChange={(e) =>
                    setAppointment({ ...appointment, date: e.target.value })
                  }
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="time"
                  className="block text-sm font-medium text-gray-700"
                >
                  Time
                </label>
                <Input
                  id="time"
                  type="time"
                  value={appointment.time}
                  onChange={(e) =>
                    setAppointment({ ...appointment, time: e.target.value })
                  }
                  required
                />
              </div>
            </div>
            <Button type="submit" className="mt-6 w-full">
              Book Appointment
            </Button>
          </form>
        </main>
      </div>
    </div>
  );
}
