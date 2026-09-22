import type { Metadata } from 'next';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'Dmitrijs | Portfolio',
  description: 'Fullstack Developer Portfolio',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-stone-950 text-stone-300 font-sans selection:bg-amber-500/30 flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow pt-28 pb-10">{children}</div>
        <Footer />
      </body>
    </html>
  );
}