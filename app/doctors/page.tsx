"use client";

import React, { useState, useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

interface Doctor {
  _id: string;
  name: string;
  specialty: string;
  available: boolean;
}

export default function DoctorsPage() {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  // const { toast } = useToast();

  useEffect(() => {
    fetchDoctors();
  }, []);

  const fetchDoctors = async () => {
    try {
      const response = await fetch("/api/doctors");
      if (!response.ok) throw new Error("Failed to fetch doctors");
      const data = await response.json();
      setDoctors(data);
    } catch (error) {
      console.error("Error:", error);
      // toast({
      //   title: "Error",
      //   description: "Failed to fetch doctors",
      //   variant: "destructive",
      // });
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200 p-6">
          <h2 className="text-2xl font-semibold mb-6">Our Doctors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {doctors.map((doctor) => (
              <Card key={doctor._id}>
                <CardHeader>
                  <CardTitle>{doctor.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{doctor.specialty}</p>
                  <p
                    className={`mt-2 ${
                      doctor.available ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {doctor.available ? "Available" : "Not Available"}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
