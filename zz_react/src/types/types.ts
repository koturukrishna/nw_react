export interface UserType {
  id: string;
  name: string;
}

export interface UserEditProps {
  user: UserType;
  handleEditUser: (id: string) => void;
  handleDeleteUser: (id: string) => void;
}

export type ActionTypes =
  | { type: "INCREMENT" }
  | { type: "DECREMENT" }
  | { type: "RESET" };

export interface ProductType {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: { rate: number; count: number };
  title: string;
}
