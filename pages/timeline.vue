<template>
  <div class="container">
    <svg ref="timeline" :width="width" :height="height" >
      <svg ref="circle" width="700" viewBox="0 0 1003 1003" fill="none" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
      <path d="M588.824 8.59612C603.15 11.1221 617.358 14.2721 631.41 18.0371" stroke="black" stroke-width="4"/>
      <path d="M631.41 18.0371C716.187 40.7532 793.492 85.385 855.553 147.447C917.615 209.508 962.247 286.813 984.963 371.59" stroke="black" stroke-width="4" stroke-dasharray="5 7"/>
      <path d="M984.963 371.59C1011.52 470.704 1006.94 575.588 971.846 672.01C936.752 768.432 872.841 851.721 788.788 910.576C704.735 969.431 604.61 1001 502 1001C399.39 1001 299.265 969.431 215.212 910.576C131.159 851.721 67.2483 768.432 32.1537 672.01C-2.94094 575.588 -7.52028 470.704 19.0371 371.59C45.5945 272.477 102.003 183.934 180.606 117.978C259.21 52.0214 356.203 11.8457 458.422 2.90264" stroke="black" stroke-width="4"/>
      </svg>
      <!-- <circle :r="radius" :cx="width/2" :cy="height/2" fill="none" stroke="black" stroke-width="0.5" /> -->
      <g v-for="yr in years" :key="yr">
        <circle r="5" :cx="width/2 +radius*Math.cos(angle(yr))" :cy="height/2+radius*Math.sin(angle(yr))" fill="#A6330A"/>
        <text :x="width/2 + (radius+25)*Math.cos(angle(yr))-10" :y="height/2 + (radius+25)*Math.sin(angle(yr))" fill="black">
          {{yr}}
        </text>
      </g>

    </svg>

  </div>


</template>

<script>
  export default {
    data() {
      return {
        height: 800,
        width: 800,
        radius: 350,
        years: [1723, 1845, 1975, 1985, 1990, 1995, 1999, 2000, 2002, 2004, 2005, 2006, 2009, 2010, 2011, 2012, 2013, 2014, 2016, 2017, 2018, 2019, 2020],
      }
    },
    methods: {
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
      }
    }
  }
</script>
<style>
  .container{
    margin-left: 25vw;
  }
</style>
