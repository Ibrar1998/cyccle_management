
import "../App.css";
import { CreateCycleTypeForm } from './CreateCycleTypeForm'
import { CycleTypeListDataTable } from './CycleTypeListDataTable.Component'
import Footer from './Footer';

import React from "react";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import {useSelector,useDispatch} from "react-redux";
import { useEffect} from 'react';

export const CycleType  = () => {
  
  const {navigationtab} =useSelector(state=>state.selectedcycletype);
  const [value, setValue] = React.useState(navigationtab);
  const dispatch=useDispatch();
  useEffect(() => {
    setValue(navigationtab)
  }, [value,navigationtab])
 

  const activetab = { 
     backgroundColor:'#4776d3',
    //  marginTop: 1,
    //  marginBottom: 1,
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
          //  paddingRight:"25%",
            height:'3%',
            marginBottom: 2,
          }}
          value={navigationtab}
           indicatorColor="primary"
          onChange={(event, newValue) => {
             setValue(newValue);
            dispatch({ type: 'navigationtab', payload: newValue})
          
          }}
        >
         <Tab 
          style={navigationtab===0?activetab:tablistitem} 
           label="CycleType List" onClick={()=>{
          
         //   dispatch({ type: 'navigationtab', payload: 0})
          }} />
        <Tab 
          style={navigationtab===1?activetab:tablistitem} 
           label="Edit Cycle Type"  onClick={()=>{ 
            // dispatch({ type: 'seteditcycle', payload: '' })
      //    dispatch({ type: 'navigationtab', payload: 1})
        
          }}/>
       
        <Tab  
        style={navigationtab===2?activetab:tablistitem} 
           label="Create Cycle Type" onClick={()=>{ 
            
         // dispatch({ type: 'navigationtab', payload: 2})
       
          }} />
        </Tabs>
        </ol>
      

    
      
    </div>
    <br></br>
    
    <div className="tab-content">
            
      { 
        value===0?
        <CycleTypeListDataTable search={'true'} ></CycleTypeListDataTable>
        :value===1?
        <>
        <CreateCycleTypeForm  edit={'true'}></CreateCycleTypeForm>
        <CycleTypeListDataTable search={'false'}  ></CycleTypeListDataTable>
        </>
        :
        <CreateCycleTypeForm  edit={'false'}></CreateCycleTypeForm>
        
        }
    </div>
    <Footer/>
    </>
  );
};
  

