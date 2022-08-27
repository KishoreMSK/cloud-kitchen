import { mapGetters } from "vuex"
import ProductCartComponent from "../components/ProductCartComponent"
export default {
    name:"ProductComponent",
    components:{
        ProductCartComponent
    },
    data()
    {  
        return {
            
        }

    },
    computed:{
        ...mapGetters({
            itemlist:'getitemlist'
        })
    },
    mounted()
    {
        this.$store.dispatch("GETITEM_LIST")

    }
}