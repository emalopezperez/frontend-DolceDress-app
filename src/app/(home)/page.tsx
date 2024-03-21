import Hero from "app/components/home/hero/Hero";
import Incentives from "app/components/home/incentives/Incentives";
import { ListProducts } from "app/components/home/listProducts/ListProducts";
import PromoSection from "app/components/home/promoSection/PromoSection";

export default function Home() {
  return (
    <>
      <Hero />
      <Incentives />
      <PromoSection />
      <ListProducts />
    </>
  );
}
