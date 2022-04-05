export const initialState = {};
export const capratehistoryforcycleid ='';
 const indicativecapratehistroy = (state=initialState, action) => {
  switch (action.type) {
    case 'setdata':
        console.log('indicativeCapRateHistory data'+JSON.stringify(action.payload));

   return { ...state,  initialState:action.payload };
   case 'capratehistoryforcycleid':
    console.log('capratehistoryforcycleid id'+JSON.stringify(action.payload));

    return {   capratehistoryforcycleid:action.payload };
 
    default: 
      return state;
  }
};
export default indicativecapratehistroy