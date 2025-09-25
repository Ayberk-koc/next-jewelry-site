import Image from "next/image";

export default function ProductItem({
  title,
  image,
  price,
  priceNoDiscount,
}: {
  title: string;
  image: string;
  price: string | number;
  priceNoDiscount?: string | number;
}) {
  return (
    <div className="flex flex-col space-y-gap-5">
      <div className="relative aspect-[313/370] group bg-gray-100">
        <Image
          src={image}
          alt=""
          fill //hier fill -> display absolut
          className="object-[50%_50%] object-cover"
        />
        <div className="flex justify-center items-center absolute bottom-0 w-full py-gap-9 px-gap-13 bg-black/90 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition ease-in-out duration-300">
          <p className="font-text-md-medium uppercase text-white">
            select option
          </p>
        </div>
      </div>
      <div className="flex flex-col space-y-gap-3">
        <p className="font-text-md-medium">{title}</p>
        <p className="flex space-x-gap-3 font-text-md-medium">
          <span>{price}$</span>
          {priceNoDiscount && (
            <span className="text-gray-400 line-through">
              {priceNoDiscount}$
            </span>
          )}
        </p>
      </div>
    </div>
  );
}
