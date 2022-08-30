import { mapGetters } from "vuex";
import {orderProduct,cancelProduct} from "../service/product.service"
export default {
    data()
    {
        return {
          cartlist:[],
          total:0,
          orderStatus:null,

        }
    },
   
    mounted()
    {

         this.getcart()
         var status = sessionStorage.getItem("status")
         console.log(status,"stats")
         if(status)
         {
            this.orderStatus=true
         }
         else{
            this.orderStatus=false
         }
         this.getTotal();
    },
    computed:{
        ...mapGetters({
             uniqueItem : "getUniqueItemList"
        })

    },
    methods:{
        getTotal()
        {
            var users = JSON.parse(localStorage.getItem("users") || "[]");
            this.total=0
            users.forEach(element => {
                  this.total=this.total+element.price*element.quantity
            })
        },
        cancelOrder()
        {
            var users = JSON.parse(localStorage.getItem("users") || "[]");
            var id =localStorage.getItem("admin")
            var obj={};
            var array=[]
            users.forEach(element => {
                obj={
                    orderId:Date.now()+id,
                    customerId:id,
                    productId:element.foodId,
                    productName:element.foodName,
                    price:element.price,
                    quantity:element.quantity,
                    orderStatus:"Canceled"
                }
                array.push(obj)
            })
            // const users = JSON.parse(localStorage.getItem("users") || "[]");
            
            console.log(array)
            cancelProduct({
                success : (response) => {
                  
                  console.log(response)
                  if(response.data=='sent')
                  {
                    alert("Order cancelled successfully")
                    this.orderStatus=false
                    sessionStorage.removeItem("status");
                    
                  }
                   
                },
                error : (e) => {
                  console.log(e)
                  
                },
                object:array
            })
            
        },
        getcart()
        {
         const users = JSON.parse(localStorage.getItem("users") || "[]");
         this.cartlist=users
        
        },
        emptyCart()
        {
           
            localStorage.setItem("users",[])
            this.getcart()
        },
        placeOrder()
        {
            var users = JSON.parse(localStorage.getItem("users") || "[]");
            var id =localStorage.getItem("admin")
            var obj={};
            var array=[]
            users.forEach(element => {
                obj={
                    orderId:Date.now()+id,
                    customerId:id,
                    productId:element.foodId,
                    productName:element.foodName,
                    price:element.price,
                    quantity:element.quantity,
                    orderStatus:"Ordered"
                }
                array.push(obj)
            })
            // const users = JSON.parse(localStorage.getItem("users") || "[]");
            
            console.log(array)
            orderProduct({
                success : (response) => {
                  
                  console.log(response)
                  if(response.data=='success')
                  {
                    alert("Order Placed Successfully")
                    sessionStorage.setItem("status", "ordered");
                    this.orderStatus=true
                  }
                   
                },
                error : (e) => {
                    alert("Try again after some time")
                  console.log(e)
                  
                },
                object:array
            })
        },
        quantity(item,operation)
        {
            this.getTotal()
            const users = JSON.parse(localStorage.getItem("users") || "[]");
console.log(users)

console.log(users[item])
            var array=[]
            
            if(operation=="reduce")
            {
               console.log("res")
               if(users[item].quantity>1)
               {
                users[item].quantity=users[item].quantity-1
               }
                
            }
            else if(operation=='increase')
            {
                
            console.log("increaes",users[item].stockCount)
            if(users[item].quantity+1<=users[item].stockCount)
            {
                users[item].quantity=users[item].quantity+1
            }
          else{
            alert("stock unavailable")
          }
            
            }
           
         
            console.log("adsd",item,operation)
            console.log("quantity",users[item].quantity)
            console.log(users)
           localStorage.setItem("users", JSON.stringify(users));
          this.getcart()
           console.log(array)

        },
        removeItem(value)
        {
            const users = JSON.parse(localStorage.getItem("users") || "[]");
            console.log(value,users)
            var array=[]
            var i=0;
           users.forEach(element => {
            console.log(element)
            if(i!=value)
            {
                array.push(element)
            }
            i=i+1;
           });
           
           
          localStorage.setItem("users", JSON.stringify(array));
          this.getcart()
           console.log(array)
        }
    }
}