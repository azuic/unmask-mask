<template>
<div>
  <div class="timeline-mask" :style="slideStyle">
    <div id="title">
      <div id="pro-title" v-on:click="slideRight">
        <span class="title-text" @mouseover="hoverPro" @mouseleave="hoverPro">norm</span>
        <img class="direction" src="~assets/direction-w.png" width="50px" v-show="proActive&&!sectionDisplayed" :style="directionTranslate" />
      </div>
      <div id="anti-title" v-on:click="slideLeft">
        <img class="direction" src="~assets/direction.png" width="50px" v-show="antiActive&&!sectionDisplayed" :style="directionTranslate" />
        <span class="title-text" @mouseover="hoverAnti" @mouseleave="hoverAnti">stigma</span>
      </div>
    </div>

  </div>
  <div class="bg"></div>
  <h1 class="section-title">
    <div class="row-section"></div>
    <div class="row-section hoverable" v-for="(each,id) in sections" :key="id">{{each}}</div>

  </h1>
  <BackButton routerLink="/timeline" />
</div>
</template>

<script>
import BackButton from '~/components/BackButton.vue'
export default {
  components: {
    BackButton
  },
  data() {
    return {
      slideLeft: false,
      revealStyle: {
        backgroundColor: "#FBDD4A",
        transition: "2s"
      },
      isHover: false,
      info: [],
      sections: ["social firewall", "fashion statement", "pop culture", "..."]
    }
  },

  method: {
    revealText() {
      this.revealStyle.backgroundColor = "none";
      this.info = ["privacy and safety zone", "marine serre and smog couture", "BTS etc."];
    },
    coverText() {
      this.revealStyle.backgroundColor = "#FBDD4A";
      this.info = ["social firewall", "fashion statement", "pop culture"];
    }
  }
}
</script>

<style>
@font-face {
  font-family: 'Garamond', cursive;
  src: url('~assets/Garamond.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

body {
  overflow-x: hidden;
  font-family: 'Garamond';
  background-repeat: no-repeat;
}

.back-button {
  position: absolute;
  z-index: 55;
  margin-top: 5vh;
  margin-left: 44vw;
}

.row-section {
  display: block;
  background-color: #FBDD4A;
  color: black;
  width: 100vw;
  height: 20vh;
  padding-top: 4vh;
  padding-left: 5vw;
}

.hoverable:hover {
  background-color: transparent;

  transition: 0.5s;
}

.bg {
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-image: url('~assets/b.png');
  background-size: 150% auto;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  z-index: 0;
}

.section-title {
  position: absolute;
  margin-top: 0;
  font-family: 'Garamond';
  display: block;
  font-weight: 600;
  font-size: 8vw;
  color: black;
  letter-spacing: 1px;
  line-height: 0.8;
  z-index: 1;
}

#title-line1 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 4px;
}

#title-unmask {
  /* margin-left: 0; */
  width: 50vw;
  text-align: right;
}

#title-ing {
  /* color: white; */
  width: 50vw;
  text-align: left;
  /* z-index:11; */
}

#title-masks {
  /* color: white; */
  width: 50vw;
  margin-left: 50vw;
  text-align: left;
  padding-left: 4px;
}
</style>
