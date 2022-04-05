
import "../App.css";
import {IndicativeCapRateHistoryForm} from './IndicativeCapRateHistoryForm'
import { ListIndicativeCapRateHistoryComponentDataTable } from "./IndicativeCapRateHistoryListDataTable.Component"
import Footer from './Footer';

import React from "react";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import {useSelector,useDispatch} from "react-redux";
import { useEffect} from 'react';
export const CreateIndicativeCapRateHistory = () => {

  const {indicaptivetab} =useSelector(state=>state.selectedcycletype);
  const [value, setValue] = React.useState(indicaptivetab);
  const dispatch=useDispatch();
  useEffect(() => {
    setValue(indicaptivetab)
  }, [value,indicaptivetab])
 

  const activetab = { 
     backgroundColor:'#4776d3',
     TextColor:'black',
   border:'1px solid ',
    borderColor:'#4776d3',
    borderWidth: '2px 2px 2px 2px',
    fontSize: 14,
    textTransform:'none',
    height: 20
  }
  const tablistitem = { 
    display: 'inline-block',
    marginTop: 1,
    textTransform:'none',
    TextColor:'black',
    listStyle: 'none',
    marginBottom: 1,
    padding: '0.5rem 0.75rem',
    backgroundColor: '#1c39888a',
    fontSize: 14,
    height: 20
 }
  
  return (
    
    <>
    <div
    className="tabs " 
    style={{height:'42px',}}
    >
    <ol className="tab-list">
        <Tabs 
             
          style={{
            paddingLeft:'31%',
            height:'3%',
            marginBottom: 2,
          }}
          value={indicaptivetab}
           indicatorColor="primary"
          onChange={(event, newValue) => {
             setValue(newValue);
            dispatch({ type: 'indicaptivetab', payload: newValue})
          
          }}
        >
         <Tab 
          style={indicaptivetab===0?activetab:tablistitem} 
           label="List Indicative Cap Rate"  />
        <Tab 
          style={indicaptivetab===1?activetab:tablistitem} 
           label="Edit Indicative Cap Rate" />
       
        <Tab  
        style={indicaptivetab===2?activetab:tablistitem} 
           label="Create Indicative CapRate"  />
        </Tabs>
        </ol>
      

    
      
    </div>
    <br></br>
    
    <div className="tab-content">
            
      { 
        value===0?
        <ListIndicativeCapRateHistoryComponentDataTable search={true}></ListIndicativeCapRateHistoryComponentDataTable>
        :value===1?
        <>
        <br></br> 
           <p className="user"><b> Edit Indicative Cap Rate </b></p>
          <IndicativeCapRateHistoryForm buttonVisible="true"></IndicativeCapRateHistoryForm>
           <ListIndicativeCapRateHistoryComponentDataTable search={false}></ListIndicativeCapRateHistoryComponentDataTable>
        </>
        :
        <>
        <p className="user"><b> Create Indicative Cap Rate History </b></p>
        <IndicativeCapRateHistoryForm buttonVisible="true"></IndicativeCapRateHistoryForm>
        </>
        
        }
    </div>
    <Footer/>
    </>
  );
  // return (
  //   <>
  //    <div>
  //     <Tabs style={{
  //                     color: "black",
  //                     backgroundColor: '#white',
  //                   }}> 

  //     <div label="List Indicative Cap Rate"> 
  //         <p className="user"><b> List Indicative Cap Rate </b></p>
  //       <ListIndicativeCapRateHistoryComponentDataTable search={true}></ListIndicativeCapRateHistoryComponentDataTable>
  //      </div>               
   
  //      <div label="Edit Indicative Cap Rate"> 
  //         <br></br> 
  //         <p className="user"><b> Edit Indicative Cap Rate </b></p>
  //         <IndicativeCapRateHistoryForm buttonVisible="true"></IndicativeCapRateHistoryForm>
  //         <ListIndicativeCapRateHistoryComponentDataTable search={false}></ListIndicativeCapRateHistoryComponentDataTable>
  //      </div> 

  //     <div label="Create Indicative CapRate"> 
  //     <p className="user"><b> Create Indicative Cap Rate History </b></p>
  //      <IndicativeCapRateHistoryForm buttonVisible="true"></IndicativeCapRateHistoryForm>
  //      </div> 
             
  //      </Tabs>
      
  //     </div>    
  //   </>
    
  // );
};

export const ListItemIndicativeCapRateHistory = ({ indicativeCapRateHistory, onClick }) => {
    // pass onClick callback into your button element
    return (
    <div className={"d-flex flex-row list-item"}>
        <div className={"user flex-fill"}>{indicativeCapRateHistory.effectiveDate}</div>
        <div className={"user flex-fill"}>{indicativeCapRateHistory.indicativeCapRate}</div>
   </div> 
  );
};
  

