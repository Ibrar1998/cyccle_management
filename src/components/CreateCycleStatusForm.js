// import { useState } from 'react'
import './style.css'
// import axios from "axios";

export const CreateCycleStatusForm = ({onSubmit}) => {
  
  return <div>
    <form>
      <br></br>
      <div className="d-flex flex-row">
 
        <div className="flex-column">
          <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Cycle Status Name : &nbsp;&nbsp;&nbsp;</label>
          <input
            type="text"
            name="name"
            />
        </div>

        <div className="flex-column">
          <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Cycle Status Description  : &nbsp;&nbsp;&nbsp;</label>
          <input
            type="text"
            name="description"
          />
        </div>
      </div>
      <div>
      <br></br>
      <button type="submit" className="btn btn-success" style={
       {backgroundColor:'#194ba88a',
        border:'1px solid black',
        borderRadius:'10px',
        fontSize: 15,
        width:'150px',
        height:'30px',color: 'white'}} value="ädd"> Add Cycle Status</button>  &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
      
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
    </form>
  </div>
}