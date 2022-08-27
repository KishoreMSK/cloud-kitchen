import axios from 'axios';
export const createProduct = ({success, error,object})=>{
  console.log("inside rrehisteer",object)
  const api ="http://10.30.1.87:8888/admin/insert" 

  axios
  .post(api,object)
  .then((response)=>{     
    success && success(response)      
  }).catch((e) => {
      error && error(e)
  })
}
