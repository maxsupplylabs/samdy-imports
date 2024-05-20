"use client";
import * as React from "react";
import { useProductsWithMostOrders } from "@/hooks/useAllOrders";
import Link from "next/link";
import Image from "next/image";

export default function CurrentOrders() {
  const { topOrderedProducts, isLoading, isError } = useProductsWithMostOrders();
  console.log(topOrderedProducts);
  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error fetching data</div>
  }

  if (topOrderedProducts.length === 0) {
    return null
  }
  return (
    <Link href="#" className="m-2 py-2 px-1 bg-gradient-to-t bg-red-300">
      <div className="m-auto overflow-auto pb-2 hide-scrollbar">
        <div className="grid grid-cols-5 md:grid md:grid-cols-7 gap-x-4 gap-y-2 w-max">
          {topOrderedProducts.map((product) => (
            <div
              className="flex flex-col justify-center items-center"
              key={product.orders[0].productId}
            // onClick={() =>
            //   incrementProductViews("collections", product.id)
            // }
            >
              {product.orders[0].image ? (

                <div className="w-[6rem] h-[6rem] md:min-w-[6rem] md:min-h-[6rem]">
                  <Image
                    className="w-full h-full object-cover"
                    src={product.orders[0].image.src}
                    width={300}
                    height={300}
                    alt=""
                  />
                </div>
              ) : (
                <div className="w-[6rem] h-[6rem] md:min-w-[6rem] md:min-h-[6rem]">
                  <Image
                    className="w-full h-full object-cover rounded-full"
                    src={"/placeholder-image.jpeg"}
                    width={500}
                    height={500}
                    alt=""
                  />
                </div>
              )}
              <div className="flex flex-col justify-start items-start">
                <p className="w-[6rem] pt-1 line-clamp-2 text-xs md:text-sm text-black/60">
                  {product.orders[0].name}
                </p>
                <p className="w-[6rem] pt-1 line-clamp-2 text-xs md:text-sm text-black/60">
                  MOQ {product.orders[0].moq}
                </p>
                <p className="w-[6rem] pt-1 line-clamp-2 text-xs md:text-sm text-black/60">
                  ... People ordered
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Link>
  );
}
