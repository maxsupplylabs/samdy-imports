import { limitString } from "../../utils/functions";
import { getDocumentByFieldValue } from "../../utils/functions";

interface ProductData {
  name: string;
  price: number; // Assuming price is a number
  description: string;
  moq: number;
}

export const generateMetadata = async ({
  params,
}: {
  params: { productId: string };
}): Promise<{ title: string; description: string }> => {
  const { productId } = params;

  async function getProductData(productId: string): Promise<ProductData> {
    try {
      const product = await getDocumentByFieldValue("products", "id", productId);
      return {
        name: product?.name || "",
        price: product?.price || 0, // Assuming price is a number
        description: product?.description || "",
        moq: product?.moq || 1,
      };
    } catch (error) {
      console.error("Error fetching product data:", error);
      return {
        name: "",
        price: 0,
        description: "",
        moq: 1
      };
    }
  }

  const productData: ProductData = await getProductData(productId);
  return {
    title: limitString(productData.name, 24) + " | GHc" + productData.price.toFixed(2) + " | MOQ " + productData.moq,
    description: limitString(productData.description, 34),
  };
};

export default function ProfileLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { productId: string };
}) {
  return <>{children}</>;
}
