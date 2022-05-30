<template>
  <div class="cardmain">
      <div class="picture">
          <img :src="getimg(pic)" alt="">
      </div>
      <div class="info">
          <span>{{ name }}</span>
      </div>
      <div class="button">
      <button>View</button>
      </div>
  </div>
</template>

<script>
export default {
    props:['name','pic'],
    data(){
        return{

        }
    },
    methods:{
        getimg(pic){
            return require('../assets/'+pic+'.jpg')
        }
    }

}
</script>

<style>
    .cardmain{
        display: inline-block;
        margin: 10px;
        height: 400px;
        width: 250px;
        border: 1px solid #ccc;
        border-radius: 8px;
        overflow: hidden;
    }
    .cardmain .picture{
        min-height: 80px;
        background-color: coral;
        padding: -6px;
    }
    img{
        width: 250px;
        height: 280px;
    }
    .cardmain .info{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 20px;
        color: #777;
        padding: 5px;
        height: 60px;
    }
    .cardmain button{
        padding: 8px;
        width: 50%;
        margin: auto;
        text-align: center;
        color: #fff;
        background-color: coral;
        border: 1px solid rgb(133, 64, 39);
        border-radius: 5px;
        cursor: pointer;
        
    }
    .button{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 10px;
    }

</style>