import { createSlice } from "@reduxjs/toolkit";
import {
  fetchCycleList,
  createCycle,
  editCycle,
  deleteCycle,
  FetchSingleCycleFromCycleList
} from "../thunks"


const initialState={

cycleList :[],
success:false,
error:false


}


const cycleSlice=createSlice({
    name:"cycleSlice",
    initialState,
    reducers:{
      
      // static -jobs not connected to api 
      // no network operation only the static events
     

    },

    extraReducers: (builder) => {

      // When you have to deal with api --->


         builder.addCase(fetchCycleList.fulfilled, (state, action) => {
          // Once the api is arrived with data -->
      // Add user to the state array
      state.success=true;
      state.error=false;
      state.cycleList=  action.payload;
    }).addCase(fetchCycleList.rejected,(state,action)=>{
      /// Add  in case of error ,api request fails
    }).addCase(fetchCycleList.pending,(state,action)=>{
      // this is the pending
    }).addCase(createCycle.fulfilled, (state, action) => {
      state.success=true;
      state.error=false;
    }).addCase(createCycle.rejected,(state,action)=>{
      /// Add  in case of error ,api request fails
    }).addCase(createCycle.pending,(state,action)=>{

    }).addCase(editCycle.fulfilled, (state, action) => {
      state.success=true;
      state.error=false;
    }).addCase(editCycle.rejected,(state,action)=>{
      /// Add  in case of error ,api request fails
    }).addCase(editCycle.pending,(state,action)=>{

    }).addCase(deleteCycle.fulfilled, (state, action) => {
      state.success=true;
      state.error=false;
     // state.cycleList=  action.payload;
    }).addCase(deleteCycle.rejected,(state,action)=>{
    
    }).addCase(deleteCycle.pending,(state,action)=>{

    }).addCase(FetchSingleCycleFromCycleList.fulfilled, (state, action) => {
      state.success=true;
      state.error=false;
     // state.cycleList=  action.payload;
    })
       
      },



})

export const {login} =cycleSlice.actions;

export default cycleSlice.reducer