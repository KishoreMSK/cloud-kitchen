export default {
     name:"ProductCartComponent",
     props:{
        itemObject: {
      type: Object,
      required: true,
      default: () => {},
    },
    },
    mounted()
    {
        console.log(this.itemObject)

    },
    data: () => ({
        loading: false,
        selection: 1,
        show: false,
      }),
  
      methods: {
        reserve () {
            console.log(this.itemObject.itemType)
           this.$router.push({path:`user/${this.itemObject.itemType}`})
        },
      },
}