import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import "./style.css";
import "../App.css";
import Tabs from '../UIControls/Tabs';
import { CreateProductForm } from './CreateProductForm'
import { CycleTypeList } from './CycleTypeList.Component'
import {ListItemProductDataTable} from './ProductListDataTable.Component'

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
      <Tabs> 
      <div label="Product List" className="user"> 
          <p className="user"><b> Product List </b></p>
          <ListItemProductDataTable></ListItemProductDataTable>
         </div> 
       
       <div label="Edit Product"> 
          <p className="user"><b> Edit Product Details </b></p>
          <CreateProductForm></CreateProductForm>
          <br></br>
          <div className={"d-flex flex-row list-item Text-color"}>
            <div className={"user flex-fill"}>Product Name</div>
            <div className={"user flex-fill"}>Company</div>
            <div className={"user flex-fill"}>Family</div>
            <div className={"user flex-fill"}>Product Type</div>
            <div className={"user flex-fill"}>Cycle Indicator</div>
          </div>
          {/* {!!state && <pre>{JSON.stringify(state, null, 2)}</pre>} */}
          {!!state && state.map((product) =>  <ListItem key = {product.id} product = {product} buttonVisible="true" onClick={() => handleClick(product)}/>)}
          <br></br>
       </div> 
       <div label="Create Product" className="user"> 
          <p className="user"><b> Add Product Details </b></p>
          <br></br>
              <CreateProductForm></CreateProductForm>
              <div className="user">
              <p><b> Cycle Types </b></p>
              <CycleTypeList buttonVisible="false"></CycleTypeList>
          </div> 
       </div> 
     </Tabs> 
    </div>
  );
};

export const ListItem = ({ product, buttonVisible, onClick }) => {
  return (
    <div className={"d-flex flex-row list-item"}>
       {
      buttonVisible.buttonVisible === "true" ? (
        <div className={"user flex-fill"}><input type="radio" value={product._id} name="productID"/></div>
        ) : (
          <div></div>
        )}
      <div className={"user flex-fill"}>{product.Product}</div>
      <div className={"user flex-fill"}>{product.Family}</div>
      <div className={"user flex-fill"}>{product.Company}</div>
      <div className={"user flex-fill"}>{product.Product_Type}</div>
      <div className={"user flex-fill"}>{product.CycleIndicator === 1 ? "Yes" : "No" }</div>
      {
      buttonVisible.buttonVisible === "true" ? (
           <div>
              <button onClick={onClick} style={
              {backgroundColor:'#194ba88a',
              border:'1px solid black',
              borderRadius:'10px',
              fontSize: 15,
              width:'100px',
              height:'30px',color: 'white'}}>Edit</button>
            <button onClick={onClick} style={
              {backgroundColor:'#194ba88a',
              border:'1px solid black',
              borderRadius:'10px',
              fontSize: 15,
              width:'100px',
              height:'30px',color: 'white'}}>Delete</button>
           </div>
      ) : (
    <div></div>
  )}
    </div>
  );
};
