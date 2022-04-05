import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import "./style.css";
// import moment from 'moment'
import { CreateCycleStatusForm } from "./CreateCycleStatusForm"
import Tabs from '../UIControls/Tabs';

export const CycleStatusComponent = (buttonVisible) => {
  const [state, setState] = useState();

  /**
   * If you want to wait for retrieving the data from server, you can use async here.
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
   */
  const getData = useCallback(async () => {
    const response = await axios.get(
      "http://localhost:4000/cycleStatus/"
    );
    const { data } = response;
    setState(data);
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  const handleClick = (cycleStatus) => {
    console.log('🚀', cycleStatus)
 
  }
  return (
    <div>
     <Tabs> 
     <div label="Cycle Status List"> 
          <p><b> Cycle Status List </b></p>
          <ListItemHeadingCycleStatus buttonVisible="false"> </ListItemHeadingCycleStatus>
           {!!state && state.map((cycleStatus) => 
            <ListItemCycleStatus 
              key={cycleStatus._id} 
              cycleStatus={cycleStatus} 
              buttonVisible={buttonVisible}
              // this is how to pass the call back function into your child component
              // to handle this in your component
              onClick={() => handleClick(cycleStatus)}
            />
          )}
       </div> 
       <div label="Edit Cycle Status"> 
          <p><b> Edit Cycle Status </b></p>
          <ListItemHeadingCycleStatus buttonVisible="true"> </ListItemHeadingCycleStatus>
          {/* {!!state && <pre>{JSON.stringify(state, null, 2)}</pre>} */}
         {!!state && state.map((cycleStatus) => 
            <ListItemCycleStatus 
              key={cycleStatus._id} 
              cycleStatus={cycleStatus} 
              buttonVisible={buttonVisible}
              // this is how to pass the call back function into your child component
              // to handle this in your component
              onClick={() => handleClick(cycleStatus)}
            />
          )}
          <div>
              {
              buttonVisible.buttonVisible === "true" ? (
                  <div>
                    <br></br>
                      <button onClick={handleClick} style={
                      {backgroundColor:'#194ba88a',
                      border:'1px solid black',
                      borderRadius:'10px',
                      fontSize: 15,
                      width:'100px',
                      height:'30px',color: 'white'}}>Edit</button>
                    <button onClick={handleClick} style={
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
          <CreateCycleStatusForm></CreateCycleStatusForm>
       </div> 
       <div label="Create Cycle Status"> 
          <p><b> Add Cycle Status </b></p>
              <CreateCycleStatusForm></CreateCycleStatusForm>
      </div> 
     </Tabs> 
    </div>
  );
};

export const ListItemHeadingCycleStatus = (buttonVisible) => {
  return(
    <div className={"d-flex flex-row list-item"}>
            {
            buttonVisible.buttonVisible === "true" ? (
              <div className={"itemheading flex-fill"}></div>
              ) : (
                <div></div>
              )}
              <div className={"itemheading flex-fill"}>Cycle Status Name</div>
              <div className={"itemheading flex-fill"}>Cycle Status Description</div>
              {
            buttonVisible.buttonVisible === "true" ? (
              <div className={"itemheading flex-fill"}></div>
              ) : (
                <div></div>
              )}
      </div>        
  );
}

export const ListItemCycleStatus= ({ cycleStatus, buttonVisible, onClick }) => {
  return (
  <div className={"d-flex flex-row list-item-cycle"}>
      <div className={"user flex-fill"}> 
        {
        buttonVisible.buttonVisible === "true" ? (
          <div className={"user flex-fill"}><input type="radio" value={cycleStatus._id} name="id"/></div>
          ) : (
           <div></div>
          )}
       </div>  
      <div className={"user flex-fill"}>{cycleStatus.name}</div>
      <div className={"user flex-fill"}>{cycleStatus.description}</div>
 </div> 
  );
};

