import { mapGetters } from "vuex"

export default {
    name:"ProductItemCartComponent",
   data()
   {
          return{
            filteredList:[]
          }
   },
   computed:{
       
        ...mapGetters({
            itemlist:'getitemlist',
            filtereditemList:'getitemfilteredlist'
        })
    },
    mounted()
    {
        console.log(this.$route.params.id)
    
      this.filteredList = this.$store.dispatch("SET_FILTERED_LIST",this.$route.params.id);
    
       console.log(this.filteredList)

    },
    methods:{
        addCart(item)
        {
          console.log(item)
          const users = JSON.parse("[]" || "[]");
         users.push(item);
           
          localStorage.setItem("users", JSON.stringify(users));
         
          this.$store.dispatch("SET_CART_LIST",item)
        }
      }
    }