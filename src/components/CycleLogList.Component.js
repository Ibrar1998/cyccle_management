import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import "./style.css";
// import moment from 'moment'

export const ListCycleLogComponent = (buttonVisible) => {
  const [state, setState] = useState();

  /**
   * If you want to wait for retrieving the data from server, you can use async here.
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
   */
  const getData = useCallback(async () => {
    const response = await axios.get(
      "http://localhost:4000/cycleLog/"
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
      {/* {!!state && <pre>{JSON.stringify(state, null, 2)}</pre>} */}
      <div className={"d-flex flex-row list-item"}>
      {
      buttonVisible === "true" ? (
        <div className={"itemheading flex-fill"}>Select Radio</div>
        ) : (
          <div></div>
        )}
        <div className={"itemheading flex-fill"}>Cycle Log ID</div>
        <div className={"itemheading flex-fill"}>Cycle Log Name</div>
        <div className={"itemheading flex-fill"}>Cycle Log Description</div>
        <div className={"itemheading flex-fill"}>Cycle Operation</div>
        <div className={"itemheading flex-fill"}>Modified User Name</div>
        <div className={"itemheading flex-fill"}>Modified User Email ID</div>
        <div className={"itemheading flex-fill"}>Modified User Date</div>
        {
      buttonVisible === "true" ? (
        <div className={"itemheading flex-fill"}>Choose Button</div>
        ) : (
          <div></div>
        )}
    </div>

      {!!state && state.map((cycleLog) => 
        <ListItemCycleLog 
          key={cycleLog._id} 
          cycleLog={cycleLog} 
          buttonVisible={buttonVisible}
          // this is how to pass the call back function into your child component
          // to handle this in your component
          onClick={() => handleClick(cycleLog)}
        />
      )}
    </div>
  );
};

export const ListItemCycleLog= ({ cycleLog, buttonVisible, onClick }) => {
  return (
  <div className={"d-flex flex-row list-item-cycle"}>
      <div className={"user flex-fill"}><input type="radio" value={cycleLog._id} name="id"/> </div>
      <div className={"user flex-fill"}>{cycleLog.name}</div>
      <div className={"user flex-fill"}>{cycleLog.description}</div>
      <div className={"user flex-fill"}>{cycleLog.operation}</div>
      <div className={"user flex-fill"}>{cycleLog.userName}</div>
      <div className={"user flex-fill"}>{cycleLog.userEmailId}</div>
      <div className={"user flex-fill"}>{cycleLog.userModifiedDate}</div>
      <div className={"user flex-fill"}>
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
 </div> 
  );
};

