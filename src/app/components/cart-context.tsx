import { createContext, useState, ReactNode } from "react";
import { CarType } from "./cars";

export type CartType = {
  price: number;
  items: {
    id: string,
    quantity: number
  }[];
};

type CartContextType = {
  cart: CartType;
  setCart: React.Dispatch<React.SetStateAction<CartType>>;
};

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
