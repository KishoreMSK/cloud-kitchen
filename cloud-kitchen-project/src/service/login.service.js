import axios from "axios";

export const loginUser = ({success, error,object})=>{
    console.log("inside rrehisteer",object)
    const api ="http://10.30.1.46:8084/validateUser/" 
  
    axios
    .post(api,object)
    .then((response)=>{     
      success && success(response)      
    }).catch((e) => {
        error && error(e)
    })
}