import axios from 'axios';
//import { resolve } from 'core-js/fn/promise';
export const registerUser = ({success, error,object})=>{
  console.log("inside rrehisteer",object)
  const api ="http://10.30.1.46:8084/createUser" 

  axios
  .post(api,object)
  .then((response)=>{   
    
    console.log(response)
    success && success(response)      
  }).catch((e) => {
      error && error(e)
  })
}
