export type CartType = {
  id: string,
  quantity: number
}[];

export type CartContextType = {
  cart: CartType;
  setCart: React.Dispatch<React.SetStateAction<CartType>>;
};