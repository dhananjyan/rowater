import HomeLayout from "@/components/Common/Layout/ProductLayout";
import SubProduct from "@/components/SingleProduct/SubProduct/SubProduct";
import Head from "next/head";


export default function ProductSlug() {
    return (

        <div>
            <Head>
                <title>Buy 250 LPH Industrial RO Water Plant: Get Price Quotation</title>
                <meta
                    name="description"
                    content="Shop the most affordable 250 LPH commercial industry RO water purification plant from Vinayaga Engineering. See specifications and get the price quote online."
                    key="desc"
                />
                <link rel="canonical" href="https://www.vinayagawaterpurifiers.com/industrial-ro-plant/250-lph-ro-plant" />
            </Head>
            <HomeLayout>
                <SubProduct />
            </HomeLayout>
        </div>
    )
}