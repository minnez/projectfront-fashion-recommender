<template>
  <nav class="navi">
      <span class="title">Fashion Recommendation</span>
      <span class="navlinks">
          <ul>
              <li><router-link to="/home">Home</router-link></li>
              <li><router-link to="/about">About</router-link></li>
          </ul>
      </span>
      <span class="logout">
          <router-link to="/">Login</router-link>
      </span>
  </nav>
</template>

<script>
export default {

}
</script>

<style>
    .navi{
        background-color: coral;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 40px;
        font-family: monospace;
    }
    .title{
        font-size: 26px;
        font-weight: 700;
        font-family: monospace;
    }
    .navlinks{
        margin-left: -80px;
    }
    .navlinks ul{
        list-style: none;
        display: flex;
        justify-content: space-between;
    }
    .navlinks ul li{
        text-transform: uppercase;
        text-decoration: none;
        font-size: 18px;
        font-weight: 400;
        padding: 2px 10px;
    }
    a{
        text-decoration: none;
    }

</style>