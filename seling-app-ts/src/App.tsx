import React, { useEffect } from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Header from './components/layouts/header/Header';
import Footer from './components/layouts/footer/Footer';
import Home from './components/home/Home';
import Product from './components/products/Product';
import ViewProducts from './components/products/ViewProducts';
import ViewProductSale from './components/products/ViewProductSale';
import Category from './components/category/Category';
import { useSelector, useDispatch } from 'react-redux';
import { getListCategory } from './actions/productsAction';

function App(props: any) {
  const listCategory = useSelector((state: any) => state.categorysReducer.categorys);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getListCategory());
    return () => { }
  }, [])
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/products-sale" component={ViewProductSale} />
        <Route path="/detail/:id" component={Product} />
        <Switch>
          <Route path="/allProsOfCate" component={ViewProducts} />
          <Route path="/products" component={ViewProducts} />
        </Switch>
        {/* <div className="container">
          <div>breadcrumb</div>
          <div className="row ">
            <div className="col-md-3 bg-white" style={{ marginBottom: '20px' }}>
              <Category categorys={listCategory} />
            </div>
            <div className="col-md-9">
              <Switch>
                <Route path="/allProsOfCate" component={ViewProducts} />
                <Route path="/products" component={ViewProducts} />
              </Switch>
            </div>
          </div>

        </div> */}

      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
