// import axios from "axios";
// import { useCallback, useEffect, useState } from "react";
import "./style.css";
import "../App.css";
import Tabs from '../UIControls/Tabs';
import { CreateUserForm } from './CreateUserForm'
import { UserList } from './UserList'

export const UserDetails = () => {
  return (
    <div>
      <Tabs> 
       <div label="UserList"> 
          <p><b> User List </b></p>
          <UserList></UserList>
       </div> 
       <div label="CreateUser"> 
          <p><b> User Details </b></p>
          <CreateUserForm></CreateUserForm>
       </div> 
     </Tabs> 
    </div>
  );
};

