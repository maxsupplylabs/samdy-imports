"use client"
import { useAllOrderedProducts } from "@/hooks/useAllOrders";
// import ProductsCard from "@/components/ui"
import Link from "next/link";
import Image from "next/image";
import { RiShip2Line } from "react-icons/ri";
import {
    limitString,
  } from "@/utils/functions";

export default function Page() {
    const { orderedProducts, isLoading, isError } = useAllOrderedProducts();
  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error fetching data</div>
  }

      // Filter orders based on selected time period
      const filteredOrders = orderedProducts.filter((productWithOrders) => {
        const orderDate = productWithOrders.orders[0].timestamp.toDate();
        const today = new Date();
        const yesterday = new Date(today);
        yesterday.setDate(today.getDate() - 1);
        const weekStart = new Date(today);
        weekStart.setDate(today.getDate() - today.getDay());
        const monthStart = new Date(today.getFullYear(), today.getMonth(), 1);
    
        return orderDate >= monthStart && orderDate <= today;
      });

  if (filteredOrders.length === 0) {
    return       <div className="flex flex-col justify-center items-center min-h-[80vh] max-w-xs text-center m-auto">
    <p className="text-xl font-semibold">No item found</p>
    <p className="">Items people have ordered will appear here.</p>
  </div>
  }

  return (
    <div>
        <div className="flex flex-col justify-center items-center text-center p-2 bg-pink-300">
            <h1 className="text-lg font-semibold">Batch Orders</h1>
            <p className="text-xs">We collect orders from customers over a month and then ship them from China to Ghana. The items listed below are currently being shipped to Ghana.</p>
            <p className="text-xs">Tap on any item to order before the closing date.</p>
        </div>
        <div className="flex items-center justify-center py-2 gap-1 opacity-70 text-sm">
        <p>Closing on 10th June</p>
      </div>
        <div className="bg-gradient-to-t from-gray-100 mt-2">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-1.5 gap-y-1.5 px-2 pb-1">
        {filteredOrders.map((product) => (
          <Link
            className="rounded-[2px] min-h-[8rem] bg-white md:hover:shadow-md"
            key={product.orders[0].productId}
            href={`/${product.orders[0].productId}`}
          >
            <div className="flex flex-col justify-start items-center">
              <div className="relative w-full pt-[100%]">
                <Image
                  className="absolute w-full h-full top-0 left-0 object-cover"
                  src={product.orders[0].image.src}
                  width={500}
                  height={500}
                  alt=""
                />
               {product.orders[0].isFreeShipping && (
                      <div className="absolute bottom-0 flex items-center gap-1 bg-green-50 text-xs text-green-700 w-full px-2">
                        <RiShip2Line className="text-sm" />
                        <p className="text-green-700 px-1 md:text-sm">
                        {product.orders[0].isFreeShipping ? `Free shipping` : ""}
                      </p>
                      </div>
                    )}
              </div>
              <div className="w-full px-2 flex flex-col justify-start items-start py-1">
              <h3 className="text-xs md:text-sm text-left">
                  {limitString(product.orders[0].name, 24)}
                </h3>
                <p className="text-xs md:text-sm text-black font-bold">
                  GHc{product.orders[0].price}
                </p>
                <p className="text-xs md:text-sm text-black/60">
                  MOQ {product.orders[0].moq}
                </p>
                <p className="line-clamp-2 text-xs md:text-sm text-black/60">
                {new Set(product.orders.map(order => order.buyerName)).size} People ordered recently
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
    </div>
  );
}
