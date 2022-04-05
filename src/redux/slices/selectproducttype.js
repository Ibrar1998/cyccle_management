export const productType = '';
export const productId='';
 const selectproductType = (state=productType, action) => {
  switch (action.type) {
    case 'productType':
        console.log('selected product'+JSON.stringify(action.payload));

   return { ...state,  productType:action.payload };

   case 'productid':
    console.log('selected productid'+JSON.stringify(action.payload));
     return { productId:action.payload}
 
    default: 
      return state;
  }
};
export default selectproductType