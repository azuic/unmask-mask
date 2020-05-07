<template>
  <div>
    <div class="bg"></div>
      <h1 class="title">

    <div class="row-section"

      v-for="(each,id) in sections" :key="id">{{each}}</div>

  </h1>
  <BackButton routerLink="/timeline" />
</div>
</template>

<script>
import BackButton from '~/components/BackButton.vue'
export default{
    components: {
      BackButton
    },
  data(){
    return {
      slideLeft: false,
      revealStyle:{
        backgroundColor: "#FBDD4A",
        transition: "2s"
      },
      isHover:false,
      info:[],
      sections:["","social firewall","fashion statement","pop culture","..."]
    }
  },

  method:{
    revealText(){
      this.revealStyle.backgroundColor= "none";
      this.info = ["privacy and safety zone", "marine serre and smog couture", "BTS etc."];
    },
    coverText(){
      this.revealStyle.backgroundColor= "#FBDD4A";
      this.info = ["social firewall","fashion statement","pop culture"];
    }
  }
}
</script>

<style>
@font-face {
  font-family: 'Garamond',cursive;
  src: url('/Garamond.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}
body{
    overflow-x:hidden;
    font-family: 'Garamond';
    background-repeat: no-repeat;
 }
 .back-button{
   position: absolute;
   z-index: 55;
   margin-top:5vh;
   margin-left:44vw;
 }
.row-section{
  display:block;
  background-color:#FBDD4A;
  color: black;
  width: 100vw;
  height: 20vh;
}

.row-section:hover{
  width:0;

  transition:1s;
}
.bg {
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-image: url('~/static/b.png');
  background-size: 150% auto;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  z-index: 0;
}

.title {
  position: absolute;
  font-family:  'Garamond';
  display: block;
  font-weight: 600;
  font-size: 8vw;
  color: black;
  letter-spacing: 1px;
  line-height: 0.8;
  z-index:1;
}

#title-line1{
  display:grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 4px;
}
#title-unmask{
  /* margin-left: 0; */
  width: 50vw;
  text-align: right;
}

#title-ing{
  /* color: white; */
  width: 50vw;
  text-align: left;
  /* z-index:11; */
}

#title-masks{
  /* color: white; */
  width: 50vw;
  margin-left: 50vw;
  text-align: left;
  padding-left: 4px;
}

</style>
