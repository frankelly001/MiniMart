import React, {FunctionComponent, ReactNode, useState} from 'react';
import {CartItem, FavoriteItem, StoreContext} from '../context';

const StoreProvider: FunctionComponent<{children: ReactNode}> = ({
  children,
}) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [favourites, setFavourites] = useState<FavoriteItem[]>([]);

  const incrementProductQuantity = (product: Omit<CartItem, 'quantity'>) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(
        item => item.productId === product.productId,
      );

      if (existingItem) {
        return prevCart.map(item =>
          item.productId === product.productId
            ? {...item, quantity: item.quantity + 1}
            : item,
        );
      }

      return [...prevCart, {...product, quantity: 1}];
    });
  };

  const decrementProductQuantity = (product: Omit<CartItem, 'quantity'>) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(
        item => item.productId === product.productId,
      );

      if (!existingItem || existingItem.quantity === 1) {
        return prevCart;
      }

      return prevCart.map(item =>
        item.productId === product.productId
          ? {...item, quantity: item.quantity - 1}
          : item,
      );
    });
  };

  const removeProductFromCart = (product: Omit<CartItem, 'quantity'>) => {
    setCart(prevCart =>
      prevCart.filter(item => item.productId !== product.productId),
    );
  };

  const favoriteToggle = (product: FavoriteItem) => {
    setFavourites(fav => {
      if (fav.some(el => el.productId === product.productId)) {
        return fav.filter(el => el.productId !== product.productId);
      } else {
        return [product, ...fav];
      }
    });
  };
  const clearAllFavorites = () => setFavourites([]);

  return (
    <StoreContext.Provider
      value={{
        cart,
        favourites,
        incrementProductQuantity,
        decrementProductQuantity,
        removeProductFromCart,
        favoriteToggle,
        clearAllFavorites,
      }}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
