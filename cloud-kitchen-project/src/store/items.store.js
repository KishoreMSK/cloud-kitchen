export default {
    state : {
        itemlist : [{
            name:'briyani',
            price:123,
            id:1
        },{
            name:'idly',
            price:123,
            id:1
        },{
            name:'dhosa',
            price:123,
            id:1
        },
        {
            name:'owo',
            price:123,
            id:1
        }
    ]
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