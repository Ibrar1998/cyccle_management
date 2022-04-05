// import axios from "axios";
// import { useCallback, useEffect, useState } from "react";
import "./style.css";

export const ListUserComponent = ({ data, value, onChange }) => {
  // populate your list item componet with select
  return (
    <select value={value} onChange={onChange}>
      {/* {!!state && <pre>{JSON.stringify(state, null, 2)}</pre>} */}
      {!!data &&
        data.map((user) => (
          <option key={user._id} value={user._id}>
            {user.name + "   -   " + user.email}
          </option>
        ))}
    </select>
  );
};

// export const ListItem = ({ user }) => {
//   return (
//     <div className={"list-item"}>
//       <div className={"user"}>{user.name}</div>
//       <div className={"email"}>{user.email}</div>
//     </div>
//   );
// };
