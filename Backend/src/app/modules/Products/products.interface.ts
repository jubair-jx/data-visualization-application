type Variant = {
  id: string;
  title: string;
  price: number;
};

export type TProduct = {
  id?: string;
  title: string;
  vendor: string;
  created_at: Date;
  updated_at: Date;
  variants: Variant[];
};
