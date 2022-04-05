 import {useEffect ,useCallback} from 'react'
import './style.css'
import Select from 'react-dropdown-select'
import {useDispatch,useSelector} from "react-redux";
import { useState} from 'react';
import { toast } from "react-toastify";
import {EditCycleListType,createvailableCycleType,ProductListCycleType,ProductListCycleTypebyID} from "../redux/thunks";





export const CreateCycleTypeForm = (props) => {

  const {editcycletype} =useSelector(state=>state.editcycletypeselection);
  const {productType} =useSelector(state=>state.selectproductType);
  const [ProductData, setProductData] = useState([]);
  const [SelectProductType, setSelectProductType] = useState('');
  // define form states
  const [_Description, set_Description] = useState('');
  const [_Term, set_Term] = useState('');
  const [_TermQualifier, set_TermQualifier] = useState('');
  const [_Structure, set_Structure] = useState('');
  const [_StructureRate, set_StructureRate] = useState('');
  const [_Status, set_Status] = useState('Available');
  const [_ReferenceCode, set_ReferenceCode] = useState('')
  const [_ProductFamilyId, set_ProductFamilyId] = useState( productType? productType:1);
  const [_CapRateThreshold, set_CapRateThreshold] = useState("")



  const dispatch=useDispatch();
  const getProductData = useCallback(async() => {
      if(editcycletype){
        console.log(editcycletype.ProductFamilyId);
        dispatch(ProductListCycleTypebyID(editcycletype.ProductFamilyId)).then((res) =>{
          setSelectProductType(res.payload[0].Product);
          dispatch({ type: 'productType', payload:editcycletype.ProductFamilyId})
          });
      }
        dispatch(ProductListCycleType()).then((res) =>{
          setProductData(res.payload);
          });
  }, [dispatch,editcycletype]);

  const SelectedProdductType=()=>{
    const  options = () =>
    ProductData.map(user =>
        
      (
        {
      label: user.Product+' '+user.Family,
      value: user.Product,
      id: user._id,
    }),
   
    );
  
    return <Select 
    
      placeholder={SelectProductType==='' ?"Select Product Type":SelectProductType} 
       value={SelectProductType}
        onChange={(value)=>{
          console.log(value[0])
          setSelectProductType(value[0].value)
          dispatch({ type: 'productType', payload: value[0].id})
        }}
         options={options()} width='200px'/>
    }
  


  
  const clearformdata=()=>{
    setSelectProductType('');
    dispatch({ type: 'seteditcycle', payload: '' })
    
    set_Description('');
    set_Term('');
    set_TermQualifier('Years');
    set_Structure('Floor');
    set_StructureRate('');
    set_CapRateThreshold('');
    set_Status('Available');
    set_ReferenceCode('')

    dispatch({ type: 'navigationtab', payload: 0});
  }


  useEffect(() => {
    getProductData()
   
    if(editcycletype){
      setSelectProductType(editcycletype.ProductFamilyId)
      set_Description(editcycletype.Description);
      set_Term(editcycletype.Term);
      set_TermQualifier(editcycletype.TermQualifier);
      set_Structure(editcycletype.Structure);
      set_StructureRate(editcycletype.StructureRate);
      set_CapRateThreshold(editcycletype.CapRateThreshold);
      set_Status(editcycletype.Status);
      set_ReferenceCode(editcycletype.ReferenceCode)
      set_ProductFamilyId(editcycletype.ProductFamilyId)
    }
    
      return ()=>{
        dispatch({ type: 'seteditcycle', payload: '' })
      }
   
  }, [editcycletype,getProductData,dispatch]);
  const handleSubmit = (event) => {
    event.preventDefault();
    
    const cycleTypeObject = {
        Description:_Description,
        Term:_Term,
        TermQualifier:_TermQualifier,
        Structure:_Structure,
        StructureRate:_StructureRate,
        CapRateThreshold:_CapRateThreshold,
        Status:_Status,
        ReferenceCode:_ReferenceCode,
        ProductFamilyId:_ProductFamilyId,
        ProductFamilybyname:SelectProductType
    };

  console.log(cycleTypeObject) ;
   
    dispatch(createvailableCycleType(cycleTypeObject)).then((data) => {
      if (data.payload._id) {
        toast.success("Created Cycle Data Successfully!");
      }
      clearformdata()
    });
    
  }

  const handleupdatedatacycletype=()=>{
      if(editcycletype){
        const cycleTypeObject = {
          _id:editcycletype?editcycletype._id:null,
          Description:_Description,
          Term:_Term,
          TermQualifier:_TermQualifier,
          Structure:_Structure,
          StructureRate:_StructureRate,
          CapRateThreshold:_CapRateThreshold,
          Status:_Status,
          ReferenceCode:_ReferenceCode,
          ProductFamilyId:productType? productType:'',
          ProductFamilybyname:SelectProductType
      };
        dispatch(EditCycleListType(cycleTypeObject)).then((data) => {
          clearformdata();
          dispatch({ type: 'seteditcycle', payload: '' })
          if (data.payload === "OK") {
            toast.success(
              "Updated Cycle Data Successfully! , Cycle Description : " +
              editcycletype.Description
            );
          }
        });
      }
  }

 

 

  return <div>
    <form > 
      <div className="flex-column">
    
       <div>  
         {
         props.edit==='true'?
           <>
           <button type="button" className="btn btn-success"  style={
            {backgroundColor:'#194ba88a',
              border:'1px solid black',
              borderRadius:'10px',
              fontSize: 15,
              width:'100px',
              height:'30px',color: 'white'}}
              onClick={handleupdatedatacycletype}
      name="btn" value="update"> Update </button>   &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
       
          </>
           :
           <>
            <button type="button" className="btn btn-success" style={
       {backgroundColor:'#194ba88a',
        border:'1px solid black',
        borderRadius:'10px',
        fontSize: 15,
        width:'150px',
        height:'30px',color: 'white'}} 
        onClick={handleSubmit}
        value="ädd"> +
         Cycle Type</button>  &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
           </>
           
         }
         
     
      <button type="button" className="btn btn-success" style={
       {backgroundColor:'#194ba88a',
        border:'1px solid black',
        borderRadius:'10px',
        fontSize: 15,
        width:'100px',
        height:'30px',color: 'white'}}
        onClick={clearformdata}
        name="btn" value="clear"> Clear </button>    &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
     
      <button type="button" className="btn btn-success" style={
       {backgroundColor:'#194ba88a',
        border:'1px solid black',
        borderRadius:'10px',
        fontSize: 15,
        width:'100px',
        height:'30px',color: 'white'}}
        onClick={()=>{
          window.location='/cycle-types'
        }}
        name="btn" value="back"> Back </button>  
        </div>
     </div>
      <br></br>
      <div style={{
          paddingLeft:'25%',
            paddingRight:'25%',
      }}>
          <label><b>Product Type </b>  </label>
          <  SelectedProdductType/>
      </div>
      <br></br>
      <div className="row">
      <div className="col-3"></div>
      <div className="col-2">
      <div style={{marginBottom:'6px',textAlign:'left'}}>   <span>Index Description  </span></div>
      <div style={{marginBottom:'6px',textAlign:'left'}}>  <span>Term   </span></div>
      <div style={{marginBottom:'6px',textAlign:'left'}}>  <span>Term Qualifier </span></div>
      <div style={{marginBottom:'6px',textAlign:'left'}}>  <span>Structure    </span></div>
      <div style={{marginBottom:'6px',textAlign:'left'}}>  <span>Floor/Buffer Rate (%)  </span></div>
      <div style={{marginBottom:'6px',textAlign:'left'}}>  <span> CapRate Threshold (%) </span></div>
      <div style={{marginBottom:'6px',textAlign:'left'}}>   <span>Status   </span></div>
      <div style={{marginBottom:'6px',textAlign:'left'}}>   <span>BizTrax/Reference Code  </span></div>
      </div >
      <div  className="col-3" style={{justifyContent:'center',display:'inline'}}>
      <div>
       <div  style={{margin:'2px'}}>
          <input
            type="text"
            name="Description"
            onChange={(event)=>set_Description(event.target.value)}
            value={_Description}
            style={{width:'100%',margin:'10'}}
          />
        </div>
        <div style={{margin:'2px'}}>
         
          <input
            type="number"
            name="Term"
            onChange={(event)=>set_Term(event.target.value)}
            value={_Term}
            style={{width:'100%'}}
          />
        </div>
        <div style={{margin:'2px'}}>
          
          <select value={_TermQualifier} name="TermQualifier"
              onChange={(event)=>set_TermQualifier(event.target.value)}
             style={{width:'100%'}}
          >
            <option value="Years">Years</option>
            <option value="Months">Months</option>
          </select>
        </div>
        <div style={{margin:'2px'}}>
         
          <select value={_Structure} name="Structure"
            onChange={(event)=>set_Structure(event.target.value)}
           style={{width:'100%'}}
          >
            <option value="Floor">Floor</option>
            <option value="Buffer">Buffer</option>
          </select>
        </div>
        <div style={{margin:'2px'}}>
          
          <input
            type="number"
            name="StructureRate"
            onChange={(event)=>set_StructureRate(event.target.value)}
            value={_StructureRate}
            style={{width:'100%'}}
          />
        </div>
     
        <div style={{margin:'2px'}}>
          
          <input
            type="decimal"
            name="CapRateThreshold"
            onChange={(event)=>set_CapRateThreshold(event.target.value)}
            value={_CapRateThreshold}
            style={{width:'100%'}}
          />
        </div>
        <div style={{margin:'2px'}}>
          
          <select value={_Status} name="Status" 
             onChange={(event)=>set_Status(event.target.value)}
           style={{width:'100%'}}
          >
            <option value="Available">Available</option>
            <option value="Not Available">Not Available</option>
          </select>
        </div>
        <div style={{margin:'2px'}}>
         
          <input
            type="text"
            name="ReferenceCode"
            onChange={(event)=>set_ReferenceCode(event.target.value)}
            value={_ReferenceCode}
            style={{width:'100%'}}
          />
        </div>

        </div>
       </div>
 
      <div  className="col-4"></div>
      </div>
       
<br></br>

  
      

   
    </form>
  </div>
}