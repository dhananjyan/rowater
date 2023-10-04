import ProductLayout from '@/components/Common/Layout/ProductLayout'
import SingleProduct from '@/components/SingleProduct/SingleProduct'
import data from "../../assets/data.json";
import Head from 'next/head';



export const getServerSideProps = async (ctx) => {
    const slug = "industrial-ro-plant-madurai";
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

export default function layout({ result }) {
    return (
        <div>

            <Head>
                <title>{`${result.metaTitle}`}</title>
                <meta
                    name="description"
                    content={result?.metaDesc}
                    key="desc"
                />
                <link rel="canonical" href="https://www.vinayagawaterpurifiers.com/industrial-ro-plant" />
            </Head>
            <ProductLayout>
                <SingleProduct result={result} />
            </ProductLayout>
        </div>
    )
}
