import HomeLayout from "@/components/HomeLayout";
import s from "./page.module.css"
import MainBanner from "@/components/MainBanner/MainBanner";
import About from "@/components/About/About";
import ProductsWeOffer from "@/components/ProductsWeOffer/ProductsWeOffer";
import ServicesWeOffer from "@/components/ServicesWeOffer/ServicesWeOffer";

export default function Home() {
  return (
    <HomeLayout className={s.hello}>
      <MainBanner />
      <About />
      <ProductsWeOffer />
      <ServicesWeOffer />
    </HomeLayout>
  )
}
