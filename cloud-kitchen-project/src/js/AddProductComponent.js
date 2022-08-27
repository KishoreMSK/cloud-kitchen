export default{
    name:"AddProductComponent",

    data () {
      return {
        dialog: true,
    
              rules: [
                value => !!value || 'Required.',
                value => (value && value.length >= 3) || 'Min 3 characters',
              ],
         
      }
    },
  
}