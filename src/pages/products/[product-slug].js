import HomeLayout from "@/components/HomeLayout";
import MainBanner from "@/components/MainBanner/MainBanner";
import data from "../../assets/data.json";
import Head from "next/head";
import s from "../../styles/SingleProduct.module.scss";
import cx from "classname";

export const getServerSideProps = async (ctx) => {
    const slug = ctx.query["product-slug"];
    const productData = data?.product?.find(item => item?.slug === slug);
    return { props: { result: productData } }
}

export default function SingleProduct({ result }) {
    return (
        <div className={s.parent}>
            <Head>
                <title>{`${result.metaTitle}`}</title>
                <meta
                    name="description"
                    content="We offer everything you need to get pure water from domestic RO water purifier, dispenser, CRI pumps, to industrial & commercial water plants & spare parts."
                    key="desc"
                />
            </Head>
            <HomeLayout >
                <MainBanner title={result.name}  />
                <div className="container my-5">
                    <p>
                        {result.description}
                    </p>
                </div>
                {result?.section?.map((section, i) => {
                    return (<div key={`SECTION_${i}`} className={cx("container", "my-5")}>
                        <h2>{section?.title}</h2>
                        <div className={s.underline} />
                        <div dangerouslySetInnerHTML={{ __html: section?.content }} />
                    </div>)
                })}
            </HomeLayout>
        </div>
    )
}
