import { createSlice } from "@reduxjs/toolkit";
import {
  CycleTypeList,
  CycleTypeListDelete,
  EditCycleListType,
  createvailableCycleType,
  ProductListCycleType,
  CycleTypesDropDownList,
  CycleStatus,
  CycleStatusbyId,
  ProductListCycleTypebyID,
  AvailableCycleTypebyID
} from "../thunks"


const initialState={

cycletype :[],
success:false,
error:false

}


const cycleTypeSlice=createSlice({
    name:"cycleTypeSlice",
    initialState,
    reducers:{
      
      // static -jobs not connected to api 
      // no network operation only the static events
     

    },

    extraReducers: (builder) => {

      // When you have to deal with api --->


         builder.addCase(CycleTypeList.fulfilled, (state, action) => {

          // Once the api is arrived with data -->
           
      // Add user to the state array
      state.success=true;
      state.error=false;
      state.cycletype=  action.payload;
     

   
    }).addCase(CycleTypeListDelete.fulfilled, (state, action) => {
           
    
      state.success=true;
      state.error=false;
   
    }).addCase(EditCycleListType.fulfilled, (state, action) => {
      state.success=true;
      state.error=false;
    }).addCase(createvailableCycleType.fulfilled, (state, action) => {
      state.success=true;
      state.error=false;
    }).addCase(ProductListCycleType.fulfilled, (state, action) => {
      state.success=true;
      state.error=false;
    }).addCase(CycleTypesDropDownList.fulfilled, (state, action) => {
      state.success=true;
      state.error=false;
    }).addCase(CycleStatus.fulfilled, (state, action) => {
      state.success=true;
      state.error=false;
    }).addCase(CycleStatusbyId.fulfilled, (state, action) => {
      state.success=true;
      state.error=false;
    }).addCase(ProductListCycleTypebyID.fulfilled, (state, action) => {
      state.success=true;
      state.error=false;
    }).addCase(AvailableCycleTypebyID.fulfilled, (state, action) => {
      state.success=true;
      state.error=false;
    })


  
       
      },



})

export const {login} =cycleTypeSlice.actions;

export default cycleTypeSlice.reducer