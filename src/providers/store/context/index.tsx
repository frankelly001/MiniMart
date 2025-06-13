import React from 'react';

export interface CartItem {
  productId: string;
  name: string;
  image: number;
  quantity: number;
  unitPrice: number; // Price per item
}
export type StoreState = {
  cart: CartItem[];
  incrementProductQuantity: (product: Omit<CartItem, 'quantity'>) => void;
  decrementProductQuantity: (product: Omit<CartItem, 'quantity'>) => void;
  removeProductFromCart: (product: Omit<CartItem, 'quantity'>) => void;
};

const intialStoreState: StoreState = {
  cart: [],
  incrementProductQuantity: () => {},
  decrementProductQuantity: () => {},
  removeProductFromCart: () => {},
};

export const StoreContext = React.createContext<StoreState>(intialStoreState);
