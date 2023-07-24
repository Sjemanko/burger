export interface MyData {
  id: string;
  name: string;
  description: string;
  price: number;
  amount: number;
}

export interface CartMealItemsProps {
  name: string;
  price: number;
  amount: number;
}

export interface CartVisibilityStateFunc {
  setCartVisibility: React.Dispatch<React.SetStateAction<boolean>>;
}
