<template>
<div class="homemain">
  <div class="userr">
    <span>User id:</span>
    <div>{{ profile }}</div>
  </div>
  <div class="rec">recommended items for this user </div>
  <span v-for="usr in recommendation[profile]" :key="usr" >
    <f-card :name='usr' :pic='usr'/>
  </span>
</div>
</template>

<script>
import FCard from '@/components/F-card.vue'
export default {
  components: { FCard },
  props:['profile'],
  data(){
    return{
      recommendation:{
        '00009d946eec3ea54add5ba56d5210ea898def4b46c68570cf0096d962cacc75':['0578476001', '0881269003', '0464679015', '0751664001', '0643588007', '0871376002', '0881833002', '0570189010', '0918200001', '0842605014', '0803757005', '0832036002'],

        '0001d44dbe7f6c4b35200abdb052c77a87596fe1bdcc37e011580a479e80aa94':['0714790024', '0714790020', '0714790008', '0717490064', '0926026001', '0851400007', '0921906002', '0870434001'],

        '0003e867a930d0d6842f923d6ba7c9b77aba33fe2a0fbf4672f30b3e622fec55':['0621381027', '0640021023',  '0572998001', '0905803002', '0640021018', '0906305001', '0879088002', '0874113005', '0904416001', ],

        '00047d50bde8751b26aaec7536ccc5fd92828ffa0a396df17e8a1a313f1ef9c9':['0908081004', '0904567001', '0761406006', '0805000007', '0909081002', '0923037001', '0850917001', '0874817002', '0871690007', '0871690002', '0715624052', '0715624002'],

        '000493dd9fc463df1acc2081450c9e75ef8e87d5dd17ed6396773839f6bf71a9':['0874114002', '0760084013', '0741848001', '0812271001', '0719530006', '0693497001', '0875564006', '0921671001',   '0933990001']
      }

    }
  },
  methods:{
    getdata(){
      console.log(this.recommendation[this.profile])
    }
  },
  mounted(){
    this.getdata()
  }

}
</script>

<style>
.homemain{
  width: 90%;
  margin: auto;
}
.userr{
  height: 110px;
  margin-top: 20px;
}
.userr span{
  height: 45px;
  font-size: 20px;
  color: #ccc;
  padding: 8px;
}
.userr div{
  height: 65px;
  font-size: 28px;
  color: #777;
  padding: 8px;
}
.rec{
  font-size: 20px;
  color: #ccc;
  padding: 10px;
  border-bottom: 1px solid #ccc;
  border-top: 1px solid #ccc;
  margin-bottom: 30px;
}
</style>