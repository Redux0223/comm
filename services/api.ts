
import { Product, Order, DashboardStats } from '../types';
import { MOCK_PRODUCTS, MOCK_ORDERS } from '../constants';

// Simulate network latency
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export interface CreateOrderDTO {
  customer: {
    email: string;
    firstName: string;
    lastName: string;
    address: string;
    city: string;
    zip: string;
  };
  items: { productId: string; quantity: number }[];
  total: number;
}

export const api = {
  products: {
    list: async (): Promise<Product[]> => {
      await delay(600); // Simulate network delay
      return [...MOCK_PRODUCTS];
    },
    get: async (id: string): Promise<Product | undefined> => {
      await delay(400);
      return MOCK_PRODUCTS.find(p => p.id === id);
    }
  },
  
  orders: {
    create: async (data: CreateOrderDTO): Promise<Order> => {
      await delay(1500); // Simulate processing
      const newOrder: Order = {
        id: `#ORD-${Math.floor(1000 + Math.random() * 9000)}`,
        customer: `${data.customer.firstName} ${data.customer.lastName}`,
        date: new Date().toISOString().split('T')[0],
        total: data.total,
        status: 'Pending'
      };
      // In a real app, we would persist this to the database
      console.log('Order created:', newOrder);
      return newOrder;
    },
    
    list: async (): Promise<Order[]> => {
      await delay(800);
      return [...MOCK_ORDERS] as Order[];
    }
  },

  stats: {
    getDashboardSummary: async (): Promise<DashboardStats> => {
      await delay(1000);
      return {
        sales: 15430,
        orders: 48,
        visitors: 3420,
        conversionRate: 2.4
      };
    }
  }
};
