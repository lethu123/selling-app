import React, { useEffect, useState, useMemo } from 'react';
import * as queryString from 'query-string';
import Title from '../common/Title'
import Products from './Products'
import { useSelector, useDispatch } from 'react-redux';
import { getListProducts, getListCategory } from '../../actions/productsAction';
import Category from '../category/Category';

const ViewProducts = (props: any) => {
    const listProduct = useSelector((state: any) => state.productsReducer.products);
    const listCategory = useSelector((state: any) => state.categorysReducer.categorys)
    const dispatch = useDispatch();
    const values = queryString.parse(props.location.search);
    console.log("outside", values);
    useEffect(() => {
        // dispatch()
        console.log("useEffect", queryString.parse(props.location.search));
        // alert(test);
        // setTest(queryString.parse(props.location.search.cateId));
        dispatch(getListProducts());
        // dispatch(getListCategory());
        // const values = queryString.parse(props.location.search)
        // console.log(values);
        // setParam(values);
        return () => { }
    }, [])
    return (
        <div className="container">
            <div>breadcrumb</div>
            <div className="row ">
                <div className="col-md-3 bg-white" style={{ marginBottom: '20px' }}>
                    <Category categorys={listCategory} />
                </div>
                <div className="col-md-9">
                    <Products products={listProduct} title="Products" classname="col-sm-6 col-md-4 col-lg-4 pb-3" />
                </div>
            </div>
        </div>
        // <Products products={listProduct} title="Products" classname="col-sm-6 col-md-4 col-lg-4 pb-3" />
    )
}

export default ViewProducts
