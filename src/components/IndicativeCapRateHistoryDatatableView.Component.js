import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import "./style.css";
import MaterialTable from 'material-table'

export const ViewIndicativeCapRateHistoryComponentDataTable = (props) => {
  const [IndicaptiveList, setIndicaptiveList] = useState();

  const getData = useCallback(async () => {
    const response = await axios.get(
      "http://localhost:4000/indicativeCapRateHistory/"
    );
    const { data } = response;
    setIndicaptiveList(data);

  }, []);
  const getDatabyid = useCallback(async () => {
    const response = await axios.get(
      `http://localhost:4000/indicativeCapRateHistory/capratebycycleid/${props.id}`
    );
    const { data } = response;
    setIndicaptiveList(data);

  }, [props.id]);

 
  useEffect(() => {

    if(props.id){
      getDatabyid();
    }else{
      getData();
    }
  

}, [getData,getDatabyid,props.id]);

 const columns = [

  
    { title: "Effective Date", field: "effectiveDate", render: rowData=>{ const options = { year: "numeric", month: "long", day: "numeric" }
    return new Date(rowData.effectiveDate).toLocaleDateString(undefined, options)} ,editable: 'never',
    cellStyle : {
      fontSize : '14px',
      width: '30px',
      maxWidth: '30px',
      whiteSpace: 'nowrap'
    },
    headerStyle: {
      width:'30px',
      maxWidth: '30px',
      whiteSpace: 'nowrap'
    }
   },
  { title: "Indicative CapRate", field: "indicativeCapRate",
    cellStyle : {
    fontSize : '14px',
    width:'25px',
    maxWidth: '25px',
    whiteSpace: 'nowrap'
  },
      headerStyle: {
      width:'25px',
      maxWidth: '25px',
      whiteSpace: 'nowrap'
    }
 },
  ]

  return (
    <div class="user">  
    <br/> 
    <MaterialTable
                                          columns={columns}
                                          //maxWidth = "70%"
                                         // width ="70%"
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
                                          data={ IndicaptiveList  }
                                        />
              </div>
   
  );
};