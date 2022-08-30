export default {
    name:"UserHeaderComponent",
    data: () => ({
      drawer: false,
      group: null,
    }),
    methods:{
      movePage(value)
      {
        console.log("movepage")
        this.$router.push(value)
      },
      logout()
      {
        sessionStorage.removeItem("status");
        localStorage.setItem("users",[])
        this.$router.push({name:"login"})

      }
    }
}