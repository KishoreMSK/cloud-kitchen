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
        removeItem(value)
        {
            const users = JSON.parse(localStorage.getItem("users") || "[]");
            console.log(value,users)
//             const newArr = users.filter((index) => {
//   return index != value;
// });
// const arr=users.splice(value-1,1);
// console.log(arr)
//  localStorage.setItem("users", JSON.stringify(arr));
//  this.getcart()
        }
    }
}