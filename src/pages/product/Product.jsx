import React from 'react'
import useFetch from '../../hook/useFetch'
import BreadCrumb from '../../components/BreadCrumb'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import ProductCard from '../home/components/ProductCard'

function Product() {
    const { data, error, loading } = useFetch("api/v1/product")


    if (loading) {
        return <>
            <Skeleton count={5} />

        </>
    }
    return (
        <div>
            {/* <BreadCrumb /> */}
{
    data?.map((el)=>{
        return <ProductCard data={el}/>
    })
}


        </div>
    )
}

export default Product