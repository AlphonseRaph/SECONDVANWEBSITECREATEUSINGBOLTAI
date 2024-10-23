import { Card } from "@/components/ui/card";
import { Shield, Truck, Users, Award } from "lucide-react";

export default function About() {
  return (
    <main className="min-h-screen py-16">
      <div className="container px-4 md:px-6">
        <h1 className="text-3xl font-bold mb-8">About VanMarket</h1>
        
        <div className="prose max-w-none mb-12">
          <p className="text-lg text-muted-foreground">
            VanMarket is your premier destination for high-quality conversion vans. 
            With years of experience in the automotive industry, we pride ourselves 
            on offering exceptional vehicles and outstanding customer service.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            {
              icon: Shield,
              title: "Quality Assured",
              description: "Every vehicle undergoes rigorous inspection",
            },
            {
              icon: Truck,
              title: "Nationwide Delivery",
              description: "Convenient delivery options across the country",
            },
            {
              icon: Users,
              title: "Expert Team",
              description: "Dedicated professionals at your service",
            },
            {
              icon: Award,
              title: "Top Rated",
              description: "Consistently high customer satisfaction",
            },
          ].map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="p-6">
                <Icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-muted-foreground mb-6">
              To provide our customers with the highest quality conversion vans 
              while delivering exceptional service and value. We strive to make 
              the vehicle buying process transparent, enjoyable, and rewarding.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Values</h2>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Integrity in every transaction</li>
              <li>• Customer satisfaction as our priority</li>
              <li>• Quality vehicles at fair prices</li>
              <li>• Transparent business practices</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}