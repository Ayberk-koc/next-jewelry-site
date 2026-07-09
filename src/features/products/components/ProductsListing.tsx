import ProductItem from "@/features/products/components/ProductItem";

type Item = {
  id: number;
  title: string;
  price: number;
  image: string;
  priceNoDiscount: number;
  category: string;
  size: string;
  soldLastWeek?: number;
};

export default function ProductsListing({ items }: { items: Item[] }) {
  return (
    <>
      {items.map((elem) => (
        <ProductItem
          key={elem.id}
          title={elem.title}
          image={elem.image}
          price={elem.price}
          priceNoDiscount={elem.priceNoDiscount}
        />
      ))}
    </>
  );
}
