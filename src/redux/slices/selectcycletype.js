export const cycleType = '';
export const search='';
export const cyclestatusid='';
export const setcyclestatus='';
export const navigationtab=0;
export const indicaptivetab=0;
export const hyperlink=false;
export const cycleidfromcyclelist='';
 const selectedcycletype = (state=cycleType, action) => {
  switch (action.type) {
    case 'setcycletype':
        console.log('selected cycle'+JSON.stringify(action.payload));

   return { ...state,  cycleType:action.payload };
   case 'setSearch':
    console.log('Search'+JSON.stringify(action.payload));

    return { search:action.payload };
    case 'cyclestatusid':
      console.log('cyclestatusid'+JSON.stringify(action.payload));
  
      return { cyclestatusid:action.payload };
      case 'setcyclestatus':
        console.log('setcyclestatus'+JSON.stringify(action.payload));
    
        return { setcyclestatus:action.payload };

        case 'navigationtab':
        console.log('navigationtab'+JSON.stringify(action.payload));
        return { navigationtab:action.payload };

        case 'indicaptivetab':
          console.log('indicaptivetab'+JSON.stringify(action.payload));
          return { indicaptivetab:action.payload };

        case 'hyperlink':
        console.log('hyperlink'+JSON.stringify(action.payload));
    
        return { hyperlink:action.payload };
        case 'cycleidfromcyclelist':
          console.log('cycleidfromcyclelist'+JSON.stringify(action.payload));
      
          return { cycleidfromcyclelist:action.payload };
    default: 
      return state;
  }
};
export default selectedcycletype