import React , {useState} from 'react';
import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import {BrowserRouter as Router , Switch , Route , Link} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import firebase from "firebase/app";
import 'firebase/auth';
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup" ; 
import PageNotFound from "./pages/PageNotFound"
import { UserContext } from './Context/UserContext';
import Footer from "./layout/Footer"
import Header from "./layout/Header"
import FirebaseConfig from "./Config/FirebaseConfig"


//init firebase 

firebase.initializeApp(FirebaseConfig)
const App = ()=> {
  const [user,setUser] = useState(null) ; 
  return (
    <Router>
      <ToastContainer/>
      <UserContext.Provider value = {{user,setUser}}>
      <Header/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/signin" component={Signin}/>
        <Route exact path="/signup" component={Signup}/>
        <Route exact path="*" component={PageNotFound}/>
      </Switch>
      <Footer/>

      </UserContext.Provider>
    </Router>
  );
}

export default App;
