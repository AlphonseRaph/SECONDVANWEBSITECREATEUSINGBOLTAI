import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Financing() {
  return (
    <main className="min-h-screen py-16">
      <div className="container px-4 md:px-6">
        <h1 className="text-3xl font-bold mb-8">Financing Options</h1>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Credit Application</h2>
            <p className="text-muted-foreground mb-4">
              Start your journey today by filling out our simple credit application form.
              Get pre-approved and find out your financing options.
            </p>
            <Button className="w-full">Start Application</Button>
          </Card>
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Financing Calculator</h2>
            <p className="text-muted-foreground mb-4">
              Use our financing calculator to estimate your monthly payments and explore
              different financing terms.
            </p>
            <Button variant="outline" className="w-full">Calculate Payments</Button>
          </Card>
        </div>
      </div>
    </main>
  );
}