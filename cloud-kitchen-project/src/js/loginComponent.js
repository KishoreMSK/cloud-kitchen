import { loginUser } from "@/service/login.service"

export default{
    data(){
       return{
         user:{
            uname:"",
            upassword:"",
            userType:""
         }
       }
    },
    methods:{
        userLogin(){
           
            var payload={
                userId : this.user.uname,
                loginPassword : this.user.upassword,
                userType : this.user.userType
            }
            console.log(payload)
            loginUser({
                success : (response) => {
                  
                  console.log(response)
                    alert('success')   ///if response-true -> this.rputer.push(path:"/user") else alert(this.error = invalid)
                },
                error : (e) => {
                  console.log(e)
                   alert("error")    //
                },
                object:payload
            })
        },
        userReset(){
            this.user.uname="";
            this.user.upassword="";
            this.user.userType = "";
        },
       
        
    }

    
}