import Search from "./components/Search";
import Cart from "./components/Cart";
import Logo from "./components/Logo";
import NavBar from "./components/NavBar";

export default function Header() {
  return (
    <div className="w-full fixed top-0 z-50 bg-gray-100">
      <header className="relative">
        <nav
          aria-label="Top"
          className="mx-auto max-w-[90%] lg:px-8 md:px-6 px-4">
          <div className=" pb-14  sm:pb-0 ">
            <div className="flex h-16 items-center justify-between">
              <div className="flex flex-1">
                <Logo />
              </div>
              <NavBar />
              <div className="flex flex-1 items-center justify-end">
                <Search />
                <div className="ml-4 flow-root lg:ml-8">
                  <Cart />
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
