
import { useCallback, useEffect, useState } from "react";
import "./style.css";
import MaterialTable from "material-table";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";


import {
  IndicaptiveCapRateList,
  EditIndicaptiveCapRateList,
  IndicaptiveCapRateListDelete,
} from "../redux/thunks";
export const ListIndicativeCapRateHistoryComponentDataTable = (props) => {
  const [user, setUser] = useState();
  const [IndicaptiveList, setIndicaptiveList] = useState([]);
  const dispatch = useDispatch();
  const { indicaptivelist } = JSON.parse(
    JSON.stringify(useSelector((state) => state.indicaptiveCapRateSlice))
  );
  console.log(indicaptivelist);
  const getcycletype = useCallback(
    async (data) => {
      dispatch(IndicaptiveCapRateList()).then((data) => {
        console.log(data.payload);
      });
    },
    [dispatch]
  );

 

  useEffect(() => {
    getcycletype();
  }, [IndicaptiveList,getcycletype]);

  

  const columns = [
    props.search === "false"
      ? {
          title: "Select",
          render: (rowData) => {
            return (
              <input
                onClick={() => {
                  console.log(rowData._id);
                  dispatch({ type: "setdata", payload: rowData });
                }}
                type="radio"
                value="Male"
                name="gender"
              />
            );
          },
        }
      : {},
    {
      title: "Cycle ID",
      field: "cyclebyname",
      editable: 'never'
    },
    {
      title: "Effective Date",
      field: "effectiveDate",
      render: (rowData) => {
        const options = { year: "numeric", month: "long", day: "numeric" };
        return new Date(rowData.effectiveDate).toLocaleDateString(
          undefined,
          options
        );
      },
      cellStyle: {
        fontSize: "14px",
      },
    },
    {
      title: "Indicative CapRate",
      field: "indicativeCapRate",
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
        options={{
          search: props.search === "false" ? false : true,
          actionsColumnIndex: -1,
          pageSize: 3,
          pageSizeOptions: [3, 9, 9],
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
          onRowAdd: (newData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                setUser([...user, newData]);

                resolve();
              }, 1000);
            }),
         
          onRowUpdate :props.search? (newData, oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                dispatch(EditIndicaptiveCapRateList(newData)).then((data) => {
                  setIndicaptiveList(JSON.parse(JSON.stringify([])));
                  if (data.payload === "OK") {
                    toast.success("Updated Cycle Data Successfully!");
                  }
                });
                

                resolve();
              }, 1000);
            }):null,
          onRowDelete: (oldData) => {
            return new Promise((resolve, reject) => {
              setTimeout(() => {
                return dispatch(IndicaptiveCapRateListDelete(oldData._id)).then(
                  (data) => {
                    console.log(data);
                    setIndicaptiveList(JSON.parse(JSON.stringify([])));
                    if (data.payload === "OK") {
                      toast.success(
                        "Deleted Cycle Data Successfully! , Cycle Description : " +
                          oldData.Description
                      );
                    }
                    resolve();
                  }
                );
              }, 1000);
            });
          },
         
        }}
        data={indicaptivelist}
      />
       <br /> <br /> <br />
    </div>
  );
};
