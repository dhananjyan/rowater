import HomeLayout from "@/components/HomeLayout";
import s from "./page.module.css"
import MainBanner from "@/components/MainBanner/MainBanner";
import About from "@/components/About/About";
import ProductsWeOffer from "@/components/ProductsWeOffer/ProductsWeOffer";
import data from "../assets/data.json";


// import ServicesWeOffer from "@/components/ServicesWeOffer/ServicesWeOffer";

export default function Home() {
  console.log("data?.ProductsWeOffer", data?.ProductsWeOffer)
  return (
    <HomeLayout className={s.hello}>
      <MainBanner />
      <section id="aboutUs">

        <About />
      </section>
      <ProductsWeOffer title="Products we offer" data={data?.productWeOffer} />
      <ProductsWeOffer title="Wholesale dealers of" data={data?.wholeSaleDealerOf} />
      <ProductsWeOffer title="Services we undertake" data={data?.serviceWeUndertake} />
    </HomeLayout>
  )
}
