const incentives = [
  {
    name: "Free shipping",
    imageSrc:
      "https://tailwindui.com/img/ecommerce/icons/icon-shipping-simple.svg",
    description: "It's not actually ",
  },
  {
    name: "10-year warranty",
    imageSrc:
      "https://tailwindui.com/img/ecommerce/icons/icon-warranty-simple.svg",
    description: "If it breaks in ",
  },
  {
    name: "Exchanges",
    imageSrc:
      "https://tailwindui.com/img/ecommerce/icons/icon-exchange-simple.svg",
    description: "If you don't .",
  },
  {
    name: "10-year warranty",
    imageSrc:
      "https://tailwindui.com/img/ecommerce/icons/icon-warranty-simple.svg",
    description: "If it breaks in thet",
  },
  {
    name: "10-year warranty",
    imageSrc:
      "https://tailwindui.com/img/ecommerce/icons/icon-warranty-simple.svg",
    description: "If it breaks in thet",
  },
];

export default function Incentives() {
  return (
    <div className="bg-gray-200 w-full">
      <div className="flex flex-col lg:flex-row justify-between mx-0 lg:mx-auto max-w-full md:max-w-[90%] lg:px-8 md:px-6 px-2 py-3 lg:py-5">
        {incentives.map((incentive) => (
          <div key={incentive.name} className="py-2 lg:py-0">
            <div className="flex  items-center gap-6">
              <img
                className="lg:mx-auto mx-0 h-12 w-12 lg:h-16 lg:w-16"
                src={incentive.imageSrc}
                alt=""
              />
              <div className="">
                <h3 className="text-sm font-medium text-gray-900">
                  {incentive.name}
                </h3>
                <p className=" text-sm text-gray-500">
                  {incentive.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
