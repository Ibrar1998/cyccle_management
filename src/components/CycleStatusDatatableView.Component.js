
import { useEffect, useState } from "react";
import "./style.css";
import MaterialTable from 'material-table'
import {useDispatch,useSelector} from "react-redux";
import {CycleStatus,CycleStatusbyId} from "../redux/thunks"


export const ViewCycleStatusComponentDataTable = () => {

  

  const [cyclestatus, setcyclestatus] = useState();
  const {cyclestatusid} =useSelector(state=>state.selectedcycletype);
  const dispatch=useDispatch();
  
  
  useEffect(() => {

      if(cyclestatusid){
        dispatch(CycleStatusbyId(cyclestatusid)).then((res) =>{
          setcyclestatus(res.payload);
           });
      }else{
        dispatch(CycleStatus()).then((res) =>{
          setcyclestatus(res.payload);
           });
      }
    
  
  }, [dispatch,cyclestatusid]);

 const columns = [
  
    { title: "Status", field: "name",
      cellStyle : {
        fontSize : '14px',
        width: '10px',
        maxWidth: '10px',
        whiteSpace: 'nowrap'
      },
      headerStyle: {
        width:'10px',
        maxWidth:'10px',
        whiteSpace: 'nowrap'
      }
    },
{ title: "Description", field: "description",
cellStyle : {
  fontSize : '14px',
  width: '30px',
  maxWidth: '30px',
  whiteSpace: 'nowrap'
},
headerStyle: {
  width:'30px',
  maxWidth:'30px',
  whiteSpace: 'nowrap'
}
},
  ]

  return (
    <div class="user">  
    <br/>
    <MaterialTable
                                          columns={columns}
                                          options={
                                            {
                                              search:false,
                                              showTitle: false,
                                              toolbar:false,
                                              actionsColumnIndex: -1,
                                              pageSize:3,
                                              pageSizeOptions:[3,9,9],
                                             rowStyle:{
                                                backgroundColor:'smokeWhite',
                                             },
                                             headerStyle:{
                                              backgroundColor:'#92b0e98a',
                                              fontSize:'14px',
                                              fontWeight:"bold",
                                              color : 'white'
                                             },
                                             tableLayout: "fixed"
                                            }
                                          }
                                          data={cyclestatus}
                                        />
              </div>
   
  );
};

