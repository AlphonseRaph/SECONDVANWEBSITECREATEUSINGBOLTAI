import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Conversion Van Marketplace',
  description: 'Find your perfect conversion van - Browse our selection of high-quality vans',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-16 items-center">
            <Link href="/" className="font-bold text-xl mr-8">VanMarket</Link>
            <nav className="hidden md:flex gap-6">
              <Link href="/" className="hover:text-primary transition">Home</Link>
              <Link href="/inventory" className="hover:text-primary transition">Inventory</Link>
              <Link href="/financing" className="hover:text-primary transition">Financing</Link>
              <Link href="/contact" className="hover:text-primary transition">Contact</Link>
            </nav>
          </div>
        </header>
        {children}
        <footer className="border-t py-12 bg-secondary/50">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="font-bold mb-4">VanMarket</h3>
                <p className="text-sm text-muted-foreground">
                  Your trusted source for quality conversion vans.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/inventory" className="hover:text-primary transition">Inventory</Link></li>
                  <li><Link href="/financing" className="hover:text-primary transition">Financing</Link></li>
                  <li><Link href="/about" className="hover:text-primary transition">About Us</Link></li>
                  <li><Link href="/contact" className="hover:text-primary transition">Contact</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Support</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/faq" className="hover:text-primary transition">FAQ</Link></li>
                  <li><Link href="/shipping" className="hover:text-primary transition">Shipping</Link></li>
                  <li><Link href="/returns" className="hover:text-primary transition">Returns</Link></li>
                  <li><Link href="/terms" className="hover:text-primary transition">Terms</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Contact</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/contact" className="hover:text-primary transition">Email Us</Link></li>
                  <li>Call: (555) 123-4567</li>
                  <li><Link href="/location" className="hover:text-primary transition">Location</Link></li>
                  <li><Link href="/dealers" className="hover:text-primary transition">Dealers</Link></li>
                </ul>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
              © {new Date().getFullYear()} VanMarket. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}