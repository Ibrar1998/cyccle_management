import { useCallback, useEffect, useState } from "react";
import "./style.css";
import MaterialTable from "material-table";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import {
  CycleTypeList,
  EditCycleListType,
  CycleTypeListDelete,
} from "../redux/thunks";

export const CycleTypeListDataTable = (props) => {
  const [, setUser] = useState();
  const { cycletype } = JSON.parse(
    JSON.stringify(useSelector((state) => state.cycleTypeSlice))
  );
  console.log(cycletype);
  console.log(props.search);
  const [cycleData, setCycleData] = useState([]);
  const dispatch = useDispatch();


  const getcycletype = useCallback(
    async (data) => {
      dispatch(CycleTypeList()).then((data) => {
        setUser(data.data);
      });
      
    },
    [dispatch]
  );
  useEffect(() => {
    getcycletype();
  }, [cycleData, getcycletype]);

  

  const columns = [
    props.search==='false'?  { title: "Select",render: rowData=>{ 
 
      return  <input onClick={()=>{
       // alert(rowData._id)
       //       dispatch({ type: 'hyperlink', payload: true});
        dispatch({ type: 'seteditcycle', payload: rowData })
       
             dispatch({ type: 'navigationtab', payload: 1});
        
          
      }} type="radio" value="Male" name="gender" />
    }}
    :{},
    // radio button added
    {
      title: "Index Description",
      field: "Description",
      render: (rowData) => (
        <a
          href={`/cycle-types`}
          
          onClick={(event)=>{
            // alert(rowData._id)
            
             dispatch({ type: 'seteditcycle', payload: rowData })
           
             dispatch({ type: 'navigationtab', payload: 1});
           
         
             event.preventDefault();
           }}
        >
          {rowData.Description}
        </a>
      ),
      cellStyle: {
        fontSize: "14px",
      },
    },
    {
      title: "Term ",
      field: "Term",

      cellStyle: {
        fontSize: "14px",
      },
    },
    {
      title: "Structure",
      field: "Structure",
      cellStyle: {
        fontSize: "14px",
      },
    },
    {
      title: "Floor/Buffer Rate",
      field: "StructureRate",
      cellStyle: {
        fontSize: "14px",
      },
    },
    {
      title: "CapRate Threshold",
      field: "CapRateThreshold",
      cellStyle: {
        fontSize: "14px",
      },
    },
    {
      title: "Status",
      field: "Status",
      cellStyle: {
        fontSize: "14px",
      },
    },
    {
      title: "ProductId",
      field: 'ProductFamilybyname',
      cellStyle: {
        fontSize: "14px",
      },
      editable: 'never'
    },
    {
      title: "RefCode",
      field: "ReferenceCode",
      cellStyle: {
        fontSize: "14px",
      },
    },
  ];

  return (
    <div class="user">
      <br />
      <MaterialTable
        title=""
        columns={columns}
        actions={[
          {
            icon: "cancel",
            tooltip: "cancel",
            onClick: (event, rowData) =>{
              new Promise((resolve, reject) => {
                if (window.confirm("Are Your Sure You want to Cancel this!!?")) {
                  setTimeout(() => {
                    rowData.Status = "Cancelled";
                    dispatch(EditCycleListType(rowData)).then((data) => {
                      setCycleData(JSON.parse(JSON.stringify([])));
                      if (data.payload === "OK") {
                        toast.success(
                          "Updated Cycle Data Successfully! , Cycle Description : " +
                          rowData.Description
                        );
                      }
                    });
  
                    resolve();
                  }, 1000);
                }
               
              })
            },
          },
        ]}
        options={{
          search:props.search==='false'?false:true,
          actionsColumnIndex: -1,
          pageSize:7,
          pageSizeOptions:[7,49,49],
          rowStyle: {
            backgroundColor: "smokeWhite",
          },
          headerStyle: {
            backgroundColor: "#92b0e98a",
            fontSize: "14px",
            fontWeight: "bold",
            color: "white",
          },
        }}
        editable={{
    
          onRowUpdate: (newData, oldData) => {
            return new Promise((resolve, reject) => {
              setTimeout(() => {
                dispatch(EditCycleListType(newData)).then((data) => {
                  console.log(data);
                  setCycleData(JSON.parse(JSON.stringify([])));
                  if (data.payload === "OK") {
                    toast.success(
                      "Updated Cycle Data Successfully! , Cycle Description : " +
                        newData.Description
                    );
                  }
                });

                resolve();
              }, 2000);
            });
          },
         

          onRowDelete: (oldData) => {
            return new Promise((resolve, reject) => {
              return dispatch(CycleTypeListDelete(oldData._id)).then((data) => {
                setCycleData(JSON.parse(JSON.stringify([])));
                if (data.payload === "OK") {
                  toast.success(
                    "Deleted Cycle Data Successfully! , Cycle Description : " +
                      oldData.Description
                  );
                }
                resolve();
              });
            });
          },
        }}
        data={cycletype}
      />
    </div>
  );
};
