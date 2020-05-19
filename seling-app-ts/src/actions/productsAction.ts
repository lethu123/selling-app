import axios from 'axios';
import { api_allSalePros, api_allPros, api_allCates, PRODUCTS, PRODUCTS_SALE, CATEGORY } from './types';
import { Product } from '../interfaces/productsInterface';
// import { subString } from '../commonJS/helperFuncs';

// get list products
export const getListProducts = () => async (dispatch: any) => {
    const res = await axios.get(api_allPros);
    if (res.data) {
        formatProduct(res.data);
        dispatch({
            type: PRODUCTS,
            products: res.data
        });
    }
}

// get list products sale
export const getListProductsSale = () => async (dispatch: any) => {
    const res = await axios.get(api_allSalePros);
    if (res.data) {
        formatProduct(res.data);
        dispatch({
            type: PRODUCTS_SALE,
            products_sale: res.data
        });
    }
}

// get category
export const getListCategory = () => async (dispatch: any) => {
    const res = await axios.get(api_allCates);
    if (res.data) {
        dispatch({
            type: CATEGORY,
            categorys: res.data
        })
    }
}

// helper function in this class
const formatProduct = (array: Product[]) => {
    array.forEach((product) => {
        product.Promotion = product.Price - product.Discount * product.Price;
        // product.Description = subString(product.Description, 100);
    });
}