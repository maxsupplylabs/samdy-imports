"use client"
import { useEffect } from "react";
import { useState } from "react";
import { fetchProductsInDepartments } from "@/utils/functions";
import { fetchAllDocumentsInCollection } from "@/utils/functions";
import { fetchTop4CollectionsByViews, getDocumentsInCollectionRealTime } from "@/utils/functions";
import Image from "next/image";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import CurrentOrders from "@/components/ui/collection/currentOrders";
import TopBanner from "@/components/ui/top-banner";
import { IoIosArrowForward } from "react-icons/io";
import Explore from "@/components/ui/explore";
import { useAllProducts } from "@/hooks/useAllProducts"
import HomePageCollections from "@/components/ui/homepage-collections"

export default function Page() {
  return (
    <>
      <TopBanner />
      <CurrentOrders />
      <Separator className='py-1 bg-gray-100' />
      <HomePageCollections />
      <Separator className='py-1 bg-gray-100' />
      <Explore/>
    </>
  );
}
