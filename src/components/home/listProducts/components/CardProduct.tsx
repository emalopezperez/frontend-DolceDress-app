import { Product } from "app/models/Product";

interface ProductProps {
  product: Product;
  key: string | number;
}

const CardProduct: React.FC<ProductProps> = ({ product, key }) => {
  return (
    <div key={key} className="w-full h-full  ">
      <div className="group relative">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200">
          <img src={product.images[0].src} alt={product.title} />
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-sm font-medium text-gray-900">
          <a href="/">
            <span aria-hidden="true" className="absolute inset-0" />
            {product.title}
          </a>
        </h3>
        <p className="text-sm text-gray-500">{product.body_html}</p>
        <div className="flex flex-1 flex-col justify-end"></div>
      </div>
    </div>
  );
};

export default CardProduct;
