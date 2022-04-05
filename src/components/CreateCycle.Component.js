import { useState, useCallback, useEffect } from "react";
import "./CreateCycle.css";
import { ViewIndicativeCapRateHistoryComponentDataTable } from "./IndicativeCapRateHistoryDatatableView.Component";
import { ViewCycleStatusComponentDataTable } from "./CycleStatusDatatableView.Component"
import 'bootstrap/dist/css/bootstrap.min.css';
import moment from "moment";
import "./style.css";
import Select from 'react-dropdown-select'
import PropTypes from 'prop-types';
import { toast } from "react-toastify";
import {useDispatch,useSelector} from "react-redux";
import {
  createCycle,
  ProductListCycleType,
  CycleTypesDropDownList,
  FetchSingleCycleFromCycleList,
  AvailableCycleTypebyID,
  ProductListCycleTypebyID,
  editCycle
} from "../redux/thunks"

function CreateCycle() {
 

  return (
    <div align="center">
      <div>
        <CreateCycleManagementForm></CreateCycleManagementForm>
      </div>
      <br></br>
   
    </div>
  );
}

export default CreateCycle;

function CreateCycleManagementForm(props) {
  // This is used for dispatching the action like an api call
 

  const {setcyclestatus} =useSelector(state=>state.selectedcycletype);
  const [isedit, setIsedit] = useState(false);
  const [ComboCycleId, setComboCycleId] = useState('');
  const [ComboProductId, setComboProductId] = useState('');
  console.log(setcyclestatus);
  const dispatch=useDispatch();
  const [selectedCycle, setSelectedCycle] = useState('');
  const [SelectProductType, setSelectProductType] = useState('');
  const [Cycledata, setCycledata] = useState([]);
  const [ProductData, setProductData] = useState([]);
  const {cycleList}=useSelector(state=>state.cycleSlice);  // From redux useSelctor same as the name given in store
  const [CycleId, setCycleId] = useState('')
  // if you have a initialData use this one,
  const [_finalcaprate, set_finalcaprate] = useState(1);
  const [_status, set_status] = useState('613f09778c62eb3b9c8079b2');
  const [_internalFundID, set_internalFundID] = useState(1);
  const [cycleName, setCycleName] = useState('');
  const [_cusip, set_cusip] = useState('');
  const [statusDate] = useState('')
  const [_startDate, set_startDate] = useState(moment().utcOffset("+05:30").format("YYYY-MM-DD hh:mm:ss a"));
  const [maturityDate, setMaturityDate] = useState(moment().utcOffset("+05:30").format("YYYY-MM-DD hh:mm:ss a"))
  //

  const clearcycleform=(event)=>{
    event.preventDefault();
    setCycleName('');
    set_startDate(moment().utcOffset("+05:30").format("YYYY-MM-DD hh:mm:ss a"));
    set_status('613f09778c62eb3b9c8079b2');
    setMaturityDate(moment().utcOffset("+05:30").format("YYYY-MM-DD hh:mm:ss a"));
    set_internalFundID(1);
    set_finalcaprate(1);
    set_cusip(''); 
  }


console.log(cycleList);

  useEffect(() => {
   const queryParams = new URLSearchParams(window.location.search);
   const _id = queryParams.get('id');
   setCycleId(_id);
   

   const cycleName = queryParams.get('cycleName');
   console.log(cycleName,_id);
   if(_id){
    setIsedit(true);
    dispatch(FetchSingleCycleFromCycleList(_id)).then((res) =>{
          //  console.log(res);

          setCycleName(res.payload.cycleName);
          set_startDate(res.payload.startDate);
          set_status(res.payload.status);
          setMaturityDate(res.payload.maturityDate);
          set_internalFundID(res.payload.internalFundID);
          set_finalcaprate(res.payload.finalCapRate);
          set_cusip(res.payload.cusip);
          dispatch({ type: 'cyclestatusid', payload: res.payload.status });
          dispatch(AvailableCycleTypebyID(res.payload.availableCycleTypes)).then((res)=>{
            setSelectedCycle(res.payload.Description);
          });
          dispatch(ProductListCycleTypebyID(res.payload.productTypes)).then((res)=>{
            setSelectProductType(res.payload[0].Product);
          });
      });
   }

   return ()=>{
     dispatch({ type: 'cyclestatusid', payload: '' })
     dispatch({ type: 'navigationtab', payload: 0})
   }
}, [SelectProductType,dispatch]);

  const getProductData = useCallback(async() => {
  
    dispatch(ProductListCycleType()).then((res) =>{
      console.log(res.payload);
      setProductData(res.payload);
      });
  }, [dispatch]);

  const getCycleTypes = useCallback(async() => {    
   
    dispatch(CycleTypesDropDownList()).then((res) =>{
      console.log(res.payload);
      setCycledata(res.payload);
      });
  }, [dispatch]);

  useEffect(() => {
    getProductData();
    getCycleTypes();
       
  }, [getProductData, getCycleTypes]);


 
 
//get cycle type functions to get dynamic options value
  const SelectCycletype=()=>{
    const  options = () =>
    Cycledata.map(user => ({
      label: user.Description,
      value: user.Description,
      id: user._id
    }));

    return <Select 
   
    placeholder={selectedCycle==='' ?"Select Cycle Type":selectedCycle}
      value={selectedCycle}
       onChange={(value)=>{
         console.log(value);
      setSelectedCycle(value[0].value)
      setComboCycleId(value[0].id)
     // dispatch({ type: 'setcycletype', payload: value[0].id})
    }}
     options={options()} />

  }

  const SelectedProdductType=()=>{
  const  options = () =>
  ProductData.map(user => ({
    label: user.Product,
    value: user.Product,
    id: user._id
  }));

  return <Select 
    placeholder={SelectProductType==='' ?"Select Product Type":SelectProductType} 
     value={SelectProductType}
      onChange={(value)=>{
        setSelectProductType(value[0].value)
        setComboProductId(value[0].id)
        // dispatch({ type: 'productType', payload: value[0].id})
      }}
       options={options()} />
  }
  


const createnewCycle =(event)=>{

  event.preventDefault();  
     
  
  const cycleObject = {
  productTypes:ComboProductId,
  availableCycleTypes:ComboCycleId,
  startDate: _startDate,
  maturityDate: maturityDate,
  finalCapRate: _finalcaprate,
  status:_status,
  statusDate: statusDate,
  internalFundID:_internalFundID,
  cusip: _cusip,
  cycleName: cycleName,
};
console.log(cycleObject);
// calling dispatch and dispatching the createCycle action
    dispatch(createCycle(cycleObject)).then(data=>{
          console.log(data.payload);
          if(data.payload==='OK'){
            alert("Created SuccessFully");
          }
    })

}

const updatecycle=(event) => {

  event.preventDefault();  
  const updatecycle = {
    _id:CycleId,
    productTypes:ComboProductId,
    availableCycleTypes:ComboCycleId,
    startDate: _startDate,
    maturityDate: maturityDate,
    finalCapRate: _finalcaprate,
    status:_status,
    statusDate: statusDate,
    internalFundID: _internalFundID,
    cusip: _cusip,
    cycleName: cycleName,
  };
  console.log(updatecycle);
  dispatch(editCycle(updatecycle)).then((data) => {
    if (data.payload === "OK") {
      toast.success(
        "Updated Cycle Data Successfully!"
      );
    }
  });
}


  return (
    <div className="container"  style={{marginTop:'10px'}}>
      <form >

      <div>
          <br></br>
            <button
              className="btn btn-success btn-block"
              style={{
                backgroundColor: "#194ba88a",
                border: "1px solid black",
                borderRadius: "10px",
                fontSize: "14px",
                width: "90px",
                height: "30px",
                color: "white",
              }}
              name="äddCycle"
              value="äddCycle1"
              onClick={() =>  window.location.href='/create-cycle'}>
              + Cycle
            </button>
            &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
            <button
              type="button"
              className="btn btn-success btn-block"
              style={{
                backgroundColor: "#194ba88a",
                border: "1px solid black",
                borderRadius: "10px",
                fontSize: "14px",
                width: "120px",
                height: "30px",
                color: "white",
                icon: 'cancel',
              }}
              name="äddIndicativeCapRate"
              value="äddIndicativeCapRate1"
              onClick={() =>  window.location.href='/create-indicativeCapHistory-cycle'}>
              + Indicative Cap Rate
            </button>
            {isedit?
              <>
                &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
            <button
              type="submit"
              className="btn btn-success btn-block"
              style={{
                backgroundColor: "#194ba88a",
                border: "1px solid black",
                borderRadius: "10px",
                fontSize: "14px",
                width: "150px",
                height: "30px",
                color: "white",
              }}
              name="save"
              value="save1"
              onClick={updatecycle}
            >
              Update Cycle
            </button>
              </>
              :
              <>
                &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
            <button
              type="submit"
              className="btn btn-success btn-block"
              style={{
                backgroundColor: "#194ba88a",
                border: "1px solid black",
                borderRadius: "10px",
                fontSize: "14px",
                width: "150px",
                height: "30px",
                color: "white",
              }}
              name="save"
              value="save1"
              onClick={createnewCycle}
            >
              Create Cycle
            </button>
              </>
            }
            
            &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
            <button
              className="btn btn-success btn-block"
              style={{
                backgroundColor: "#194ba88a",
                border: "1px solid black",
                borderRadius: "10px",
                fontSize: "14px",
                width: "80px",
                height: "30px",
                color: "white",
              }}
              onClick={(event)=>clearcycleform(event)}
            >
              Clear
            </button>
            &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
            <button
              type ="submit"
              className="btn btn-success btn-block"
              style={{
                backgroundColor: "#194ba88a",
                border: "1px solid black",
                borderRadius: "10px",
                fontSize: "14px",
                width: "80px",
                height: "30px",
                color: "white",
              }}
              >
            Back
            </button>
          <br></br>
        </div>
        <br></br>
        <div className="user">
            <table border="0" width="100%" >
              <tr>
               <td width="20%"></td>
                <td width="20%">
                <label for="availableCycleType">
                Cycle Types : &nbsp;  
                </label>
                 <br/>
                <SelectCycletype/>
                </td>
                <td width="40%">
                <label for="productCycleType">
                 Product : &nbsp;
                </label>  
                <SelectedProdductType/>
               
                </td>
                <td width="40%"></td>
              </tr>
             </table> 
        </div>
        
             <div className={"flex-fill"}> <b>Cycle Attributes</b></div>
             <br></br>
              <div class="row">
              <div class="col-3"></div>
              <div class="col-2">
              <div style={{marginBottom:'8px',textAlign:'left'}}>   <span> Cycle Name  </span></div>
              <div style={{marginBottom:'8px',textAlign:'left'}}>   <span> Start Date  </span></div>
              <div style={{marginBottom:'8px',textAlign:'left'}}>   <span> Status      </span></div>
              <div style={{marginBottom:'8px',textAlign:'left'}}>   <span> Maturity Date </span></div>
              <div style={{marginBottom:'8px',textAlign:'left'}}>   <span> Fund Id  </span></div>
              <div style={{marginBottom:'8px',textAlign:'left'}}>   <span> Final Cap Rate  </span></div>
              <div style={{marginBottom:'8px',textAlign:'left'}}>   <span> CUSIP  </span></div>
              </div>
              <div class="col-4">
              <div  style={{margin:'2px'}}>
                <input
              type="text"
              name="cycleName"
              value={cycleName}
              onChange={(event)=>setCycleName(event.target.value)}
              style={{width:'100%',margin:'10'}}
               />
              </div>
              <div  style={{margin:'2px'}}>
              <input
              type="date"
              name="startDate"
              value={moment(_startDate).format("YYYY-MM-DD")}
              onChange={(event)=>set_startDate(event.target.value)}
              style={{width:'100%',margin:'10'}}
            />
              </div>
              <div style={{margin:'2px'}}>
            <input
              type="text"
              name="status"
              disabled="true"
              value={_status==='613f09778c62eb3b9c8079b2'?'PrePublished':'Published'}
              style={{width:'100%',margin:'10'}}
            />
           </div>
              <div style={{margin:'2px'}}>
              <input
              type="date"
              name="maturityDate"
              value={ moment(maturityDate).format("YYYY-MM-DD")}
              onChange={(event)=>setMaturityDate(event.target.value)}
              style={{width:'100%',margin:'10'}}
            />
              </div>
              <div style={{margin:'2px'}}>
            <input
              type="text"
              name="internalFundID"
              value={_internalFundID}
              onChange={(event)=>set_internalFundID(event.target.value)}
              style={{width:'100%',margin:'10'}}
            />
          </div>
              <div style={{margin:'2px'}}>
              <input
              type="number"
              name="finalCapRate"
              value={_finalcaprate}
              onChange={(event)=>set_finalcaprate(event.target.value)}
              style={{width:'100%',margin:'10'}}
               />
              </div>
              <div style={{margin:'2px'}}>
            <input
              type="text"
              name="cusip"
              value={_cusip}
              onChange={(event)=>set_cusip(event.target.value)}
              style={{width:'100%',margin:'10'}}
            />
          </div>

              </div>
              <div class="col-2"></div>
              </div>

        
         
            
      
        
          <br></br>
         
        <div>
        <table width = "100%">
          <tr>
            <td width= "50%">  
            <div align="center">
            <b> Indicative Cap Rate History </b>
            <ViewIndicativeCapRateHistoryComponentDataTable id={CycleId}></ViewIndicativeCapRateHistoryComponentDataTable>
            </div>
          </td>
          <td width="1%"> </td>
          <td width="50%">
          <div align="center">
          <b>Cycle Status </b>
          <ViewCycleStatusComponentDataTable  ></ViewCycleStatusComponentDataTable>
          </div>
          </td>
           </tr>
          </table>
  
      </div> 
      </form>
    </div>
  );
}
CreateCycleManagementForm.propTypes={
  initialData:PropTypes.any
}