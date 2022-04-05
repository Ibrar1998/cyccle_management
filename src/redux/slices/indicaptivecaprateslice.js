import { createSlice } from "@reduxjs/toolkit";
import {
  IndicaptiveCapRateList,
  IndicaptiveCapRateListDelete,
  EditIndicaptiveCapRateList,
  CreateIndicaptiveCapRateList,
  IndicaptiveCapRateListByCycleId
} from "../thunks"


const initialState={

indicaptivelist :[],
success:false,
error:false


}


const indicaptiveCapRateSlice=createSlice({
    name:"indicaptiveSlice",
    initialState,
    reducers:{
      
      // static -jobs not connected to api 
      // no network operation only the static events
     

    },

    extraReducers: (builder) => {

      // When you have to deal with api --->


         builder.addCase(IndicaptiveCapRateList.fulfilled, (state, action) => {

          // Once the api is arrived with data -->
           
      // Add user to the state array
      state.success=true;
      state.error=false;
      state.indicaptivelist=  action.payload;
    }).addCase(IndicaptiveCapRateListDelete.fulfilled, (state, action) => {
           
      state.success=true;
      state.error=false;
   
    }).addCase(EditIndicaptiveCapRateList.fulfilled, (state, action) => {
      state.success=true;
      state.error=false;
    }).addCase(CreateIndicaptiveCapRateList.fulfilled, (state, action) => {
      state.success=true;
      state.error=false;
    }).addCase(IndicaptiveCapRateListByCycleId.fulfilled, (state, action) => {
      state.success=true;
      state.error=false;
    })


  
       
      },



})

export const {login} =indicaptiveCapRateSlice.actions;

export default indicaptiveCapRateSlice.reducer