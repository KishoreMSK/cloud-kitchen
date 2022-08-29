export default {
    data () {
        return {
          drawer: null,
          items: [
            // { title: 'Order', icon: 'mdi-view-dashboard' },
            { title: 'Inventory', icon: 'mdi-forum' },
          ],
        }
      },
      methods:{
          changePage(title){
            console.log(title);
            this.$router.push({path : `/admin/${title}`})
          }
      },
      Component:{
        name:"HeaderComponent"
      }
    
}