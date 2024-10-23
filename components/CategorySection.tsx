import { Card } from "@/components/ui/card";
import { Truck, Car, Home, Coffee } from "lucide-react";
import Link from "next/link";

const categories = [
  { name: "Food Trucks", icon: Coffee, href: "/inventory?category=food-trucks" },
  { name: "Camper Vans", icon: Home, href: "/inventory?category=camper-vans" },
  { name: "Normal Cars", icon: Car, href: "/inventory?category=cars" },
  { name: "Containers", icon: Truck, href: "/inventory?category=containers" },
];

export function CategorySection() {
  return (
    <section className="py-12 bg-secondary/50">
      <div className="container px-4 md:px-6">
        <h2 className="text-2xl font-bold text-center mb-8">Browse By Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Link href={category.href} key={category.name}>
                <Card className="p-6 hover:shadow-lg transition cursor-pointer">
                  <div className="flex flex-col items-center space-y-2">
                    <Icon className="h-8 w-8 text-primary" />
                    <span className="font-medium">{category.name}</span>
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}