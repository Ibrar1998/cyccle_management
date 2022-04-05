import { configureStore } from "@reduxjs/toolkit";
import cycleSlice from "../slices/cycleslices";
import cycleTypeSlice from "../slices/cycletypeslices";
import indicativecapratehistroy from '../slices/indicativecaphistroy.js';
import selectedcycletype from '../slices/selectcycletype.js';
import selectproductType from '../slices/selectproducttype.js';
import editcycletypeselection from '../slices/editcycletypeselection.js';
import indicaptiveCapRateSlice from '../slices/indicaptivecaprateslice.js';
const store=configureStore({

    reducer:{
        indicativecapratehistroy:indicativecapratehistroy,
        cycleSlice:cycleSlice,
        cycleTypeSlice:cycleTypeSlice,
        selectedcycletype:selectedcycletype,
        selectproductType:selectproductType,
        editcycletypeselection:editcycletypeselection,
        indicaptiveCapRateSlice:indicaptiveCapRateSlice
    }
})


export default store;