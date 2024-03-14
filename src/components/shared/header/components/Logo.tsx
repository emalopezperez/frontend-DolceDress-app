import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <h1 className="font-bold text-3xl bg-gradient-to-r from-teal-600 to-orange-600 bg-clip-text text-transparent">
        DolceDres
      </h1>
    </Link>
  );
};

export default Logo;
