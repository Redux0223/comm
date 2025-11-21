
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useStore } from '../services/store';
import { CURRENCY_SYMBOL } from '../constants';
import { api } from '../services/api';
import { useNavigate } from 'react-router-dom';
import { Lock, CreditCard } from 'lucide-react';

const Checkout: React.FC = () => {
  const { cart, cartTotal, clearCart } = useStore();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    zip: '',
    cardNumber: '',
    expiry: '',
    cvc: ''
  });

  if (cart.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <h2 className="text-2xl font-serif mb-4">Your cart is empty</h2>
        <button onClick={() => navigate('/shop')} className="text-gold-600 underline">Return to Shop</button>
      </div>
    );
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    try {
      // Call the API to create order
      await api.orders.create({
        customer: {
            email: formData.email,
            firstName: formData.firstName,
            lastName: formData.lastName,
            address: formData.address,
            city: formData.city,
            zip: formData.zip
        },
        items: cart.map(item => ({ productId: item.id, quantity: item.quantity })),
        total: cartTotal
      });

      clearCart();
      alert("Order placed successfully!");
      navigate('/');
    } catch (error) {
      console.error("Checkout failed", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-serif mb-8 text-center">Checkout</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Form */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
          <form onSubmit={handleSubmit} className="space-y-8">
            <section>
              <h2 className="text-lg font-medium mb-4 uppercase tracking-widest">Contact Information</h2>
              <input 
                required
                type="email" 
                name="email" 
                placeholder="Email Address" 
                className="w-full border-gray-300 p-3 border focus:ring-black focus:border-black rounded-sm"
                value={formData.email}
                onChange={handleInputChange}
              />
            </section>

            <section>
              <h2 className="text-lg font-medium mb-4 uppercase tracking-widest">Shipping Address</h2>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <input required type="text" name="firstName" placeholder="First Name" className="w-full border-gray-300 p-3 border focus:ring-black focus:border-black rounded-sm" value={formData.firstName} onChange={handleInputChange} />
                <input required type="text" name="lastName" placeholder="Last Name" className="w-full border-gray-300 p-3 border focus:ring-black focus:border-black rounded-sm" value={formData.lastName} onChange={handleInputChange} />
              </div>
              <input required type="text" name="address" placeholder="Address" className="w-full border-gray-300 p-3 border mb-4 focus:ring-black focus:border-black rounded-sm" value={formData.address} onChange={handleInputChange} />
              <div className="grid grid-cols-2 gap-4">
                <input required type="text" name="city" placeholder="City" className="w-full border-gray-300 p-3 border focus:ring-black focus:border-black rounded-sm" value={formData.city} onChange={handleInputChange} />
                <input required type="text" name="zip" placeholder="ZIP Code" className="w-full border-gray-300 p-3 border focus:ring-black focus:border-black rounded-sm" value={formData.zip} onChange={handleInputChange} />
              </div>
            </section>

            <section>
              <h2 className="text-lg font-medium mb-4 uppercase tracking-widest flex items-center justify-between">
                Payment 
                <div className="flex space-x-2 text-gray-400">
                  <CreditCard size={20} />
                  <Lock size={16} className="text-green-600" />
                </div>
              </h2>
              <div className="bg-gray-50 p-4 rounded border border-gray-200 space-y-4">
                <input required type="text" name="cardNumber" placeholder="Card Number" className="w-full border-gray-300 p-3 border bg-white focus:ring-black focus:border-black rounded-sm" value={formData.cardNumber} onChange={handleInputChange} />
                <div className="grid grid-cols-2 gap-4">
                  <input required type="text" name="expiry" placeholder="MM / YY" className="w-full border-gray-300 p-3 border bg-white focus:ring-black focus:border-black rounded-sm" value={formData.expiry} onChange={handleInputChange} />
                  <input required type="text" name="cvc" placeholder="CVC" className="w-full border-gray-300 p-3 border bg-white focus:ring-black focus:border-black rounded-sm" value={formData.cvc} onChange={handleInputChange} />
                </div>
              </div>
            </section>

            <button 
              type="submit" 
              disabled={isProcessing}
              className="w-full bg-black text-white py-4 uppercase tracking-widest hover:bg-gold-600 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isProcessing ? 'Processing...' : `Pay ${CURRENCY_SYMBOL}${cartTotal.toLocaleString()}`}
            </button>
          </form>
        </motion.div>

        {/* Summary */}
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="bg-gray-50 p-8 h-fit rounded-lg">
          <h2 className="text-lg font-medium mb-6 uppercase tracking-widest">Order Summary</h2>
          <div className="space-y-4 mb-6 max-h-96 overflow-y-auto">
            {cart.map((item) => (
              <div key={item.id} className="flex gap-4">
                <div className="w-16 h-20 bg-gray-200 overflow-hidden flex-shrink-0">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <h4 className="font-serif text-sm">{item.name}</h4>
                  <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                </div>
                <div className="text-sm font-medium">
                  {CURRENCY_SYMBOL}{(item.price * item.quantity).toLocaleString()}
                </div>
              </div>
            ))}
          </div>
          <div className="border-t border-gray-200 pt-4 space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-500">Subtotal</span>
              <span>{CURRENCY_SYMBOL}{cartTotal.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Shipping</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between font-bold text-lg pt-4 border-t border-gray-200 mt-4">
              <span>Total</span>
              <span>{CURRENCY_SYMBOL}{cartTotal.toLocaleString()}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Checkout;
