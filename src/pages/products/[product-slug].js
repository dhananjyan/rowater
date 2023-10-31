import HomeLayout from "@/components/Common/Layout/HomeLayout";
import MainBanner from "@/components/MainBanner/MainBanner";
import data from "../../assets/data.json";
import Head from "next/head";
import s from "../../styles/SingleProduct.module.scss";
import cx from "classname";
import { redirect } from "next/dist/server/api-utils";

export const getServerSideProps = async (ctx) => {
    const slug = ctx.query["product-slug"];
    const productData = data?.product?.find(item => item?.slug === slug);
    if (productData?.redirect)
        return {
            redirect: {
                destination: productData?.redirect,
                permanent: false,
            }
        }
    return { props: { result: productData } }
}

export default function SingleProduct({ result }) {
    return (
        <div className={s.parent}>
            <Head>
                <title>{`${result.metaTitle}`}</title>
                <link rel="canonical" href={`https://www.vinayagawaterpurifiers.com/products/${result?.slug}`} />
                <meta
                    name="description"
                    content="We offer everything you need to get pure water from domestic RO water purifier, dispenser, CRI pumps, to industrial & commercial water plants & spare parts."
                    key="desc"
                />
            </Head>
            <HomeLayout >
                <MainBanner title={result.title} />
                {result.description ? <div className="container my-5">
                    <p>{result.description}</p>
                </div> : ""}
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
