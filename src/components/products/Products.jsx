import React from 'react'
import { ProductItem } from './productItem'

export default function Products() {
    return (
        <div className='bg-light p-5 text-center'>
            <div className="container">
                <h1 className='mb-5'>Our Products</h1>
                <div className="row">
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                </div>
            </div>
        </div>
    )
}
