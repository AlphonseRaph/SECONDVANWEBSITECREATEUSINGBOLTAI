import { VanCard } from "@/components/VanCard";

const inventoryVans = [
  {
    title: "Luxury Sprinter Conversion",
    price: 85000,
    retailPrice: 95000,
    mileage: 45000,
    image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=800&h=400",
    year: 2020,
    make: "Mercedes-Benz",
  },
  {
    title: "Adventure Ready Camper",
    price: 65000,
    retailPrice: 72000,
    mileage: 38000,
    image: "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?auto=format&fit=crop&w=800&h=400",
    year: 2019,
    make: "Ford",
  },
  {
    title: "Custom Transit Conversion",
    price: 55000,
    retailPrice: 62000,
    mileage: 52000,
    image: "https://images.unsplash.com/photo-1516280906200-d4f8d16a6115?auto=format&fit=crop&w=800&h=400",
    year: 2018,
    make: "Ford",
  },
];

export default function Inventory() {
  return (
    <main className="min-h-screen py-16">
      <div className="container px-4 md:px-6">
        <h1 className="text-3xl font-bold mb-8">Our Inventory</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {inventoryVans.map((van, i) => (
            <VanCard key={i} {...van} />
          ))}
        </div>
      </div>
    </main>
  );
}