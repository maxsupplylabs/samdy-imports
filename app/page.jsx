"use client"
import { useEffect } from "react";
import { useState } from "react";
import { fetchProductsInDepartments } from "@/utils/functions";
import { fetchAllDocumentsInCollection } from "@/utils/functions";
import { fetchTop4CollectionsByViews, getDocumentsInCollectionRealTime } from "@/utils/functions";
import Image from "next/image";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import HomePageBanners from "@/components/ui/collection/homePageBanners";
import TopBanner from "@/components/ui/top-banner";
import { IoIosArrowForward } from "react-icons/io";
import Explore from "@/components/ui/explore";
import { useAllProducts } from "@/hooks/useAllProducts"
import HomePageCollections from "@/components/ui/homepage-collections"

export default function Page() {
  // const [products, setProducts] = useState([]);
  // const [top3CollectionsByViews, setTop3CollectionsByViews] = useState([]);
//  const { products, isLoading, isError } = useAllProducts();
//  console.log(products)
//  if (isLoading) {
//   return <div>Loading...</div>;
// }

// if (isError) {
//   return <div>Error Loading data</div>;
// }

  // useEffect(() => {
  //   // Subscribe to real-time updates for the "products" collection
  //   const unsubscribeUploadedCollections = getDocumentsInCollectionRealTime("products", (count) => {
  //     setProducts(count);
  //   });

  //       // Fetch top 3 collections by views
  //       const fetchTopCollections = async () => {
  //         const collections = await fetchTop4CollectionsByViews("collections", 10);
  //         setTop3CollectionsByViews(collections);
  //       };
  //       fetchTopCollections();

  //   return () => {
  //     // Cleanup subscriptions when the component unmounts
  //     unsubscribeUploadedCollections();
  //   };
  // }, []);

  // console.log(products.length);
  // const allProducts = fetchAllDocumentsInCollection("products");


  // const top3CollectionsByViews = fetchTop4CollectionsByViews(
  //   "collections",
  //   4
  // );

  // const productsInShoes = fetchProductsInDepartments(products, [
  //   "mensShoes",
  //   "womensShoes",
  // ]);

  // const productsInBagsAndLuggage = fetchProductsInDepartments(
  //   products,
  //   ["mensBagsAndLuggage", "womensBagsAndLuggage"]
  // );
  // const productsInWatches = fetchProductsInDepartments(products, [
  //   "mensWatches",
  //   "womensWatches",
  // ]);

  // const productsInHomeAndKitchen = fetchProductsInDepartments(
  //   products,
  //   ["homeAndKitchen", ""]
  // );
  return (
    <>
      <TopBanner />
      <HomePageBanners />
      <Separator className='py-1 bg-gray-100' />
      <HomePageCollections />
      {/* <section>
        <Link href={'/collection'} className="flex items-center mb-2 w-min ml-2 pt-2">
          <h1 className="text-lg font-medium">
            <span>Collections</span>
          </h1>
          <span><IoIosArrowForward className="text-lg" /></span>
        </Link>
        <div className="m-auto overflow-auto pb-2 hide-scrollbar">
          {top3CollectionsByViews.length === 0 ? (
            <div className="flex flex-col justify-center items-center h-20">
              <p className="font-semibold">No collections found</p>
              <p className="text-sm">Most viewed collections will appear here.</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-5 grid-rows-2 md:grid md:grid-cols-7 gap-x-4 gap-y-2 w-max">
                {top3CollectionsByViews.map((collection) => (
                  <Link
                    className="flex flex-col justify-center items-center"
                    key={collection.id}
                    href={`/collection/${collection.id}`}
                  >
                      <div className="w-[4rem] h-[4rem] md:min-w-[6rem] md:min-h-[6rem]">
                        <Image
                          className="w-full h-full object-cover rounded-full"
                          src={collection.images[0].src}
                          width={300}
                          height={300}
                          alt=""
                        />
                      </div>
                    <div className="flex items-center min-h-[40px]">
                      <p className="text-center w-20 line-clamp-2 text-xs md:text-sm font-medium">
                        {collection.title}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      </section> */}
      <Separator className='py-1 bg-gray-100' />
      <section>
        <Explore
          // allProducts={products}
          // productsInWatches={productsInWatches}
          // productsInBagsAndLuggage={productsInBagsAndLuggage}
          // productsInHomeAndKitchen={productsInHomeAndKitchen}
          // productsInShoes={productsInShoes}
        />
      </section>
    </>
  );
}
