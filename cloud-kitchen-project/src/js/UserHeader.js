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
      }
    }
}