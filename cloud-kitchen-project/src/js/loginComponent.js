import { loginUser } from "@/service/login.service"

export default{
    data(){
       return{
        rules: [
          value => !!value || 'Required.',
          // value => (value && value.length >= 5) || 'Min 5 characters',
        ],
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
                  if(response.data==true){
                    // this.$router.push({path:"/user"})
                  }
                  else{
                    alert('invalid credentials')   
                  }
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
            this.user.userType = "";
        },
       
        
    }

    
}