import React, {FunctionComponent, ReactNode, useState} from 'react';
import {CartItem, StoreContext} from '../context';

const StoreProvider: FunctionComponent<{children: ReactNode}> = ({
  children,
}) => {
  const [cart, setCart] = useState<CartItem[]>([]);

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

      // if (existingItem.quantity === 1) {
      //   return prevCart.filter(item => item.productId !== product.productId);
      // }

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

  return (
    <StoreContext.Provider
      value={{
        cart,
        incrementProductQuantity,
        decrementProductQuantity,
        removeProductFromCart,
      }}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
