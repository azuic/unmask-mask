<template>
  <div>
    <div class="bg">
      <div class="mask"></div>
      <div class="slide-cover" :style="maskStyle">
        <div class="slide-arrow"
              @mouseover="slideLeft = true"
              ></div>
      </div>
      <h1 class="title">
        <div id="title-line1">
        <div id="title-unmask">unmask</div>
        <div id="title-ing">ing</div>
        </div>
        <div id="title-masks">masks</div>
      </h1>
    <div class="nextButton">
      <n-link to="/timeline">Next</n-link>
    </div>
    </div>
  </div>
</template>

<script>
export default{
  data(){
    return {
      slideLeft: false,
      maskStyle:{
        marginLeft: "50vw",
        transition: "0.2s"
      }
    }
  },
  watch:{
    slideLeft(val, oldVal){
      if (this.slideLeft){
        this.maskStyle.marginLeft = "100vw"
      } else {
        this.maskStyle.marginLeft = "50vw"
      }
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
.bg {
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-image: url('/mask-front.png');
  background-size: contain;
  background-position:center;
  background-repeat: no-repeat;
  z-index: 0;
}


.slide-cover{
  position:absolute;
  width:50vw;
  height: 100vh;
  /* margin-left:50vw; */
  display: block;
  background: black;
  z-index:5;
  animation: maskout 1s linear infinite alternate ease-in-out;
   -webkit-animation: maskout 1s linear infinite alternate ease-in-out;
}
@-webkit-keyframes maskout{
    from {
      margin-left: 50vw;
    }
    to {
      margin-left: 100vw;
    }
}
@keyframes maskout{
    from {
      margin-left: 50vw;
    }
    to {
      margin-left: 100vw;
    }
}
.slide-arrow{
  width:50px;
  height:50px;
  background-image:url('/slide.svg');
  background-size: contain;
  background-repeat: no-repeat;
  margin-left:-25px;
  margin-top: 80vh;
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
  z-index:10;
  margin-top: 45vh;
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
.nextButton{
  display:inline-block;
  position:absolute;
  background: #FBDD4A;
  color: black;
  font-family:  'Garamond';
  /* white-space: nowrap; */
  margin-top: 90vh;
  margin-left:90vw;
  z-index:1;
}

n-link{
  position: absolute;
  font-family:  'Garamond';
  padding: 5px;
  font-weight: 600;
  font-size:30px;
  z-index:1;
}
</style>
