import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import "./style.css";

export const CycleTypeList = (buttonVisible) => {
  const [state, setState] = useState();
  /**
   * If you want to wait for retrieving the data from server, you can use async here.
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
   */
  const getData = useCallback(async () => {
    const response = await axios.get(
      "http://localhost:4000/availableCycleTypes/"
    );
    const { data } = response;
    setState(data);
    
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  const handleClick = (cycleType) => {
     
  }

  return (
    <div>
       <div className={"d-flex flex-row list-item Text-color"}>
       {
        buttonVisible.buttonVisible === "true" ? (
        <div className={"user flex-fill"}></div>
        ) : (
          <div></div>
        )}
         <div className={"user flex-fill"}>Index Description</div>
         <div className={"user flex-fill"}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Term </div>
         <div className={"user flex-fill"}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Structure</div>
         <div className={"user flex-fill"}>Cycle Floor/Buffer Rate</div>
         <div className={"user flex-fill"}>CapRate Threshold</div>
         <div className={"user flex-fill"}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Status</div>
         <div className={"user flex-fill"}>ProductFamilyId</div>
         <div className={"user flex-fill"}>ReferenceCode</div>
        {
      buttonVisible.buttonVisible === "true" ? (
        <div className={"user flex-fill"}></div>
        ) : (
          <div></div>
        )}
       </div>
       
      {/* {!!state && <pre>{JSON.stringify(state, null, 2)}</pre>} */}
      {!!state && state.map((cycleTypes) => <ListItem key = {cycleTypes.id} cycleTypes = {cycleTypes} buttonVisible={buttonVisible} onClick={() => handleClick(cycleTypes)}/>)}
      <br></br>
      <div>
          {
          buttonVisible.buttonVisible === "true" ? (
              <div>
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
    </div>
  );
};

export const ListItem = ({ cycleTypes, buttonVisible, onClick }) => {
  return (
    <div className={"d-flex flex-row list-item"}>
       {
      buttonVisible.buttonVisible === "true" ? (
        <div className={"user flex-fill"}><input type="radio" value={cycleTypes._id} name="cycleTypesID"/></div>
        ) : (
          <div></div>
        )}
      <div className={"user flex-fill"}>{cycleTypes.Description}</div>
      <div className={"user flex-fill"}>{cycleTypes.Term} {cycleTypes.TermQualifier} </div>
      <div className={"user flex-fill"}>{cycleTypes.Structure}</div>
      <div className={"user flex-fill"}>{cycleTypes.StructureRate}</div>
      <div className={"user flex-fill"}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{cycleTypes.CapRateThreshold}</div>
      <div className={"user flex-fill"}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{cycleTypes.Status}</div>
      <div className={"user flex-fill"}>{cycleTypes.ProductFamilyId}</div>
      <div className={"user flex-fill"}>{cycleTypes.ReferenceCode}</div>
    </div>
  );
};
