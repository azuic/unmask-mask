<template>
  <div class="container">
    <svg ref="container" :width="width" :height="height" >
      <circle :r="radius" :cx="width/2" :cy="height/2" fill="none" stroke="black" stroke-width="0.5" />
      <g v-for="(yr,i) in years">
        <circle r="5" :cx="width/2 +radius*Math.sin(i*angle(yr))" :cy="height/2+radius*Math.cos(i*angle(yr))" fill="#A6330A"/>
        <text :x="width/2 + (radius+25)*Math.sin(i*angle(yr))" :y="height/2 + (radius+25)*Math.cos(i*angle(yr))" fill="black">
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
        height: 600,
        width: 800,
        radius: 250,
        years: [1723, 1845, 1975, 1985, 1990, 1995, 1999, 2000, 2002, 2004, 2005, 2006, 2009, 2010, 2011, 2012, 2013, 2014, 2016, 2017, 2018, 2019, 2020],
      }
    },
    methods: {
      angle(year) {
        const nArcs = (2020 - 1975) / 5 + 2;
        const startAngle = Math.PI / 180;
        const oneArc = (2 * Math.PI - 2 * startAngle) / nArcs;
        const unitAngle = (2 * Math.PI - 2 * startAngle - 2*oneArc)/(2020-1975)
        if (year === 1723) {
          return -Math.PI/2+startAngle;
        } else if (year === 1845) {
          return-Math.PI/2+startAngle+oneArc;
        } else {
          return Math.PI-startAngle + 2 * oneArc + (year - 1975) * unitAngle;
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
