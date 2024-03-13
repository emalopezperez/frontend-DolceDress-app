import { ShoppingBagIcon } from "@heroicons/react/24/outline";

const Cart = () => {
  return (
    <a href="#" className="group -m-2 flex items-center ">
      <ShoppingBagIcon
        className="h-6 w-6 flex-shrink-0 text-orange-300 group-hover:text-gray-500"
        aria-hidden="true"
      />
      <span className="ml-2 text-sm font-medium text-orange-300 group-hover:text-gray-800">
        0
      </span>
      <span className="sr-only">items in cart, view bag</span>
    </a>
  );
};

export default Cart;
