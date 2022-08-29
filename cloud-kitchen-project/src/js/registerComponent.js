  import {registerUser} from "../service/register.service"
  export default {
    data: () => ({
        
        rules: [
          value => !!value || 'Required.',
          value => (value && value.length >= 5) || 'Min 5 characters',
        ],
        error:"",
        user:{
          username:"",
          mobno:"",
          address:"",
          email:"",
          password:"",
          cpassword:""
        }
      }),
      methods:{
        register()
        {
          console.log("resgister")
          if(this.user.username==''||this.user.mobno==''||this.user.address=='',this.user.email==''||this.user.password==' ')
          {
            this.error="Please enter the fields"
            console.log("empty")
            
          }
           else if(this.user.password!=this.user.cpassword)
          {
            console.log("not empty")
            this.error="Password does not match"
          }
          else
          {
            console.log("empty")
            this.error=" "
            console.log("resgister succes")
          localStorage.setItem("users",[])
          var payload={
            "userName":this.user.username,
            "phoneNo":this.user.mobno,
            "address":this.user.address,
            "email":this.user.email,
            "userType":"Customer",
            "loginPassword":this.user.password
           }
          console.log(payload)
          registerUser({
            success : (response) => {
              localStorage.setItem("admin", JSON.stringify(response.data));
             
              
              console.log(response.data)
                alert('success')
                this.$router.push({path : `/login`})
            },
            error : (e) => {
              console.log(e)
               alert("error")
            },
            object:payload
        })
        this.error=""
      }
        },
        goLogin(){
            this.$router.push({path : `/login`})
        }
      }
    
  }
