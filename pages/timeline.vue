<template>
  <div>
  <div class="timeline-mask" :style="slideStyle">
    <div id="title">
    <div id="pro-title" v-on:click="slideRight">
      <span class="title-text"  @mouseover="hoverPro" @mouseleave="hoverPro">pro</span>
      <img class="direction" src="/direction.png" width="50px"
            v-show="proActive&&!sectionDisplayed" :style="directionTranslate"/>
    </div>
    <div id="anti-title" v-on:click="slideLeft">
      <img class="direction" src="/direction.png" width="50px"
            v-show="antiActive&&!sectionDisplayed" :style="directionTranslate"/>
      <span class="title-text"  @mouseover="hoverAnti" @mouseleave="hoverAnti">anti</span>
    </div>
    </div>

  </div>
  <div v-if="sectionDisplayed"
        class="back" width="50px"
        :style="backStyle"
        v-on:click="slideCenter"
        ></div>
  <div class="container">
    <svg  class="timeline" ref="timeline" :width="width" :height="height" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid meet">
      <svg ref="circle" :x="offsetX" :y="offsetY" :width="radius*2" :height="radius*2" viewBox="0 0 1003 1003" fill="none" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
      <path d="M588.824 8.59612C603.15 11.1221 617.358 14.2721 631.41 18.0371" stroke="black" stroke-width="4"/>
      <path d="M631.41 18.0371C716.187 40.7532 793.492 85.385 855.553 147.447C917.615 209.508 962.247 286.813 984.963 371.59" stroke="black" stroke-width="4" stroke-dasharray="5 7"/>
      <path d="M984.963 371.59C1011.52 470.704 1006.94 575.588 971.846 672.01C936.752 768.432 872.841 851.721 788.788 910.576C704.735 969.431 604.61 1001 502 1001C399.39 1001 299.265 969.431 215.212 910.576C131.159 851.721 67.2483 768.432 32.1537 672.01C-2.94094 575.588 -7.52028 470.704 19.0371 371.59C45.5945 272.477 102.003 183.934 180.606 117.978C259.21 52.0214 356.203 11.8457 458.422 2.90264" stroke="black" stroke-width="4"/>
      </svg>
      <g>
        <defs>
          <filter x="0" y="0" width="1" height="1" id="bg-text">
            <feFlood :flood-color="fillColor"/>
            <feComposite in="SourceGraphic" operator="xor" />
          </filter>
        </defs>
      <g v-for="yr in years" :key="yr">
        <circle v-on:click="selectYear=yr" r="8" :cx="offsetX + radius + radius*Math.cos(angle(yr))" :cy="offsetY + radius + radius*Math.sin(angle(yr))" :fill="fillColor"/>
        <rect :x="offsetX + radius + (radius+35)*Math.cos(angle(yr))-22-1-2"
              :y="offsetY + radius + (radius+35)*Math.sin(angle(yr))+7-15-2"
              width="46"
              height="22"
              v-if="selectYear===yr"
              :fill="fillColor">
        </rect>
        <text :x="offsetX + radius + (radius+35)*Math.cos(angle(yr))-22"
              :y="offsetY + radius + (radius+35)*Math.sin(angle(yr))+7"
              :fill="(selectYear===yr)?'#fff':'#000'"
              font-size="22">
          {{yr}}
        </text>
      </g>
      </g>
    </svg>
    <div :style="showDetails" class="details">
      <span class="stateName" :style="{'color':fillColor}">{{details.state}}</span>
      <br><br>
      <div class="text-info">
      <div id="law">{{details.law}}</div>
      <div id="context">{{details.context}}</div>
      </div>
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
        backStyle:{
          marginLeft:"0",
          transform: "scaleX(1)"
        },
        sectionDisplayed: false,
        directionTranslate:{
          transform: "translate(0,10px)"
        },
        proActive: false,
        antiActive: false,
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
        width: 1200,
        radius: 400,
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
          this.proActive=true;
          this.sectionDisplayed=true;
          this.backStyle= {
            marginLeft:"80vw",
            transform: "scaleX(1)"};
        } else if (val==="left"){
          this.slideStyle.marginLeft="-80vw";
          this.fillColor="#A6330A";
          this.details.state="Global Anti Mask Laws";
          this.antiActive=true;
          this.sectionDisplayed=true;
          this.backStyle= {
            marginLeft:"15vw",
            transform: "scaleX(-1)"};
        } else {
          this.slideStyle.marginLeft="0";
          this.notCenter = true;
          this.sectionDisplayed=false;
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
      hoverAnti(){
        this.antiActive = !this.antiActive;
        this.directionTranslate.transform = "translate(0,10px) scaleX(1)"
      },
      hoverPro(){
        this.proActive = !this.proActive;
        this.directionTranslate.transform = "translate(0,10px) scaleX(-1)"
      },
      slideCenter(){
        this.slide="center";
        this.sectionDisplayed=false;
      },
      slideRight(){
        this.slide = "right";
        this.years = [2002,2009,2020];
        this.sectionDisplayed=true;
      },
      slideLeft(){
        this.slide = "left";
        this.years = anti_mask_laws.map(({year, content})=>year)
        this.sectionDisplayed=true;
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
  position: absolute;
  width:100vw;
  height: 100vh;

  display: block;
  background: #FBDD4A;
  z-index:25;

  font-family:  'Garamond';
  font-weight: 600;
  font-size: 100px;

}
.title-text{
  border-bottom-width: 10px;
  border-bottom-style: solid;
  padding-bottom: 7px;
  /* margin-top: 40vh; */
}
#title{
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
}
#pro-title {
  width: 50vw;
  height: 100vh;
  text-align: left;
  color: black;
  background-color: white;
  align-self: center;
  padding-top: 40vh;
  padding-left: 7vw;
}
#anti-title {
  width: 50vw;
  height: 100vh;
  text-align: right;
  color: white;
  background-color: black;
  padding-top: 40vh;
  padding-right: 10vw;
}

.back{
  position: absolute;
  display: block;
  width: 80px;
  height: 80px;
  background-image: url("/direction.png");
  background-size: contain;
  background-repeat: no-repeat;
  z-index: 50;
  margin-top: 43vh;
}
  .container{
    position:absolute;
    display: block;
    width: 100vw;
    height:100vh;
    justify-content: center;
    align-items: center;
    margin-top: 0;
    /* z-index: 20; */
  }

  .timeline{
    position: absolute;
    margin-top:0;
    margin-left: 13vw;
    z-index:0;
  }

  .details{
    position: absolute;
    display: block;
    margin-left: 34vw;
    margin-top: 350px;
    width: 60vw;
    /* height: 300px; */
    z-index:5
  }
  .highlight{
    background-color: #A6330A;
    color: white;
  }
  .stateName{
    font-size: 28px;
    color: #A6330A;
    /* text-decoration: underline; */
    border-bottom-width: 4px;
    border-bottom-style: solid;
    padding-bottom: 3px
  }
  .text-info{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 150px;
  }
  #law{
    /* display: block; */
    font-size: 22px;
    line-height: 33px;
    width: 620px;
  }
  #context{
    font-size: 18px;
    line-height: 27px;
    display: block;
    width: 300px;
    padding-top: 70px;

  }
  .nextButton{
    display:inline-block;
    position:absolute;
    background: #FBDD4A;
    color: black;
    font-family:  'Garamond';
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
