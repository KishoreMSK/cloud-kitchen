import { getProduct } from "@/service/product.service";
export default {
    state : {
        itemFilteredList:[],
        itemlist : [{
            itemname:'chicken briyani',
            price:123,
            category:"non-vegetarian",
            itemtype :"briyani",
            cuisine:"indian",
            description:"Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.",
            rating:4,
            duration:"38 mins",
            offer:"50",
            coupon:"WELCOME50",
            stockcount:0,
            id:1
        },{
            itemname:'mutton idly',
            price:123,
            category:"non-vegetarian",
            itemtype :"idly",
            cuisine:"indian",
            description:"Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.",
            rating:4,
            duration:"38 mins",
            offer:"50",
            coupon:"WELCOME50",
            stockcount:0,
            id:2
        },{
            itemname:'prwan briyani',
            price:123,
            category:"non-vegetarian",
            itemtype :"briyani",
            cuisine:"indian",
            description:"Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.",
            rating:4,
            duration:"38 mins",
            offer:"50",
            coupon:"WELCOME50",
            stockcount:0,
            id:3
        },
        {
            itemname:'mushroom briyani',
            price:123,
            type:"vegetarian",
        itemtype :"briyani",
        category:"indian",
            description:"Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.",
            rating:4,
            duration:"38 mins",
            offer:"50",
            coupon:"WELCOME50",
            id:6
        },
        {
            itemname:'vegetable briyani',
            price:123,
            category:"vegetarian",
            itemtype :"briyani",
            cuisine:"indian",
            description:"Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.",
            rating:4,
            duration:"38 mins",
            offer:"50",
            coupon:"WELCOME50",
            stockcount:0,
            id:4
        }
    ]
    },
    getters :{
        getitemlist(state){
            console.log("in get item",state)
            return state.itemlist;
        },
        getUniqueItemList(state){
            const key = 'itemType';
            const array = state.itemlist
           const arrayUniqueByKey = [...new Map(array.map(item =>
             [item[key], item])).values()];

            console.log(arrayUniqueByKey);
            console.log("imnside unique");
            return arrayUniqueByKey;

        },
        getitemfilteredlist(state){
            return state.itemFilteredList;
        }
    },
    mutations : {
        setitemFilteredList(state,value){
            const filteredArray = state.itemlist.filter((item) => {
                return item.itemType==value;
              });
              console.log(filteredArray)
            state.itemFilteredList = filteredArray
        },
        setitemProduct(state,response)
        {
            console.log("set item product")
            state.itemlist=response;
        }
    },
    actions : {
        GETITEM_LIST(){
            getProduct({
                success : (response) => {
                    this.commit("setitemProduct",response.data)
                    console.log("inside store get")
                },
                error : (e) => {
                   alert("error",e)
                   this.commit("setitemProduct",[])
                },
            })
           console.log("WORKIng")
        },
        SET_FILTERED_LIST(state,value){

            
            this.commit("setitemFilteredList",value)
            
         },
    }
}