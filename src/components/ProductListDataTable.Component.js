import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import "./style.css";
import MaterialTable from 'material-table'
import { toast } from 'react-toastify';

export const ListItemProductDataTable = (buttonVisible) => {
  const [, setState] = useState();
  const [user, setUser]= useState();
  /**
   * If you want to wait for retrieving the data from server, you can use async here.
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
   */
  const getData = useCallback(async () => {
    const response = await axios.get(
      "http://localhost:4000/product/"
    );
    const { data } = response;
    setState(data);
    setUser(data);
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

 const columns = [
    { title: "Product Name", field: "Product" ,
      cellStyle : {
        fontSize : '14px',
      }, 
      
    },
    { title: "Company", field: "Company",
    
    cellStyle : {
      fontSize : '14px'
    } 
  },
  { title: "Family", field: "Family",
  cellStyle : {
    fontSize : '14px'
  }
 },
 { title: "Product Type", field: "StructureRate",
   cellStyle : {
     fontSize : '14px'
   }
  },
  { title: "Cycle Indicator", field: "Product_Type",
   cellStyle : {
     fontSize : '14px'
   }
  },
  { title: "Cycle Indicator", field: "CycleIndicator",
   cellStyle : {
     fontSize : '14px'
   }
  },
  ]

  return (
    <div class="user">  
    <br/> 
    <MaterialTable
                                          title=""
                                          columns={columns}
                                          options={
                                            {
                                              search:true,
                                              actionsColumnIndex: -1,
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
                                          editable= {
                                            {
                                              onRowUpdate: (newData, oldData) =>
                                              new Promise((resolve, reject) => {
                                                setTimeout(() => {
                                                  const dataUpdate = [...user];                                    
                                                const index = oldData.tableData.id;
                                                
                                                  dataUpdate[index] = newData;
                                                  setUser(dataUpdate);
                                                  
                                                  user[user.indexOf(oldData)] = newData;
                                                  
                                                  axios.put('http://localhost:4000/product/update/'+newData._id,newData)
                                                  .then(res=>{
                                                    if(res.status===200){
                                                    toast.success('Updated Product Successfully');
                                                    }
                                                  });
                                                  
                                                  resolve();
                                                }, 1000)
                                              }),
                                              onRowDelete:  (newData, oldData) =>
                                              new Promise(resolve => {
                                                  setTimeout(() => {
                                                    user[user.indexOf(oldData)] = newData;
                                                    const dataDelete = [...user];

                                                    var elementPos = dataDelete.map(function(x) {return x._id; }).indexOf(newData._id);

                                                    dataDelete.splice(elementPos, 1);
                                                    setUser([...dataDelete]);
                                             
                                                  resolve();
                                                      axios.delete(`http://localhost:4000/product/delete/${newData._id}`)
                                                      .then(res=>{
                                                        if(res.status===200){
                                                         
                                                          toast.success('Deleted Product Successfully');
                                                        }
                                                      }).catch(err=>console.log(err));
                                                      
                                              }, 1000);
                                          }),
                                            
                                            }
                                          }
                                          data={ user  }
                                        />
              </div>
   
  );
};
