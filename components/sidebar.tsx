"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  { label: "T-shirt", href: "/t-shirt" },
  { label: "Jacket", href: "/jacket" },
  { label: "Topi", href: "/topi" },
  { label: "Backpack", href: "/backpack" },
  { label: "Kemeja", href: "/kemeja" },
  { label: "Celana", href: "/celana" },
  { label: "Long Sleeve", href: "/longsleeve" },
  { label: "T-shirt Kids", href: "/t-shirtkids" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-gray-400 min-h-screen py-8">
      <nav className="flex flex-col gap-6 px-6">
        {menuItems.map(({ label, href }) => (
          <Link
            key={href}
            href={href}
            className={`text-lg font-semibold transition-colors ${
              pathname === href ? "text-white" : "text-gray-100 hover:text-white"
            }`}
          >
            {label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}