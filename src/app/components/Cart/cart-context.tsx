import { createContext, useState, ReactNode } from "react";
import { CartContextType, CartType } from "./types";
export const CartContext = createContext<CartContextType | null>(null);

type CartContextProviderProps = {
  children: ReactNode;
};

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cart, setCart] = useState<CartType>({
    price: 0,
    items: [],
  });

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
}
