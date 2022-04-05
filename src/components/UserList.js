import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import "./style.css";

export const UserList = () => {
  const [state, setState] = useState();
  /**
   * If you want to wait for retrieving the data from server, you can use async here.
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
   */
  const getData = useCallback(async () => {
    const response = await axios.get(
      //"https://jsonplaceholder.typicode.com/users"
      "http://localhost:4000/users/"
    );
    const { data } = response;
    setState(data);
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <div>
      <div className={"d-flex flex-row list-item Text-color"}>
            <div className={"user flex-fill"}>User Name</div>
            <div className={"user flex-fill"}>User Email ID</div>
          </div> 
      {/* {!!state && <pre>{JSON.stringify(state, null, 2)}</pre>} */}
      {!!state && state.map((user) => <ListItem key={user.id} user={user} />)}
    </div>
  );
};

export const ListItem = ({ user }) => {
  return (
    <div className={"d-flex flex-row list-item"}>
      <div className={"user flex-fill"}>{user.name}</div>
      <div className={"user flex-fill"}>{user.email}</div>
    </div>
  );
};
