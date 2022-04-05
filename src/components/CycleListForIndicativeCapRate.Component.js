import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import "./style.css";
import MaterialTable from 'material-table'
import { useDispatch } from "react-redux";
export const ListCycleComponentForIndicativeCapRate = (buttonVisible) => {
  // const [ setState] = useState();
  // const history = useHistory()
  const [user, setUser]= useState();
  const dispatch = useDispatch();
  const getData = useCallback(async () => {
    
    const response = await axios.get(
      "http://localhost:4000/cycleList/"
    );
    const { data } = response;
    // setState(data);
    setUser(data);
    console.log(data); 
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  const columns = [
    { title: "Select",render: rowData=>{ 
 
      return  <input onClick={()=>{
        // alert(rowData._id)
        dispatch({ type: 'capratehistoryforcycleid', payload: rowData })
      }} type="radio" value="Male" name="gender" />
    }},
    { title: "Cycle Name", field: "cycleName" ,
    render: (rowData) => (
      <a
        href={`/create-cycle?cycleName=${rowData.cycleName}&id=${rowData._id}`}
      >
        {rowData.cycleName}
      </a>
    ),  
      cellStyle : {
        fontSize : '14px',
      }, 
    },
    { title: "Status", 
    render: (rowData) => {
      if(rowData.status ==='613f16dc8c62eb3b9c8079b3'){
        return 'Published';
      }else if(rowData.status ==='613f09778c62eb3b9c8079b2'){
        return 'PrePublished';
      }
      
    },
    cellStyle : {
      fontSize : '14px'
    } 
  },
    { title: "Start Date", render: rowData=>{ const options = { year: "numeric", month: "long", day: "numeric" }
    return new Date(rowData.startDate).toLocaleDateString(undefined, options)} ,editable: 'never',
    cellStyle : {
      fontSize : '14px'
    }
   },
   { title: "Maturity Date", render: rowData=>{ const options = { year: "numeric", month: "long", day: "numeric" }
   return new Date(rowData.maturityDate).toLocaleDateString(undefined, options)},editable: 'never',
   cellStyle : {
     fontSize : '14px'
   }
  },
  { title: "Fund ID", field: "internalFundID",
  cellStyle : {
    fontSize : '14px'
  }
 },
  { title: "CUSIP", field: "cusip",
  cellStyle : {
    fontSize : '14px'
  }
 },
 { title: "FinalCapRate", field: "finalCapRate",
   cellStyle : {
     fontSize : '14px'
   }
  },
]
  
  return (
    <>
        <div class="user">  
        <br/> 
                  <MaterialTable
                                          title=""
                                          columns={columns}
                                          options={
                                            {
                                              search:false,
                                             // selection: true,
                                              actionsColumnIndex: -1,
                                              showTitle: false,
                                              toolbar:false,
                                             rowStyle:{
                                                backgroundColor:'smokeWhite'

                                             },
                                             headerStyle:{
                                              backgroundColor:'#92b0e98a',
                                              fontSize:'14px',
                                              fontWeight:"bold",
                                              color : 'white'
                                             }
                                            }
                                          }
                                          data={ user  }
                                        />
        </div>
        </>
  );
};
