import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'GB Caterers & Decorators',
  description: 'Your top choice for Pakistani cuisine and decor for all events!',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <header className="bg-gray-800 text-white p-4">
          <h1 className="text-3xl font-bold">GB Caterers & Decorators</h1>
          <nav className="mt-2 flex space-x-4">
            <a href="/" className="hover:underline">Home</a>
            <a href="/about" className="hover:underline">About</a>
            <a href="/menu" className="hover:underline">Menu</a>
            <a href="/contact" className="hover:underline">Contact</a>
          </nav>
        </header>
        <main className="container mx-auto px-4 py-6">{children}</main>
        <footer className="bg-gray-800 text-white text-center p-4 mt-6">
          <p>&copy; 2024 GB Caterers & Decorators. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
