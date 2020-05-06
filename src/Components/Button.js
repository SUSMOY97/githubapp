import React ,{useEffect,useState} from "react" ; 
import {Button}  from "reactstrap" ; 


const Button = ({repo}) => {

    const [clicked, setClicked] = useState(false);
    const url = repo.html_url ; 

  useEffect(() => {
    if (clicked) {
      // do something meaningful, Promises, if/else, whatever, and then
      window.location.assign(url);
    }
  });
  return (
    <Button className="text-white" color="primary" onClick={() => setClicked(true)}></Button>
  )




}

export default Button