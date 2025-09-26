import Image from "next/image";

function CartIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className={`${className}`}
    >
      <path
        d="M11 20.5C11 21.3284 10.3284 22 9.5 22C8.67157 22 8 21.3284 8 20.5C8 19.6716 8.67157 19 9.5 19C10.3284 19 11 19.6716 11 20.5Z"
        stroke="#06100D"
        strokeWidth="1.5"
      />
      <path
        d="M20 20.5C20 21.3284 19.3284 22 18.5 22C17.6716 22 17 21.3284 17 20.5C17 19.6716 17.6716 19 18.5 19C19.3284 19 20 19.6716 20 20.5Z"
        stroke="#06100D"
        strokeWidth="1.5"
      />
      <path
        d="M6 4H18C20.2091 4 22 5.79086 22 8V13C22 15.2091 20.2091 17 18 17H10C7.79086 17 6 15.2091 6 13V4ZM6 4C6 2.89543 5.10457 2 4 2H2M6 8H21.5"
        stroke="#06100D"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FadeInQuickButtons() {
  //das ist um quickadd und wishlist icons rein zu hovern.

  const inconClass =
    "[@container(min-width:350px)]:w-[35px] [@container(min-width:350px)]:h-[35px] [@container(max-width:210px)]:w-[16px] [@container(max-width:210px)]:h-[16px]";

  return (
    <div className=" [container-type:inline-size]">
      <div className="flex items-center justify-center absolute bottom-0 w-full py-gap-9 px-gap-13 space-x-gap-8 [@container(max-width:210px)]:space-x-gap-5">
        <span className="rounded-lg aspect-square p-gap-9 bg-white opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto translate-y-4 group-hover:translate-y-0 transition ease-in-out duration-100 delay-0">
          <CartIcon className={`${inconClass}`} />
        </span>
        <span className="rounded-lg aspect-square p-gap-9 bg-white opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto translate-y-4 group-hover:translate-y-0 transition ease-in-out duration-200 delay-0">
          <CartIcon className={`${inconClass}`} />
        </span>
        <span className="rounded-lg aspect-square p-gap-9 bg-white opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto translate-y-4 group-hover:translate-y-0 transition ease-in-out duration-300 delay-0">
          <CartIcon className={`${inconClass}`} />
        </span>
      </div>
    </div>
  );
}

// function FadeInSelect() {
//   return (
//     <div className="flex justify-center items-center absolute bottom-0 w-full py-gap-9 px-gap-13 bg-black/90 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition ease-in-out duration-300 ">
//       <p className="font-text-md-medium uppercase text-white">select option</p>
//     </div>
//   );
// }

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
        {/* <FadeInSelect /> */}
        <FadeInQuickButtons />
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
