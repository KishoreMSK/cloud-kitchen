import axios from 'axios';
export const createProduct = ({success, error,object})=>{
  console.log("inside rrehisteer",object)
  const api ="http://10.30.1.46:8888/admin/insert" 

  axios
  .post(api,object)
  .then((response)=>{     
    success && success(response)      
  }).catch((e) => {
      error && error(e)
  })
}
export const getProduct = ({success, error})=>{
    console.log("inside get rhisteer")
    const api ="http://10.30.1.46:8888/admin/getAll" 

    axios
    .get(api)
    .then((response)=>{     
      success && success(response)      
    }).catch((e) => {
        error && error(e)
    })
  }
  export const deleteProduct = ({success, error,object})=>{
    console.log("inside get rhisteer")
    const api =`http://10.30.1.46:8888/admin/deleteById/?id=${object}`
    console.log(api)
    axios
    .delete(api)
    .then((response)=>{     
      success && success(response)      
    }).catch((e) => {
        error && error(e)
    })
  }
  export const orderProduct = ({success, error,object})=>{
    console.log("inside get rhisteer")
    const api =`http://10.30.1.46:8085/order/insertOrders`
    console.log(api)
    axios
    .post(api,object)
    .then((response)=>{     
      success && success(response)      
    }).catch((e) => {
        error && error(e)
    })

  }
  export const cancelProduct = ({success, error,object})=>{
    console.log("inside get rhisteer")
    const api =`http://10.30.1.46:8085/order/cancelOrders`
    console.log(api)
    axios
    .post(api,object)
    .then((response)=>{  
      console.log(response)   
      success && success(response)      
    }).catch((e) => {
      console.log(e)   
        error && error(e)
    })
  }