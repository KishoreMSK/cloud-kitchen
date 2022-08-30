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
          },
          logout()
          {
            sessionStorage.removeItem("status");
            localStorage.setItem("users",[])
            this.$router.push({name:"login"})
    
          }
      },
      Component:{
        name:"HeaderComponent"
      }
    
}