import {
  Home,
  Users,
  UserPlus,
  Calendar,
  ClipboardList,
  FileText,
  Settings,
} from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

const menuItems = [
  { icon: Home, text: "Home", href: "/" },
  { icon: Users, text: "Patients", href: "/patients" },
  { icon: UserPlus, text: "Doctors", href: "/doctors" },
  { icon: Calendar, text: "Appointments", href: "/appointments" },
  { icon: ClipboardList, text: "Patient Portal", href: "/patient-portal" },
  { icon: FileText, text: "Medical Records", href: "/records" },
  { icon: Settings, text: "Settings", href: "/settings" },
];

const Sidebar: React.FC = () => {
  return (
    <aside className="bg-white w-64 min-h-screen p-4 shadow-md">
      <nav className="space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
          >
            <item.icon className="w-5 h-5 text-gray-500" />
            <span className="text-gray-700">{item.text}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
