import HomeLayout from "@/components/HomeLayout";
import MainBanner from "@/components/MainBanner/MainBanner";
import About from "@/components/About/About";
import ProductsWeOffer from "@/components/ProductsWeOffer/ProductsWeOffer";
import data from "../assets/data.json";
import Head from "next/head";
import s from "../styles/Home.module.css"


// import ServicesWeOffer from "@/components/ServicesWeOffer/ServicesWeOffer";

export default function Home() {
  return (
    <div className={s.parent}>
      <Head>
        <title>Domestic & Commercial RO Water Purifier Dealer in Madurai | Vinayaga Engineering</title>
        <meta
          name="description"
          content="We offer everything you need to get pure water from domestic RO water purifier, dispenser, CRI pumps, to industrial & commercial water plants & spare parts."
          key="desc"
        />
      </Head>
      <HomeLayout >
        <MainBanner />
        <section id="about-us">

          <About />
        </section>
        <section id="products">
          <ProductsWeOffer title="Products we offer" data={data?.productWeOffer} />
        </section>
        <section id="wholesale">
          <ProductsWeOffer title="Wholesale dealers of" data={data?.wholeSaleDealerOf} />
        </section>
        <section id="services">
          <ProductsWeOffer title="Services we undertake" data={data?.serviceWeUndertake} />
        </section>
      </HomeLayout>
    </div>
  )
}
