"use client";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";

const navigation = {
  categories: [
    {
      name: "Women",
      clothing: [
        [
          { name: "Tops", href: "#" },
          { name: "Dresses", href: "#" },
          { name: "Pants", href: "#" },
          { name: "Denim", href: "#" },
          { name: "Sweaters", href: "#" },
          { name: "T-Shirts", href: "#" },
        ],
        [
          { name: "Jackets", href: "#" },
          { name: "Activewear", href: "#" },
          { name: "Shorts", href: "#" },
          { name: "Swimwear", href: "#" },
          { name: "Browse All", href: "#" },
        ],
      ],
      accessories: [
        { name: "Shoes", href: "#" },
        { name: "Jewelry", href: "#" },
        { name: "Handbags", href: "#" },
        { name: "Socks", href: "#" },
        { name: "Hats", href: "#" },
        { name: "Browse All", href: "#" },
      ],
      categories: [
        { name: "New Arrivals", href: "#" },
        { name: "Sale", href: "#" },
        { name: "Basic Tees", href: "#" },
        { name: "Artwork Tees", href: "#" },
      ],
    },
    {
      name: "Men",
      clothing: [
        [
          { name: "Dress Shirts", href: "#" },
          { name: "Pants", href: "#" },
          { name: "Jackets", href: "#" },
          { name: "T-Shirts", href: "#" },
          { name: "Jeans", href: "#" },
          { name: "Hoodies", href: "#" },
        ],
        [
          { name: "Vests", href: "#" },
          { name: "Kilts", href: "#" },
          { name: "Outdoors", href: "#" },
          { name: "Capes", href: "#" },
          { name: "Browse All", href: "#" },
        ],
      ],
      accessories: [
        { name: "Watches", href: "#" },
        { name: "Boots", href: "#" },
        { name: "Fanny Packs", href: "#" },
        { name: "Sunglasses", href: "#" },
        { name: "Browse All", href: "#" },
      ],
      categories: [
        { name: "Just Added", href: "#" },
        { name: "Clearance", href: "#" },
        { name: "Graphic Tees", href: "#" },
      ],
    },
  ],
  other: [
    { name: "Company", href: "#" },
    { name: "Stores", href: "#" },
  ],
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const NavBar = () => {
  return (
    <Popover.Group className="absolute inset-x-0 bottom-0 sm:static sm:flex-1 sm:self-stretch lg:px-8 md:px-6 px-4 ">
      <div className="flex h-14 space-x-8 overflow-x-auto border-t px-4 pb-px sm:h-full sm:justify-center sm:overflow-visible sm:border-t-0 sm:pb-0">
        {navigation.categories.map((category, categoryIdx) => (
          <Popover key={categoryIdx} className="flex">
            {({ open }) => (
              <>
                <div className="relative flex">
                  <Popover.Button
                    className={classNames(
                      open
                        ? "border-green-900 text-black"
                        : "border-transparent text-black hover:text-green-900",
                      "relative z-10 -mb-px flex items-center border-b-2 pt-px text-md font-medium transition-colors duration-200 ease-out"
                    )}>
                    {category.name}
                  </Popover.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0">
                  <Popover.Panel className="absolute inset-x-0 top-full z-20 bg-white text-gray-500 sm:text-sm">
                    <div
                      className="absolute inset-0 top-1/2 bg-white shadow"
                      aria-hidden="true"
                    />
                    <div
                      className="absolute inset-0 -top-px mx-auto h-px max-w-[90%] sm:top-0 "
                      aria-hidden="true">
                      <div
                        className={classNames(
                          open ? "bg-gray-200" : "bg-transparent",
                          "h-px w-full transition-colors duration-200 ease-out"
                        )}
                      />
                    </div>

                    <div className="relative">
                      <div className="mx-auto max-w-[90%] ">
                        <div className="grid grid-cols-1 items-start gap-x-6 gap-y-10 pb-12 pt-10 md:grid-cols-2 lg:gap-x-8">
                          <div className="grid grid-cols-1 gap-x-6 gap-y-10 lg:gap-x-8">
                            <div>
                              <p
                                id="clothing-heading"
                                className="font-medium text-gray-900">
                                Clothing
                              </p>
                              <div className="mt-4 border-t border-gray-200 pt-6 sm:grid sm:grid-cols-2 sm:gap-x-6">
                                <ul
                                  role="list"
                                  aria-labelledby="clothing-heading"
                                  className="space-y-6 sm:space-y-4">
                                  {category.clothing[0].map((item) => (
                                    <li key={item.name} className="flex">
                                      <a
                                        href={item.href}
                                        className="hover:text-gray-800">
                                        {item.name}
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                                <ul
                                  role="list"
                                  aria-label="More clothing"
                                  className="mt-6 space-y-6 sm:mt-0 sm:space-y-4 ">
                                  {category.clothing[1].map((item) => (
                                    <li key={item.name} className="flex">
                                      <a
                                        href={item.href}
                                        className="hover:text-gray-800">
                                        {item.name}
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:gap-x-8">
                            <div>
                              <p
                                id="accessories-heading"
                                className="font-medium text-gray-900">
                                Accessories
                              </p>
                              <ul
                                role="list"
                                aria-labelledby="accessories-heading"
                                className="mt-4 space-y-6 border-t border-gray-200 pt-6 sm:space-y-4">
                                {category.accessories.map((item) => (
                                  <li key={item.name} className="flex">
                                    <a
                                      href={item.href}
                                      className="hover:text-gray-800">
                                      {item.name}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <p
                                id="categories-heading"
                                className="font-medium text-gray-900">
                                Categories
                              </p>
                              <ul
                                role="list"
                                aria-labelledby="categories-heading"
                                className="mt-4 space-y-6 border-t border-gray-200 pt-6 sm:space-y-4">
                                {category.categories.map((item) => (
                                  <li key={item.name} className="flex">
                                    <a
                                      href={item.href}
                                      className="hover:text-gray-800">
                                      {item.name}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
        ))}

        {navigation.other.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="flex items-center text-md font-medium text-black hover:text-gray-800">
            {item.name}
          </a>
        ))}
      </div>
    </Popover.Group>
  );
};

export default NavBar;
