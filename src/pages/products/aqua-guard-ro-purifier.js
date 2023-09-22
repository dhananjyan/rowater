import React from 'react'

export const getServerSideProps = async (ctx) => {
    return {
        redirect: {
            destination: "ro-water-purifier-madurai",
            permanent: false,
        }
    }
}

export default function Ddd() {
    return (
        <div>aqua-guard-ro-purifier</div>
    )
}
