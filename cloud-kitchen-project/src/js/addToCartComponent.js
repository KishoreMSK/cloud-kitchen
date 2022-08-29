import { mapGetters } from "vuex";

export default {
    data()
    {
        return {
          cartlist:[],
          total:0,
        }
    },
   
    mounted()
    {
         this.getcart()
    },
    computed:{
        ...mapGetters({
             uniqueItem : "getUniqueItemList"
        })

    },
    methods:{
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
            const users = JSON.parse(localStorage.getItem("users") || "[]");
        },
        quantity(item,operation)
        {
            const users = JSON.parse(localStorage.getItem("users") || "[]");
console.log(users)

console.log(users[item])
            var array=[]
            var i=0;
         
            if(operation=="reduce")
            {
               console.log("res")
                users[item].quantity=users[item].quantity-1
            }
            else if(operation=='increase')
            {
                
            console.log("increaes")
                users[item].quantity=users[item].quantity+1
            
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