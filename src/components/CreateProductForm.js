// import { useState } from 'react'
import './style.css'
// import axios from "axios";

export const CreateProductForm = ({onSubmit}) => {
  
  return <div>
    <form>
      
      <div className="user flex-column">
      <button type="submit" className="btn btn-success" style={
       {backgroundColor:'#194ba88a',
        border:'1px solid black',
        borderRadius:'10px',
        fontSize: 15,
        width:'100px',
        height:'30px',color: 'white'}} value="ädd"> Add Product</button>  &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
      
      <button type="submit" className="btn btn-success" style={
       {backgroundColor:'#194ba88a',
        border:'1px solid black',
        borderRadius:'10px',
        fontSize: 15,
        width:'100px',
        height:'30px',color: 'white'}} name="btn" value="save"> Save </button> &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;

      <button type="submit" className="btn btn-success"  style={
       {backgroundColor:'#194ba88a',
        border:'1px solid black',
        borderRadius:'10px',
        fontSize: 15,
        width:'100px',
        height:'30px',color: 'white'}} name="btn" value="update"> Update </button>   &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
      
      <button type="submit" className="btn btn-success" style={
       {backgroundColor:'#194ba88a',
        border:'1px solid black',
        borderRadius:'10px',
        fontSize: 15,
        width:'100px',
        height:'30px',color: 'white'}} name="btn" value="clear"> Clear </button>    &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
      
      <button type="submit" className="btn btn-success" style={
       {backgroundColor:'#194ba88a',
        border:'1px solid black',
        borderRadius:'10px',
        fontSize: 15,
        width:'100px',
        height:'30px',color: 'white'}} name="btn" value="back"> Back </button>   
     </div>   
      <br></br><br></br>
      <div className="d-flex flex-row">
        <div className="user flex-column">
          <label> Product Name : &nbsp;&nbsp;&nbsp;</label>
          <input
            type="text"
            name="Product"
            />
        </div>
        <div className="user flex-column">
          <label> Product Company  : &nbsp;&nbsp;&nbsp;</label>
          <input
            type="text"
            name="Company"
          />
        </div>
        <div className="user flex-column">
          <label> Product Family  : &nbsp;&nbsp;&nbsp;</label>
          <input
            type="text"
            name="Family"
          />
        </div>
        <div className="user flex-column">
          <label> Product Type  : &nbsp;&nbsp;&nbsp;</label>
          <input
            type="text"
            name="Product_Type"
          />
        </div>
        <div className="user flex-column">
          <label> Product Cycle Indicator  : &nbsp;&nbsp;&nbsp;</label>
          <input
            type="number"
            name="CycleIndicator"
          />
        </div>
      </div>
      <div>
      <br></br>
      
      </div>
    </form>
  </div>
}