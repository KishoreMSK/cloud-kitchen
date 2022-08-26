import { mapGetters } from "vuex"

export default {
    name:"ProductComponent",
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