<template>
    <div class="login">
        <div class="form">
            <form  class="login-form">
                <input v-model="username" type="text" placeholder="user name" required />
                <button >login</button>
            </form>  
        </div>
    </div>
</template>

<script>
export default {
  data(){
    return{
      username: '',
    }
  },
  methods:{
    
  }

}
</script>

<style >
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