import {
  MagnifyingGlassIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";

const Search = () => {
  return (
    <a href="#" className="p-2 text-green-900 hover:text-gray-500">
      <span className="sr-only">Search</span>
      <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
    </a>
  );
};

export default Search;
