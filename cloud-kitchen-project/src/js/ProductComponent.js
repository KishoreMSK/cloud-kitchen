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
            itemlist:'getitemlist',
            filteredList:'getitemfilteredlist',
            uniqueItem : 'getUniqueItemList'
        })
    },
    mounted()
    {
        this.$store.dispatch("GETITEM_LIST")
        const key = 'itemType';
        const array = this.itemlist
       const arrayUniqueByKey = [...new Map(array.map(item =>
         [item[key], item])).values()];

        console.log(arrayUniqueByKey);
        console.log("imnside unique");
    }
}