import { createContext, useState, ReactNode } from "react";
import { CarType } from "./cars";

type Cart = {
  price: number;
  items: CarType[];
};

type CartContextType = {
  cart: Cart;
  setCart: React.Dispatch<React.SetStateAction<Cart>>;
};

export const CartContext = createContext<CartContextType | null>(null);

type CartContextProviderProps = {
  children: ReactNode;
};

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cart, setCart] = useState<Cart>({
    price: 0,
    items: [],
  });

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
}
