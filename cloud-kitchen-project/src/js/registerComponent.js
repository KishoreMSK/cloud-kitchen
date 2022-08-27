  import {registerUser} from "../service/register.service"
  export default {
    data: () => ({
        
        rules: [
          value => !!value || 'Required.',
          value => (value && value.length >= 5) || 'Min 5 characters',
        ],
        user:{
          username:"",
          mobno:"",
          address:"",
          email:"",
          password:"",
        }
      }),
      methods:{
        register()
        {
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
              this.$router.push({path : `/login`})
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
        goLogin(){
            this.$router.push({path : `/login`})
        }
      }
    
  }
