import AddProductComponent from "../components/AddProductComponent.vue"
import {createProduct,getProduct} from "../service/product.service"
export default {
    data () {
      return {
        product:{
            foodName:"",
            category:"",
            itemType:"",
            price:"",
            cuisine:"",
            rating:"",
            duration:"",
            offer:"",
            coupon:"",
            stockCount:null,
            description:"",
            image:""
        },
        search: '',
        name:"InventoryComponent",
        dialog:false,
        components:{
          AddProductComponent
          
        },
         rules: [
                value => !!value || 'Required.',
                value => (value && value.length >= 3) || 'Min 3 characters',
              ],
        headers: [
         
          { text: 'Product Name', value: 'foodName' },
          { text: 'Item type', value: 'itemType' },
          { text: 'Category', value: 'category' },
          { text: 'cuisine', value: 'cuisine' },
          { text: 'price', value: 'price' },
          { text: 'description', value: 'description' },
          { text: 'rating', value: 'rating' },
          { text: 'duration', value: 'duration' },
          { text: 'offer', value: 'offer' },
          { text: 'coupon', value: 'coupon' },
          { text: 'url', value: 'url' },
          { text: 'Availablity', value: 'stockCount' },
        ],
     products:[],
      }
    },
   mounted()
    {
      this.getProductsList()
     
    },
    methods:{
      getProductsList()
      {
        getProduct({
          success : (response) => {
            this.products=response.data
           
          },
          error : (e) => {
            console.log(e)
            
          },
      })
  
      },
      saveInventory()
      {
        
         console.log(this.product)
         createProduct({
          success : (response) => {
            
            console.log(response)
             this.dialog=false
              this.getProductsList()
          },
          error : (e) => {
            console.log(e)
             alert("error")
          },
          object:this.product
      })
      }
    },
    components: { 
        
    }
  }
