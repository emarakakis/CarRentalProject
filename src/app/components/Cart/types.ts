export type CartType = {
  price: number;
  items: {
    id: string,
    quantity: number
  }[];
};

export type CartContextType = {
  cart: CartType;
  setCart: React.Dispatch<React.SetStateAction<CartType>>;
};