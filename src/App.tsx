import React from 'react';
import { CartProvider } from './context/CartContext';
import { Navbar } from './components/Navbar';
import { Hero3D } from './components/Hero3D';
import { MenuExplorer } from './components/MenuExplorer';
import { CartDrawer } from './components/CartDrawer';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-[#0C0804] text-[#A39F98] font-inter selection:bg-[#D4A373] selection:text-[#0C0804]">
        <Navbar />
        <CartDrawer />
        
        <main>
          <Hero3D />
          <MenuExplorer />
          <LocationSection />
        </main>

        <Footer />
      </div>
    </CartProvider>
  );
}