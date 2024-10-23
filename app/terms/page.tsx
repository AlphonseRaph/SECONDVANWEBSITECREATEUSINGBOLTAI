export default function Terms() {
  return (
    <main className="min-h-screen py-16">
      <div className="container px-4 md:px-6">
        <h1 className="text-3xl font-bold mb-8">Terms and Conditions</h1>
        
        <div className="prose max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
            <p className="text-muted-foreground">
              By accessing and using this website, you accept and agree to be bound by the terms and 
              provision of this agreement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Vehicle Information</h2>
            <p className="text-muted-foreground">
              All vehicle information provided on this website is believed to be accurate but is not 
              guaranteed. Buyers should verify all information before purchase.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Pricing and Payment</h2>
            <p className="text-muted-foreground">
              All prices are subject to change without notice. Payment terms and conditions will be 
              specified in the sales agreement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Privacy Policy</h2>
            <p className="text-muted-foreground">
              We respect your privacy and protect your personal information. See our Privacy Policy 
              for details on data collection and usage.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Warranty Information</h2>
            <p className="text-muted-foreground">
              Warranty terms vary by vehicle and are provided in writing at the time of purchase. 
              Extended warranty options may be available.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}