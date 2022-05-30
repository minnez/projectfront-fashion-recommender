<template>
    <div class="login">
        <div class="form">
            <form  class="login-form">
                <input v-model="username" type="text" placeholder="user id" required />
                <router-link to="/home"><button @click="loginuser" >login</button></router-link>
            </form>  
        </div>
    </div>
</template>

<script>

export default {
  data(){
        return{
            username:'',
            users:['00009d946eec3ea54add5ba56d5210ea898def4b46c68570cf0096d962cacc75',
            '0001d44dbe7f6c4b35200abdb052c77a87596fe1bdcc37e011580a479e80aa94',
            '0003e867a930d0d6842f923d6ba7c9b77aba33fe2a0fbf4672f30b3e622fec55',
            '00047d50bde8751b26aaec7536ccc5fd92828ffa0a396df17e8a1a313f1ef9c9',
            '000493dd9fc463df1acc2081450c9e75ef8e87d5dd17ed6396773839f6bf71a9']
        }
    },
    methods:{
      loginuser(){
        if(this.users.includes(this.username)){
            this.$emit('validuser',this.username)
          console.log('user found in list')
        }else{
          console.log('user not found')
        }
        

      }
    }
}
</script>

<style>
  .login {
  width: 400px;
  height: 300px;
  margin: auto;
  margin-top: 60px;
  font-family: 'Comfortaa', cursive;
  border: 2px coral dashed;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.form {
  position: relative;
  background: #FFFFFF;
  border-radius: 10px;
  max-width: 360px;
  padding: 45px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

.form input {
  outline: 0;
  background: #f2f2f2;
  width: 100%;
  border: 0;
  border-radius: 5px;
  margin: 0 0 15px;
  padding: 15px;
  box-sizing: border-box;
  font-size: 14px;
  font-family: 'Comfortaa', cursive;
}

.form input:focus {
  background: #dbdbdb;
}

.form button {
  font-family: 'Comfortaa', cursive;
  text-transform: uppercase;
  outline: 0;
  background: coral;
  width: 100%;
  border: 0;
  border-radius: 5px;
  padding: 15px;
  color: #FFFFFF;
  font-size: 14px;
  -webkit-transition: all 0.3 ease;
  transition: all 0.3 ease;
  cursor: pointer;
}
.form button:hover{
  background-color: rgba(coral, 0.9);
}

.form button:active {
  background: coral;
}

.form span {
  color: coral;
}
.extra-line > span{
    font-size: 0.7em;
    margin-top: 10px;
}
@media only screen and (max-width: 450px){
  .login{
    margin-top: 20vh;
    width: 90vw;
     padding: 4% 0 0;
  }

.form {
  max-width: 360px;
  padding: 30px;
}

.form input {
  margin: 0 0 8px;
  padding: 8px;
  font-size: 14px;
}

.form button {
  padding: 10px;
  color: #FFFFFF;
  font-size: 12px;
}
}
</style>