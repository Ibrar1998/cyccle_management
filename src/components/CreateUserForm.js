// import { useState } from 'react'
import './style.css'
// import axios from "axios";

export const CreateUserForm = ({onSubmit}) => {
  
  return <div>
    <form>
      <div className="d-flex flex-row">
      <div className="flex-column">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
        <div className="flex-column">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
        <div className="flex-column">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
        <div className="flex-column">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
        <div className="flex-column">
          <label>User Description  : &nbsp;&nbsp;&nbsp;</label>
          <input
            type="text"
            name="userDescription"
          />
        </div>
        <div className="flex-column">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
        <div className="flex-column">
          <label> User Name : &nbsp;&nbsp;&nbsp;</label>
          <input
            type="text"
            name="userName"
            />
        </div>
        <div className="flex-column">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
        <div className="flex-column">
          <label> User Email ID : &nbsp;&nbsp;&nbsp;</label>
          <input
            type="text"
            name="email"
            />
        </div>
      </div>
      <div>
      <br></br>
      <button type="submit" className="btn btn-success" style={
       {backgroundColor:'rgb(17, 70, 186)',
        border:'1px solid black',
        borderRadius:'10px',
        fontSize: 15,
        width:'100px',
        height:'30px',color: 'white'}} value="ädd"> Add User</button>  &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
      
      <button type="submit" className="btn btn-success" style={
       {backgroundColor:'rgb(17, 70, 186)',
        border:'1px solid black',
        borderRadius:'10px',
        fontSize: 15,
        width:'100px',
        height:'30px',color: 'white'}} name="btn" value="save"> Save </button> &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;

      <button type="submit" className="btn btn-success"  style={
       {backgroundColor:'rgb(17, 70, 186)',
        border:'1px solid black',
        borderRadius:'10px',
        fontSize: 15,
        width:'100px',
        height:'30px',color: 'white'}} name="btn" value="update"> Update </button>   &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
      
      <button type="submit" className="btn btn-success" style={
       {backgroundColor:'rgb(17, 70, 186)',
        border:'1px solid black',
        borderRadius:'10px',
        fontSize: 15,
        width:'100px',
        height:'30px',color: 'white'}} name="btn" value="clear"> Clear </button>    &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
      
      <button type="submit" className="btn btn-success" style={
       {backgroundColor:'rgb(17, 70, 186)',
        border:'1px solid black',
        borderRadius:'10px',
        fontSize: 15,
        width:'100px',
        height:'30px',color: 'white'}} name="btn" value="back"> Back </button>   
      </div>
    </form>
  </div>
}