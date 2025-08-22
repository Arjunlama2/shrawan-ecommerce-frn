import React from 'react'
import useFetch from '../../hook/useFetch'
import BreadCrumb from '../../components/BreadCrumb'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import ProductCard from '../home/components/ProductCard'
import { getAllProducts } from '../../api'
import { useQuery } from '@tanstack/react-query'


function Product() {
    // const { data, error, loading } = useFetch("api/v1/product")

     const {data,error,isloading} = useQuery({ queryKey: ['product'], queryFn:getAllProducts })


    if (isloading) {
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