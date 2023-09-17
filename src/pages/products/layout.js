import ProductLayout from '@/components/Common/Layout/ProductLayout'
import SingleProduct from '@/components/SingleProduct/SingleProduct'
import React from 'react'
import data from "../../assets/data.json";



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
    <ProductLayout>
      <SingleProduct result={result} />
    </ProductLayout>
  )
}
