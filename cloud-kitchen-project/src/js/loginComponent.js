import { loginUser } from "@/service/login.service"

export default{
    data(){
       return{
         user:{
            uname:"",
            upassword:""
         }
       }
    },
    methods:{
        userLogin(){
            var payload={
                userName : this.uname,
                loginPassword : this.password,
                userType : "customer"
            }
            loginUser({
                success : (response) => {
                  
                  console.log(response)
                    alert('success')
                },
                error : (e) => {
                  console.log(e)
                   alert("error")
                },
                object:payload
            })
        },
        userReset(){
            this.user.uname="";
            this.user.upassword="";
        },
       
        
    }

    
}