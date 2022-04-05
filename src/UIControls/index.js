// If you want to create your own component.
// You have to know where to **reuse** your component again.
// It means whenever the code(component) are used more than once
// You can make it as a component

// Let say there are some code like this.

// const SomeApp = () => {
//   return <div>
//     <div>
//       <div>title</div>
//       <div>body</div>
//       <div>image</div>
//     </div>
//     <div>
//       <div>title</div>
//       <div>body</div>
//       <div>image</div>
//     </div>
//     ...
//   </div>
// }

/**
 * 
 * <div>
      <div>title</div>
      <div>body</div>
      <div>image</div>
    </div>

    These parts are duplicated.
    So you can make these as a component
 */

/**
 * It means, to make a component,
 * You have to know which elements are duplicated more than once
 * 
 * So if you want to make ListTile,
 * You have to know what ListTile is mean.
 */

/**
 * This is I usually do with list item component.
 */

 export const SomeList = () => {
  return <div>
    this is list
    <ListItem title="this is title" body="this is body"></ListItem>
    <ListItem title="this is another title" body="this is another body"></ListItem>
  </div>
}


// div -> select 
// save it!
export const ProductList = () => {
    return <select name="productTypes" disabled="true">
          <option value="1">MNL-RILA Product Version 1 - S&P500-Tyr-Buffer-10</option>
          <option value="2">MNL-RILA Product Version 1 - S&P500-Tyr-Buffer-10 </option>
          <option value="3">MF Cycle Invest Product 1</option>
      </select>
}

export const CycleTypes = () => {
  return <select name="availableCycleTypes">
        <option value="1">S&P500-Tyr-Floor-10</option>
        <option value="2">S&P500-Tyr-Buffer-10 </option>
    </select>
}

// It can be ListTile if you want
// const ListItem1 = () => {
//   return <div>
//     <p>
//       I'm the list tile
//     </p>
//     <p>
//       You can pass me the dynamic value here as props
//     </p>
//   </div>
// }
// ->>
export const ListItem2 = ({title, body}) => {
  return <div>
    <p>
      {title}
    </p>
    <p>
      {body}
    </p>
  </div>
}

export const ListItem = ({title, body}) => {
    return <div>
      <p>
        {title}
      </p>
      <p>
        {body}
      </p>
    </div>
  }

