import React, { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import CartDrawer from './CartDrawer';
import Sidebar from './admin/Sidebar';

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin');

  if (isAdmin) {
    return (
      <div className="flex min-h-screen bg-gray-50">
        <Sidebar />
        <main className="flex-1 overflow-auto">
          {children}
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <CartDrawer />
      <main className="flex-1">
        {children}
      </main>
      <footer className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
           <div>
             <h3 className="font-serif text-2xl mb-6">Madoleko</h3>
             <p className="text-gray-400 text-sm leading-relaxed">
               Refining luxury for the modern age. <br/>
               Exquisite craftsmanship, timeless design.
             </p>
           </div>
           <div>
             <h4 className="font-bold text-sm uppercase tracking-widest mb-6">Shop</h4>
             <ul className="space-y-2 text-gray-400 text-sm">
               <li><a href="#" className="hover:text-white transition-colors">New Arrivals</a></li>
               <li><a href="#" className="hover:text-white transition-colors">Bags</a></li>
               <li><a href="#" className="hover:text-white transition-colors">Shoes</a></li>
               <li><a href="#" className="hover:text-white transition-colors">Accessories</a></li>
             </ul>
           </div>
           <div>
             <h4 className="font-bold text-sm uppercase tracking-widest mb-6">Customer Care</h4>
             <ul className="space-y-2 text-gray-400 text-sm">
               <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
               <li><a href="#" className="hover:text-white transition-colors">Shipping & Returns</a></li>
               <li><a href="#" className="hover:text-white transition-colors">Track Order</a></li>
               <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
             </ul>
           </div>
           <div>
             <h4 className="font-bold text-sm uppercase tracking-widest mb-6">Newsletter</h4>
             <p className="text-gray-400 text-sm mb-4">Subscribe to receive updates, access to exclusive deals, and more.</p>
             <div className="flex border-b border-gray-700 pb-2">
               <input type="email" placeholder="Enter your email" className="bg-transparent border-none focus:ring-0 w-full text-sm placeholder-gray-500" />
               <button className="text-gray-400 hover:text-white uppercase text-xs font-bold">Join</button>
             </div>
           </div>
        </div>
        <div className="text-center text-gray-600 text-xs mt-16">
          &copy; 2024 Madoleko. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Layout;