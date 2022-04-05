import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import "./style.css";
import "../App.css";
// import Tabs from '../UIControls/Tabs';
// import { CreateProductForm } from './CreateProductForm'
import {useDispatch} from 'react-redux';
export const ListItemProduct = ( buttonVisible ) => {
  const [state, setState] = useState();
  /**
   * If you want to wait for retrieving the data from server, you can use async here.
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
   */
  
  const getData = useCallback(async () => {
    const response = await axios.get(
      "http://localhost:4000/product/"
    );
    const { data } = response;
    setState(data);
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  const handleClick = (product) => {
  }

  return (
    <div>
      <div label="Product List"> 
          <p><b> Product List </b></p>
          <div className={"d-flex flex-row list-item Text-color"}>
            <div className={"user flex-fill"}>Select</div>
            <div className={"user flex-fill"}>Product Name</div>
            <div className={"user flex-fill"}>Company</div>
            <div className={"user flex-fill"}>Family</div>
            <div className={"user flex-fill"}>Product Type</div>
            <div className={"user flex-fill"}>Cycle Indicator</div>
          </div>
          {!!state && state.map((product) => <ListItem key = {product.id} product = {product} buttonVisible={buttonVisible} onClick={() => handleClick(product)}/>)}
       </div> 
     </div>
  );
};

export const ListItem = ({ product, buttonVisible, onClick }) => {
  const dispatch = useDispatch();
  return (
    <div className={"d-flex flex-row list-item"} key={product._id}> 
       {
      buttonVisible.buttonVisible === "true" ? (
        <div className={"user flex-fill"}><input type="radio" onClick={()=>  dispatch({ type: 'productid', payload: product.Product_Type })} value={product._id} name="productID"/></div>
        ) : (
          <div></div>
        )}
      <div className={"user flex-fill"}>{product.Product}</div>
      <div className={"user flex-fill"}>{product.Family}</div>
      <div className={"user flex-fill"}>{product.Company}</div>
      <div className={"user flex-fill"}>{product.Product_Type}</div>
      <div className={"user flex-fill"}>{product.CycleIndicator === 1 ? "Yes" : "No" }</div>
     
    </div>
  );
};
