<template>
  <div>
  <div class="timeline-mask" :style="slideStyle">
  <span class="pro-title" v-on:click="slideRight">pro</span>
  <span class="anti-title" v-on:click="slideLeft">anti</span>
  </div>
  <div class="container">
    <svg  class="timeline" ref="timeline" :width="width" :height="height" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid meet">
      <svg ref="circle" :x="offsetX" :y="offsetY" :width="radius*2" :height="radius*2" viewBox="0 0 1003 1003" fill="none" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
      <path d="M588.824 8.59612C603.15 11.1221 617.358 14.2721 631.41 18.0371" stroke="black" stroke-width="4"/>
      <path d="M631.41 18.0371C716.187 40.7532 793.492 85.385 855.553 147.447C917.615 209.508 962.247 286.813 984.963 371.59" stroke="black" stroke-width="4" stroke-dasharray="5 7"/>
      <path d="M984.963 371.59C1011.52 470.704 1006.94 575.588 971.846 672.01C936.752 768.432 872.841 851.721 788.788 910.576C704.735 969.431 604.61 1001 502 1001C399.39 1001 299.265 969.431 215.212 910.576C131.159 851.721 67.2483 768.432 32.1537 672.01C-2.94094 575.588 -7.52028 470.704 19.0371 371.59C45.5945 272.477 102.003 183.934 180.606 117.978C259.21 52.0214 356.203 11.8457 458.422 2.90264" stroke="black" stroke-width="4"/>
      </svg>
      <!-- <circle :r="radius" :cx="width/2" :cy="height/2" fill="none" stroke="black" stroke-width="0.5" /> -->
      <g>
      <g v-for="yr in years" :key="yr">
        <circle v-on:click="selectYear=yr" r="5" :cx="offsetX + radius + radius*Math.cos(angle(yr))" :cy="offsetY + radius + radius*Math.sin(angle(yr))" :fill="fillColor"/>
        <text :x="offsetX + radius + (radius+25)*Math.cos(angle(yr))-17" :y="offsetY + radius + (radius+25)*Math.sin(angle(yr))+5" :fill="ifSelected?fillColor:black">
          {{yr}}
        </text>
      </g>
    </g>
    </svg>
    <div :style="showDetails" class="details">
      <span class="stateName" :style="{'color':fillColor}">{{details.state}}</span>
      <br><br>
      <!-- <span class="law">9 George 1 c.22: <span class="highlight">The Black Act</span> - An act for the more effectual punishing <span class="highlight">wicked and evil-disposed</span> persons going <span class="highlight">armed in disguise</span>, and doing injuries and violences to the persons and properties of his Majesty’s subjects, and for the more speedy bringing the offenders to justice.</span> -->
      <div class="law">{{details.law}}</div>
      <br><br>
      <!-- <span class="context">In response to a series of raids by <span class="highlight">two groups of poachers</span>, known as the Blacks.</span> -->
      <div class="context">{{details.context}}</div>
    </div>
  </div>

  <div class="nextButton">
    <n-link to="/trend">Next</n-link>
  </div>
</div>

</template>

<script>
  import anti_mask_laws from "~/assets/anti_mask_laws.json"
  export default {
    data() {
      return {
        proAnti:"",
        slide: "center",
        slideStyle:{
          marginLeft: 0,
          transition: "0.2s"
        },
        showDetails:{
          display: "hidden"
        },
        offsetX:200,
        offsetY:120,
        height: 1000,
        width: 1000,
        radius: 300,
        // years: []
        selectYear:null,
        years: [],
        details:{
          state:"",
          law:"",
          context:""
        },
        ifSelected: false,
        fillColor: (this.slide==="left")?("#A6330A"):("#544E70")
      }
    },
    watch:{
      slide(val, oldVal){
        if (val==="right"){
          this.slideStyle.marginLeft="80vw";
          this.fillColor="#544E70";
          this.details.state="Global Pro Mask Policies";
        } else if (val==="left"){
          this.slideStyle.marginLeft="-80vw";
          this.fillColor="#A6330A";
          this.details.state="Global Anti Mask Policies";
        } else {
          this.slideStyle.marginLeft="0";
        }
      },
      selectYear(val, oldVal){
        console.log(val);
        this.details = anti_mask_laws.filter(yearData=>(yearData.year==val))[0].content[0];
        console.log(this.details[0]);
        this.isSelected=true;
      }
    },
    methods: {
      slideRight(){
        this.slide = "right";
        this.years = [2002,2009,2020];
      },
      slideLeft(){
        this.slide = "left";
        this.years = anti_mask_laws.map(({year, content})=>year)
      },
      angle(year) {
        const nArcs = (2020 - 1975) / 5 + 2;
        const startAngle = -5/12*Math.PI;
        const oneArc = Math.PI / 6;
        const unitAngle = oneArc / 5;
        if (year === 1723) {
          return startAngle;
        } else if (year === 1845) {
          return startAngle+oneArc;
        } else {
          return startAngle + 2 * oneArc + (year - 1975) * unitAngle;
        }
      },
      circleSize(year) {
        if (year === 1995 || year == 2016 || year === 2016) {
          return 10;
        } else {
          return 5;
        }
      },
      detailsOfYear(yr){
        details
      }
    },
    mounted(){

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
  overflow: hidden;
  font-family: 'Garamond';
  font-weight: 600;
}
.timeline-mask{
  position: relative;
  width:100vw;
  height: 100vh;
  margin-top:0;
  margin-left:0;
  display: block;
  background: #FBDD4A;
  z-index:25;
}

.pro-title {
  position:absolute;
  font-family:  'Garamond';
  display: block;
  font-weight: 600;
  font-size: 100px;
  color: white;
  letter-spacing: 1px;
  line-height: 80px;
  z-index:10;
  margin-top: 40vh;
  margin-left: 10vh;
  border-bottom-width: 10px;
  border-bottom-style: solid;
  padding-bottom: 7px
}
.anti-title {
  position:absolute;
  font-family:  'Garamond';
  display: block;
  font-weight: 600;
  font-size: 100px;
  color: black;
  letter-spacing: 1px;
  line-height: 80px;
  z-index:10;
  margin-top: 40vh;
  margin-left: 80vw;
  border-bottom-width: 10px;
  border-bottom-style: solid;
  padding-bottom: 7px
  /* margin-right:80vw; */
}
  .container{
    /* position:fixed; */
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -40vh;
    /* z-index: 0; */
  }

  .timeline{
    position: absolute;
    margin-top:0;
    z-index:0;
  }

  .details{
    position: absolute;
    display: block;
    margin-left: 10px;
    margin-top: -90px;
    width: 500px;
    height: 300px;
    z-index:5
  }
  .highlight{
    background-color: #A6330A;
    color: white;
  }
  .stateName{
    font-size: 20px;
    color: #A6330A;
    /* text-decoration: underline; */
    border-bottom-width: 4px;
    border-bottom-style: solid;
    padding-bottom: 3px
  }
  .law{
    display: inline-block;
    font-size: 18px;
    line-height: 27px;
  }
  .context{
    font-size: 18px;
    line-height: 27px;
    display: inline-block;
    width: 300px;
    margin-top: -500px;
    margin-left: 620px;
  }
  .nextButton{
    display:inline-block;
    position:absolute;
    background: #FBDD4A;
    color: black;
    font-family:  'Garamond';
    /* white-space: nowrap; */
    /* x: 90vh;
    y:90vw; */
    margin-top: 200px;
    margin-left: 90vw;
    z-index:15;
  }


  n-link{
    font-family:  'Garamond';
    padding: 5px;
    font-weight: 600;
    font-size:30px;
  }
</style>
