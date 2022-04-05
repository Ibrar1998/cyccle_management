import {useEffect, useState,useCallback} from 'react'
import './style.css'
import {useSelector,useDispatch} from "react-redux";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
import { toast } from "react-toastify";
import Select from 'react-dropdown-select';
import {EditIndicaptiveCapRateList,CreateIndicaptiveCapRateList,fetchCycleList} from "../redux/thunks";
export const IndicativeCapRateHistoryForm = ({onSubmit} , buttonVisible) => {

  const defaultData = {
    cycleID: "1",
    effectiveDate: moment().utcOffset("+05:30").format("YYYY-MM-DD hh:mm:ss a"),
    indicativeCapRate: '',
  };
  const dispatch = useDispatch();
  const [state, setState] = useState(defaultData);
  const {initialState} =useSelector(state=>state.indicativecapratehistroy);
  const [selectedCycle, setSelectedCycle] = useState('');
  const [ComboCycleId, setComboCycleId] = useState('');

  
  const { cycleList } = JSON.parse(
    JSON.stringify(useSelector((state) => state.cycleSlice))
  );
  const getData = useCallback(async () => {
    dispatch(fetchCycleList()).then((data) => {
    });
  }, [dispatch]);

  console.log(initialState);
  useEffect(() => {
    if(initialState){
      setSelectedCycle(initialState.cyclebyname);
      setComboCycleId(initialState.cycleID)
      setState({
        effectiveDate:initialState.effectiveDate,
        indicativeCapRate:initialState.indicativeCapRate
      })
    }
    getData();
  }, [initialState,getData]);
 

const handleTextFieldChange=(event )=>{
  setState({...state,[event.target.name]:event.target.value})

}

const SelectCycletype=()=>{
  const  options = () =>
  cycleList.map(user => ({
    label: user.cycleName,
    value: user.cycleName,
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

  const updateindicaptivecaprate=()=>{
   
      if(initialState){

        if(state.indicativeCapRate===''){
          toast.warn("IndicativeCapRate Is Empty!!");
          return;
         }

        const indicativeCapRateHistoryObject = {
          _id:initialState._id,
          cycleID: ComboCycleId,
          cyclebyname: selectedCycle,
          effectiveDate: state.effectiveDate,
          indicativeCapRate: state.indicativeCapRate,
      };
        dispatch(EditIndicaptiveCapRateList(indicativeCapRateHistoryObject)).then((data) => {
          clearformdata();
          if (data.payload === "OK") {
            toast.success("Updated Cycle Data Successfully!");
          }
        });
      }else{
        alert('Form Is Empty');
      }
  }

const clearformdata=()=>{
  dispatch({ type: "setdata", payload: '' });
  setState({
    cycleID: "",
    cyclebyname:'',
    effectiveDate: moment().utcOffset("+05:30").format("YYYY-MM-DD hh:mm:ss a"),
    indicativeCapRate: ''
  });
}

const handleSubmit = () => {

    if(state.cycleID===''){
      toast.warning("Cycle ID Is Empty!!");
        return;
    }
    if(state.indicativeCapRate===''){
      toast.warn("IndicativeCapRate Is Empty!!");
      return;
     }
  
    const indicativeCapRateHistoryObject = {
        cycleID:ComboCycleId,
        cyclebyname:selectedCycle,
        effectiveDate: state.effectiveDate,
        indicativeCapRate: state.indicativeCapRate,
    };
    dispatch(CreateIndicaptiveCapRateList(indicativeCapRateHistoryObject)).then((data) => {
        console.log(data);
        toast.success("Indicative Cap Rate History Transaction submitted successfully!");
        setState({
          cycleID: "1",
          effectiveDate: moment().utcOffset("+05:30").format("YYYY-MM-DD hh:mm:ss a"),
          indicativeCapRate: ''
        });
    });
 
    
  }

  return <div>
    <form >
    <div>
                <div>
                  {
                   
                  !initialState?
                     <>
                  <button type="button" className="btn btn-success" style={
                    {backgroundColor:'#194ba88a',
                      border:'1px solid black',
                      borderRadius:'10px',
                      fontSize: 15,
                      width:'250px',
                      height:'30px',color: 'white'}}
                      onClick={handleSubmit}
                      name="Add Indicative Cap Rate History" value="New"> + Indicative Cap Rate History </button> &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                      </>
                      :null
                      
                  }
               
                {
                  initialState?
                  <>
                  <button type="button" className="btn btn-success" style={
                    {backgroundColor:'#194ba88a',
                      border:'1px solid black',
                      borderRadius:'10px',
                      fontSize: 15,
                      width:'100px',
                      height:'30px',color: 'white'}} 
                      onClick={updateindicaptivecaprate}
                      name="save" value="save"> Update </button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </>
                      :null
                }
               
                
                <input type="reset" className="btn btn-success" style={
                {backgroundColor:'#194ba88a',
                  border:'1px solid black',
                  borderRadius:'10px',
                  fontSize: 15,
                  width:'100px',
                  height:'30px',color: 'white'}}
                  onClick={clearformdata}
                  name="Clear" value="Clear"/>  &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                
                <button type="button" className="btn btn-success" style={
                {backgroundColor:'#194ba88a',
                  border:'1px solid black',
                  borderRadius:'10px',
                  fontSize: 15,
                  width:'100px',
                  height:'30px',color: 'white'}}
                  onClick={()=>{
                    window.location='/create-indicativeCapHistory';
                  }}
                  name="btn" value="back"> Back </button>   
                </div>
         </div>
         <br/><br/>
         <div style={{
            paddingLeft:'25%',
            paddingRight:'25%',
         }}>
         <SelectCycletype/>
         </div>
         <br/>
         <div className="row">
        <div className="col-3"></div>
        <div className="col-3">
        <div style={{marginBottom:'6px',textAlign:'left'}}>   <span>Effective Date   </span></div>
        <div style={{marginBottom:'6px',textAlign:'left'}}>   <span>Indicative Cap Rate   </span></div>
        </div>
        <div className="col-3">
        <div style={{margin:'2px'}} >      
  
          <input
            type="date"
            name="effectiveDate"
            size="15"
            onChange={handleTextFieldChange}
          value={moment(state.effectiveDate).format("YYYY-MM-DD")}
          style={{width:'100%',margin:'10'}}
          />
        </div>
        <div style={{margin:'2px'}}>
        
        <input
          type="text"
          name="indicativeCapRate"
          size="15"
          onChange={handleTextFieldChange}
           value={state.indicativeCapRate}
           style={{width:'100%',margin:'10'}}
          />
      </div>
      
      
          </div>
        <div className="col-3"></div>
      </div>
     
   
    </form>
  </div>
}