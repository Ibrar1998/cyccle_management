export const editcycletype = {};
 const editcycletypeselection = (state=editcycletype, action) => {
  switch (action.type) {
    case 'seteditcycle':
        console.log('Edit cycle type data'+JSON.stringify(action.payload));

   return { ...state,  editcycletype:action.payload };
 
    default: 
      return state;
  }
};
export default editcycletypeselection