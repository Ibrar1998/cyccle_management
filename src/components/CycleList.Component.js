// import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import "./style.css";
// import {useHistory} from 'react-router-dom'
// import moment from 'moment'
import MaterialTable from "material-table";
import { toast } from "react-toastify";
// import { withThemeCreator } from "@mui/styles";
import PropTypes from "prop-types";

import { useDispatch, useSelector } from "react-redux";
import { fetchCycleList, editCycle, deleteCycle } from "../redux/thunks";
// import querystring from 'querystring'

export const ListCycleComponent = (buttonVisible) => {

  const { cycleList } = JSON.parse(
    JSON.stringify(useSelector((state) => state.cycleSlice))
  );
  const [cycleData, setCycleData] = useState([]);



  const dispatch = useDispatch(); /// hook provided by the react-redux

  const getData = useCallback(async () => {
    dispatch(fetchCycleList()).then((data) => {
     
    }); // it will dispatch and call the api
    
  }, [dispatch]);

  useEffect(() => {
    getData();
  }, [cycleData, getData]);

 

  const columns = [
    {
      title: "Cycle Name",
      field: "cycleName",
      render: (rowData) => (
        <a
          href={`/create-cycle?cycleName=${rowData.cycleName}&id=${rowData._id}`}
        >
          {rowData.cycleName}
        </a>
      ),

      cellStyle: {
        fontSize: "14px",
      },
    },
    {
      title: "Status",
      render: (rowData) => {
        if(rowData.status ==='613f16dc8c62eb3b9c8079b3'){
          return 'Published';
        }else if(rowData.status ==='613f09778c62eb3b9c8079b2'){
          return 'PrePublished';
        }
        
      },

      cellStyle: {
        fontSize: "14px",
      },
    },
    {
      title: "Start Date",
      render: (rowData) => {
        const options = { year: "numeric", month: "long", day: "numeric" };
        return new Date(rowData.startDate).toLocaleDateString(
          undefined,
          options
        );
      },
      editable: "never",
      cellStyle: {
        fontSize: "14px",
      },
    },
    {
      title: "Maturity Date",
      render: (rowData) => {
        const options = { year: "numeric", month: "long", day: "numeric" };
        return new Date(rowData.maturityDate).toLocaleDateString(
          undefined,
          options
        );
      },
      editable: "never",
      cellStyle: {
        fontSize: "14px",
      },
    },
    {
      title: "Fund ID",
      field: "internalFundID",
      cellStyle: {
        fontSize: "14px",
      },
    },
    {
      title: "CUSIP",
      field: "cusip",
      cellStyle: {
        fontSize: "14px",
      },
    },
    {
      title: "FinalCapRate",
      field: "finalCapRate",
      cellStyle: {
        fontSize: "14px",
      },
    },
  ];

  return (
    <>
      <br></br>
      <p className="user">
        <b>Cycle Management List</b>
      </p>
      <div class="user">
        <br />
        <MaterialTable
          title=""
          columns={columns}
          options={{
            search: true,
            actionsColumnIndex: -1,
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
                  dispatch(editCycle(newData)).then((data) => {
                    if (data.payload === "OK") {
                      toast.success(
                        "Updated Cycle Data Successfully! , Cycle Name : " +
                          newData.cycleName
                      );
                    }
                    setCycleData(JSON.parse(JSON.stringify([])));
                  });

                  resolve();
                }, 2000);
              });
            },

            onRowDelete: (oldData) => {
              return new Promise((resolve, reject) => {
                return dispatch(deleteCycle(oldData._id)).then((data) => {
                  setCycleData(JSON.parse(JSON.stringify([])));
   
                  resolve();
                });
              });
            },
          }}
          data={cycleList}
        />
      </div>
    </>
  );
};

ListCycleComponent.propTypes = {
  buttonVisible: PropTypes.any,
};
