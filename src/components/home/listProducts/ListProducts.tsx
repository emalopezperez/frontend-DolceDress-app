import CardProduct from "./components/CardProduct";
import { getProducts } from "app/services/shopify";

export const ListProducts = async () => {
  const products = await getProducts();

  return (
    <div className=" mt-20">
      <div className="w-full flex justify-center">
        <h3 className="text-4xl">Featured products </h3>
      </div>
      <div className="mx-auto max-w-2xl  py-16 sm:py-8 lg:max-w-[90%] lg:px-8 md:px-6 px-4">
        <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-4 lg:gap-x-8">
          {products?.map((product) => (
            <CardProduct key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};
