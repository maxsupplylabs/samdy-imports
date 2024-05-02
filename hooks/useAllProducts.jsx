import useSWR from 'swr';
import { getAllProducts } from '@/utils/functions';

export function useAllProducts() {
  const { data, error } = useSWR('allProducts', getAllProducts);

  return {
    products: data,
    isLoading: !error && !data,
    isError: error,
  };
}
