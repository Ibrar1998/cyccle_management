import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import "./style.css";
import {useHistory} from 'react-router-dom'
import moment from 'moment'
import { DataGrid } from '@mui/x-data-grid';

export const ListCycleComponent = (buttonVisible) => {
  const [state, setState] = useState();
  const history = useHistory()
  /**
   * If you want to wait for retrieving the data from server, you can use async here.
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
   */
  const getData = useCallback(async () => {
    
    const response = await axios.get(
      "http://localhost:4000/cycleList/"
    );
    const { data } = response;
    setState(data);

    console.log(data); 
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

   const handleClick = (cycle) => {
    console.log('🚀',cycle)
    // option1: pass the cycle Data to /create-cycle route
    // you can only use this data inside of your create cycle component
    

    // ADHOC
    // format your cycle data here
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
    //console.log("⭐️", history.location.state);
    console.log('before formatting',cycle)
    cycle = {
      finalCapRate: state.cycle.finalCapRate.$number,
      startDate: moment.format(cycle.startDate,'mm/dd/yyyy'),
      ...cycle
    }
    console.log('after formatting',cycle)

    history.push('/create-cycle', {
        cycle:cycle,
    })
    
    // option2: hold the whole data in the App component
    // you can use this data globally in your app

  }

  return (
     <div>
       <br></br>
     {
      buttonVisible.buttonVisible === "true" ? ( 
      <div className={"user flex-fill"}>
        <button onClick={() => handleClick(history.cycle)} style={
              {backgroundColor:'#194ba88a',
              border:'1px solid black',
              borderRadius:'10px',
              fontSize: 15,
              width:'100px',
              height:'30px',color: 'white'}}>Edit</button> &nbsp;&nbsp;&nbsp;
        <button onClick={() => handleClick(history.cycle)} style={
              {backgroundColor:'#194ba88a',
              border:'1px solid black',
              borderRadius:'10px',
              fontSize: 15,
              width:'100px',
              height:'30px',color: 'white'}}>Publish</button>&nbsp;&nbsp;&nbsp;
        <button onClick={() => handleClick(history.cycle)} style={
              {backgroundColor:'#194ba88a',
              border:'1px solid black',
              borderRadius:'10px',
              fontSize: 15,
              width:'100px',
              height:'30px',color: 'white'}}>Delete</button>
      </div>
        ) : (
          <div> </div>
        )} 
      <br></br>  
      {/* {!!state && <pre>{JSON.stringify(state, null, 2)}</pre>} */}
      <div className={"d-flex flex-row list-item"}>
      {
      buttonVisible.buttonVisible === "true" ? (
        <div className={"user flex-fill"}></div>
        ) : (
          <div></div>
        )}
        <div className={"itemheading flex-fill"}>Cycle Name</div>
        <div className={"itemheading flex-fill"}>Status</div>
        <div className={"itemheading flex-fill"}>Start Date</div>
        <div className={"itemheading flex-fill"}>Maturity Date</div>
        <div className={"itemheading flex-fill"}>Fund ID</div>
        <div className={"itemheading flex-fill"}>CUSIP</div>
        <div className={"itemheading flex-fill"}>Final Cap Rate</div>
        </div>
          {!!state && state.map((cycle) => 
            <ListItem 
              key={cycle._id} 
              cycle={cycle} 
              buttonVisible={buttonVisible}
              // this is how to pass the call back function into your child component
              // to handle this in your component
              onClick={() => handleClick(cycle)}
            />
          )}
        <div>
          {/*<CycleListDatatableComponent></CycleListDatatableComponent>*/}
        </div>
          </div>
  );
};

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.getValue(params.id, 'firstName') || ''} ${
        params.getValue(params.id, 'lastName') || ''
      }`,
  },
];

export const ListItemDataGrid = (state) => {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={state}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}

export const ListItem = ({ cycle, buttonVisible, onClick }) => {
  const maturityDate = (moment(cycle.maturityDate).format('MMMM Do YYYY') !== "Invalid date" ? moment(cycle.maturityDate).format('MMMM Do YYYY') : "");
  const startDate = (moment(cycle.startDate).format('MMMM Do YYYY') !== "Invalid date" ? moment(cycle.startDate).format('MMMM Do YYYY') : "");
  // pass onClick callback into your button element
  return (
  <div className={"d-flex flex-row list-item"}>
      {
      buttonVisible.buttonVisible === "true" ? (
        <div className={"user flex-fill"}><input type="checkbox" value={cycle._id} name="cycleID"/></div>
        ) : (
          <div></div>
        )}
      <div className={"user flex-fill"}>{cycle.cycleName}</div>
      <div className={"user flex-fill"}>{cycle.status}</div>
      <div className={"user flex-fill"}>{startDate}</div>
      <div className={"user flex-fill"}>{maturityDate}</div>
      <div className={"user flex-fill"}>{cycle.internalFundID}</div>
      <div className={"user flex-fill"}>{cycle.cusip}</div>
      <div className={"user flex-fill"}>{cycle.finalCapRate}</div>
 </div> 
  );
};
 
