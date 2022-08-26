

export default {
    state : {
        itemlist : []
    },
    getters :{
        getitemlist(state){
            console.log("in get item",state)
            return state.itemlist;
        }
    },
    mutations : {
        setitemlist(state,value){
            state.itemlist = value
        }
    },
    actions : {
        GETITEM_LIST(){
           console.log("WORKIng")
        }
    }
}