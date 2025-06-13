import React from 'react';

export interface CartItem {
  productId: string;
  name: string;
  image: number;
  quantity: number;
  unitPrice: number; // Price per item
}
export interface FavoriteItem {
  productId: string;
  name: string;
  image: number;
  price: number; // Price per item
}

export type StoreState = {
  cart: CartItem[];
  favourites: FavoriteItem[];
  incrementProductQuantity: (product: Omit<CartItem, 'quantity'>) => void;
  decrementProductQuantity: (product: Omit<CartItem, 'quantity'>) => void;
  removeProductFromCart: (product: Omit<CartItem, 'quantity'>) => void;
  favoriteToggle: (product: FavoriteItem) => void;
};

const intialStoreState: StoreState = {
  cart: [],
  favourites: [],
  incrementProductQuantity: () => {},
  decrementProductQuantity: () => {},
  removeProductFromCart: () => {},
  favoriteToggle: () => {},
};

export const StoreContext = React.createContext<StoreState>(intialStoreState);
