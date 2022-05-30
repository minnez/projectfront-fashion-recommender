<template>
  <Fnav />
  <router-view :profile="this.currentuser" @validuser='showuser($event)'/>
</template>

<script>
import Fnav from './components/F-nav.vue'
export default {
  components: {
    Fnav,
  },
  data(){
    return{
      currentuser:''
    }
  },
  methods:{
    showuser(usern){
      console.log(usern)
      this.currentuser = usern;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}


nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #fff;
}
</style>
