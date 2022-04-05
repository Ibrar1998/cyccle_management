import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CreateCycle from "./components/CreateCycle.Component";
import { ListCycleManagementComponent } from "./components/CycleManagementList.Component"
import { ListCycleComponent } from "./components/CycleList.Component"
import { CreateIndicativeCapRateHistory } from "./components/IndicativeCapRateHistory.Component"
import { UserDetails } from "./components/UserDetails.Component"
import { ListItemProduct } from "./components/Product.Component"
import { CycleType } from "./components/CycleType.Component"
import { CycleStatusComponent } from "./components/CycleStatus.Component"
import { ListCycleLogComponent } from "./components/CycleLogList.Component"
import './App.css'
import { ToastContainer } from 'react-toastify';
import {useDispatch} from "react-redux";
// import Login from './oktaauth/Login';
// import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react';
export const CycleDetails = () => { 
  return (
        <div>
          <ListCycleComponent buttonVisible="true"></ListCycleComponent>
        </div>
  );
}

export const NewCycleDetails = () => { 
  return (
        <div>
          Hello World
          <ListCycleManagementComponent></ListCycleManagementComponent>
        </div>
  );
}


export const IndicativeCapRateHistoryDetails = () => { 
 
  return (
        <div>
          <CreateIndicativeCapRateHistory></CreateIndicativeCapRateHistory>
        
        </div>
  );
}

export const CycStatusComponent = () => { 
  return (
        <div>
          <CycleStatusComponent buttonVisible="true"></CycleStatusComponent>
        </div>
  );
}
// function onAuthRequired({ history }) {
//   history.push('/login');
// }

function App() {
  const dispatch=useDispatch();
  return (
    <>
      <ListCycleManagementComponent></ListCycleManagementComponent>
      <ToastContainer/>
  <Router>
  {/* <Security
          issuer="https://dev-39255150.okta.com/oauth2/default"
          client_id="0oa4c7vjh5EMFEeIx5d7"
          redirect_uri={window.location.origin + '/login/callback'}
          onAuthRequired={onAuthRequired}
        > */}
    <div className="App">
      <header>
        <nav className="navbar navbar-expand-lg nav-link:hover background-color "> 
          <div className="collapse navbar-collapse container" id="navbarSupportedContent" >
            <ul className="navbar-nav ml-auto container">
              <Link className="nav-link" to={"/create-products"} ><b>Products</b></Link>
              <Link className="nav-link" to={"/cycle-types"} onClick={ ()=>{ dispatch({ type: 'navigationtab', payload: 0})}     }><b>Cycle Types</b></Link>
              <Link className="nav-link" to={"/create-cycle"} ><b>Cycles</b></Link>
              <Link className="nav-link" to={"/create-indicativeCapHistory"} onClick={ ()=>{
                 dispatch({ type: 'navigationtab', payload: 0});
                 dispatch({ type: 'indicaptivetab', payload: 0});
                 
                 }     }><b>Indicative CapRate</b></Link>
              <Link className="nav-link" to={"/list-cycle"} ><b>Cycle Management</b></Link>
            </ul>
          </div>
        </nav>
      </header>

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <Switch>
            {/* <Route
                path="/login"
                render={() => (
                  <Login baseUrl="https://dev-39255150.okta.com" />
                )}
              /> */}
             
              {/* <Route path="/login/callback" component={ImplicitCallback} /> */}
              <Route exact path='/' component={CycleDetails}  />
              <Route path="/create-cycle" component={CreateCycle} />
              <Route path="/list-new-cycle" component={NewCycleDetails} />
              <Route path="/list-cycle" component={CycleDetails} />
              <Route path="/create-indicativeCapHistory" component={IndicativeCapRateHistoryDetails} />
              <Route path="/cycle-types" component={CycleType} />
              <Route path="/create-products" component={ListItemProduct} />
              <Route path="/list-cycle-status" component={CycStatusComponent} />
              <Route path="/users-details" component={UserDetails} />
              <Route path="/list-cycle-status-log" component={ListCycleLogComponent} />
            </Switch>
          </div>
        </div>
      </div>
    </div>
    {/* </Security> */}
  </Router>
  
    </>
  );
}

export default App;