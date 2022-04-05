import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// First, create the thunk
export const fetchCycleList= createAsyncThunk(
    'cycleSlice/cycleList',
    async () => {
        /// Our api 
 const response= await  axios.get(`${process.env.REACT_APP_URL}/cycleList/`);  // api call to the backend
 return response.data;
 }
 )
 
// Create Cycle Thunk
  export const createCycle= createAsyncThunk(
    'cycleSlice/createCycle',
    async (data) => {
        /// Our api 
 const response= await  axios.post(`${process.env.REACT_APP_URL}/cycleList/create`,data);
 return response.data;
    
    }
  )
  // cycleList/getsinglecycle/ fetching single record
  export const FetchSingleCycleFromCycleList= createAsyncThunk(
    'cycleSlice/FetchSingleCycleFromCycleList',
    async (_id) => {
        /// Our api 
 const response= await  axios.get(`${process.env.REACT_APP_URL}/cycleList/getsinglecycle/`+_id);
//  console.log(response);
 return response.data;
    
    }
  )

  ///////////////////////////////////////////////


  // Editing cycle

  export const editCycle=createAsyncThunk(
    'cycleSlice/editCycle',
    async (data) => {
        /// Our api 
    
 const response= await  axios.put(`${process.env.REACT_APP_URL}/cycleList/update/${data._id}`,data);
 return response.data;
    
    }

// Create Cycle Thunk

  )

  export const deleteCycle=createAsyncThunk(
    'cycleSlice/deleteCycle',
    async (id) => {
        /// Our api 
 const response= await  axios.delete(`${process.env.REACT_APP_URL}/cycleList/delete/${id}`);
 return response.data;
}
// Create Cycle Thunk
)

// First, create the thunk
export const fetchCycleTypeList= createAsyncThunk(
  'cycleTypeSlice/cycleList',
  async () => {
      /// Our api 
const response= await  axios.get(`${process.env.REACT_APP_URL}/cycleList/`);  // api call to the backend
return response.data;
}
)

// Create Cycle Thunk
export const createCycleType= createAsyncThunk(
  'cycleTypeSlice/createCycle',
  async (data) => {
      /// Our api 
const response= await  axios.post(`${process.env.REACT_APP_URL}/cycleList/create`,data);
return response.data;
  
  }

// Create Cycle Thunk

)


// Editing cycle
export const createvailableCycleType=createAsyncThunk(
  'cycleTypeSlice/createCycle',
  async (data) => {
const response= await  axios.post(`${process.env.REACT_APP_URL}/availableCycleTypes/create/`,data);
return response.data;
  
  }
)
// product cycle types list and drop down list-item
export const ProductListCycleType=createAsyncThunk(
  'cycleTypeSlice/productListCycleType',
  async () => {
const response= await  axios.get(`${process.env.REACT_APP_URL}/product/`);
console.log(response.data)
return response.data;
  
  }
)
///////////////////////
export const AvailableCycleTypebyID=createAsyncThunk(
  'cycleTypeSlice/AvailableCycleTypebyID',
  async (id) => {
const response= await  axios.get(`${process.env.REACT_APP_URL}/availableCycleTypes/cycylebyid/${id}`);
//console.log(response.data)
return response.data;

  }
)

export const ProductListCycleTypebyID=createAsyncThunk(
  'cycleTypeSlice/ProductListCycleTypebyID',
  async (id) => {
    console.log(id);
const response= await  axios.get(`${process.env.REACT_APP_URL}/product/productbyid/${id}`);
//console.log(response.data)
return response.data;
  
  }
)
///////////////////
export const CycleTypesDropDownList=createAsyncThunk(
  'cycleTypeSlice/CycleTypesDropDownList',
  async () => {
const response= await  axios.get(`${process.env.REACT_APP_URL}/availableCycleTypes/`);
console.log(response.data)
return response.data;
  
  }
)
//////////////////////////////////////////////

export const CycleStatus=createAsyncThunk(
  'cycleTypeSlice/CycleStatus',
  async () => {
const response= await  axios.get(`${process.env.REACT_APP_URL}/cycleStatus/`);
console.log(response.data)
return response.data;
  
  }
)
export const CycleStatusbyId=createAsyncThunk(
  'cycleTypeSlice/CycleStatusbyId',
  async (id) => {
const response= await  axios.get(`${process.env.REACT_APP_URL}/cycleStatus/getsinglecyclestatus/`+id);
console.log(response.data)
return response.data;
  
  }
)

////////////////////////////////////////
export const editCycleType=createAsyncThunk(
  'cycleTypeSlice/editCycle',
  async (data) => {
const response= await  axios.put(`${process.env.REACT_APP_URL}/cycleList/update/${data._id}`,data);
return response.data;
  
  }
)

export const deleteCycleType=createAsyncThunk(
  'cycleTypeSlice/deleteCycle',
  async (id) => {
      /// Our api 
const response= await  axios.delete(`${process.env.REACT_APP_URL}/cycleList/delete/${id}`);
return response.data;
}
// Create Cycle Thunk
)

// Cycle type API's call 

export const CycleTypeList= createAsyncThunk(
  'cycleTypeSlice/cycletypelist',
  async () => {
      /// Our api 
const response= await  axios.get(`${process.env.REACT_APP_URL}/availableCycleTypes/`);  // api call to the backend
return response.data;
}
)
export const CycleTypeListDelete=createAsyncThunk(
  'cycleTypeSlice/deleteCycletype',
  async (id) => {
const response= await  axios.delete(`${process.env.REACT_APP_URL}/availableCycleTypes/delete/${id}`);
return response.data;
})
export const EditCycleListType=createAsyncThunk(
  'cycleTypeSlice/editCycletype',
  async (data) => {
const response= await  axios.put(`${process.env.REACT_APP_URL}/availableCycleTypes/update/${data._id}`,data);
return response.data;
  
  })
//////////////////////////////////////////////////////////

export const IndicaptiveCapRateList= createAsyncThunk(
  'indicaptiveSlice/indicaptiveSlice',
  async () => {
      /// Our api 
const response= await  axios.get(`${process.env.REACT_APP_URL}/indicativeCapRateHistory/`);  // api call to the backend
return response.data;
}
)
////////////////////////////////
export const IndicaptiveCapRateListByCycleId= createAsyncThunk(
  'indicaptiveSlice/IndicaptiveCapRateListByCycleId',
  async (id) => {
const response= await  axios.get(`${process.env.REACT_APP_URL}/indicativeCapRateHistory/capratebycycleid/${id}`);  // api call to the backend
return response.data;
}
)
/////////////////////////
export const IndicaptiveCapRateListDelete=createAsyncThunk(
  'indicaptiveSlice/deleteindicaptiveSlice',
  async (id) => {
    console.log('delete call',id);
const response= await  axios.delete(`${process.env.REACT_APP_URL}/indicativeCapRateHistory/delete/${id}`);
return response.data;
})
export const EditIndicaptiveCapRateList=createAsyncThunk(
  'indicaptiveSlice/editindcaptivetype',
  async (data) => {
    console.log('edit call');
const response= await  axios.put(`${process.env.REACT_APP_URL}/indicativeCapRateHistory/update/${data._id}`,data);
return response.data;
  
  })
  export const CreateIndicaptiveCapRateList=createAsyncThunk(
    'indicaptiveSlice/createindicaptive',
    async (data) => {
      console.log('create call');
  const response= await  axios.post(`${process.env.REACT_APP_URL}/indicativeCapRateHistory/create/`,data);
  return response.data;
    
    })