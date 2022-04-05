import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import "./style.css";
import {useHistory} from 'react-router-dom'
import moment from 'moment'

export const ListIndicativeCapRateHistoryComponent = (buttonVisible) => {
  const [state, setState] = useState();
  const history = useHistory()
  /**
   * If you want to wait for retrieving the data from server, you can use async here.
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
   */
  const getData = useCallback(async () => {
    const response = await axios.get(
      "http://localhost:4000/indicativeCapRateHistory/"
    );
    const { data } = response;
    setState(data);
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  const handleClick = (indicativeCapRateHistory) => {
    console.log('🚀',indicativeCapRateHistory)
    // option1: pass the indicativeCapRateHistory Data to /create-cycle route
    // you can only use this data inside of your create cycle component
    

    // ADHOC
    // format your indicativeCapRateHistory data here
    /**
     * 
     * ⭐️ -> {
     *    minDepositAmount: {
     *       decimal: 1.23 // what is children key
     *    }
     *    maxDepositAmount: {
     *        decimal: 1.23 // what is children key
     *    }
     * }
     * 
     * -> formatting! ->
     * 
     * {
     *    minDepositAmount: 1.23 // bring the value to parent key
     *    maxDepositAmount: 400
     * }
     */
    console.log('before formatting',indicativeCapRateHistory)
    indicativeCapRateHistory = {
      indicativeCapRate : indicativeCapRateHistory.indicativeCapRate.$number,
      effectiveDate: moment.format(indicativeCapRateHistory.effectiveDate,'mm/dd/yyyy'),
      ...indicativeCapRateHistory
    }
    console.log('after formatting',indicativeCapRateHistory)

    history.push('/create-indicativeCapRateHistory', {
      indicativeCapRateHistory:indicativeCapRateHistory,
    })
    
    // option2: hold the whole data in the App component
    // you can use this data globally in your app

  }
  return (
    <div>
      {/* {!!state && <pre>{JSON.stringify(state, null, 2)}</pre>} */}
      <div className={"d-flex flex-row list-item"}>
        {
      buttonVisible.buttonVisible === "true" ? (
        <div className={"itemheading flex-fill"}></div>
        ) : (
          <div className="itemheading flex-fill"></div>
        )}
        <div className={"itemheading flex-fill"}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cycle Fund ID&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
        <div className={"itemheading flex-fill"}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Effective Date</div>
        <div className={"itemheading flex-fill"}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Indicative CapRate</div>
        {
      buttonVisible.buttonVisible === "true" ? (
        <div className={"itemheading flex-fill"}></div>
        ) : (
          <div></div>
        )}
    </div>

      {!!state && state.map((indicativeCapRateHistory) => 
        <ListItemIndicativeCapRateHistory 
          key={indicativeCapRateHistory._id} 
          indicativeCapRateHistory={indicativeCapRateHistory} 
          buttonVisible={buttonVisible}
          // this is how to pass the call back function into your child component
          // to handle this in your component
          onClick={() => handleClick(indicativeCapRateHistory)}
        />
      )}
      <br></br><br></br>
      <div className={"user flex-fill"}>
            {
            buttonVisible.buttonVisible === "true" ? (
                <div>
                    <button onClick={handleClick} style={
                    {backgroundColor:'#194ba88a',
                    border:'1px solid black',
                    borderRadius:'10px',
                    fontSize: 15,
                    width:'100px',
                    height:'30px',color: 'white'}}>Edit</button>&nbsp;&nbsp;&nbsp;
                    <button onClick={() => handleClick(history.cycle)} style={
                    {backgroundColor:'#194ba88a',
                    border:'1px solid black',
                    borderRadius:'10px',
                    fontSize: 15,
                    width:'100px',
                    height:'30px',color: 'white'}}>Cancel</button>&nbsp;&nbsp;&nbsp; 
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

export const ListItemIndicativeCapRateHistory = ({ indicativeCapRateHistory, buttonVisible, onClick }) => {
  const effectiveDate = moment(indicativeCapRateHistory.effectiveDate).format('MMMM Do YYYY');
  // pass onClick callback into your button element
  return (
  <div className={"d-flex flex-row list-item"}>
      {
      buttonVisible.buttonVisible === "true" ? (
        <div className={"user flex-fill"}><input type="radio" value={indicativeCapRateHistory._id} name="indicativeCapRateHistoryID"/></div>
        ) : (
          <div className={"user flex-fill"}>&nbsp;</div>
        )}
      
      <div className={"user flex-fill"}>{indicativeCapRateHistory.cycleID}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
      <div className={"user flex-fill"}>{effectiveDate}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
      <div className={"user flex-fill"}>{indicativeCapRateHistory.indicativeCapRate}</div>
     
 </div> 
  );
};

