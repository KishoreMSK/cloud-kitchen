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
          {
            text: 'Customer_name',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: 'Phone_number', value: 'calories' },
          { text: 'Address', value: 'fat' },
          { text: 'Products_added', value: 'carbs' },
          { text: 'Total_price', value: 'protein' },
          { text: 'Availablity', value: 'availablity' },
        ],
        desserts: [


          {
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: '1%',
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: '1%',
          },
          {
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            iron: '7%',
          },
          {
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
            iron: '8%',
          },
          {
            name: 'Gingerbread',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
            iron: '16%',
          },
          {
            name: 'Jelly bean',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
            iron: '0%',
          },
          {
            name: 'Lollipop',
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
            iron: '2%',
          },
          {
            name: 'Honeycomb',
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
            iron: '45%',
          },
          {
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
            iron: '22%',
          },
          {
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: '6%',
          },
        ],
      }
    },
    beforeCreate()
    {
      getProduct({
        success : (response) => {
          this.headers=response.data
          console.log(response.data)
            alert('success')
        },
        error : (e) => {
          console.log(e)
           alert("error")
        },
    })

    },
    methods:{
      saveInventory()
      {
        
         console.log(this.product)
         createProduct({
          success : (response) => {
            
            console.log(response)
              alert('success')
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
