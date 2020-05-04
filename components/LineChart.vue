<template>
<!-- Create a div where the graph will take place -->
<div>
  <!--<div style="display:flex;margin:auto;padding:0;"></div>-->
  <svg ref="svgLineChart">

  </svg>
</div>
</template>

<script>
  import * as d3 from "d3";
  import date_counts from "~/assets/date_counts.json";
  export default {
    name: "LineChart",
    props:['selectedStartDate'],
    data(){
      return {
        startDate: "Since 2017",
        margin: {
          top: 50,
          left: 50,
          right: 50,
          bottom: 50
        },
        height: 800,
        width: 1500,

      }
    },
    watch:{
      selectedStartDate(val, oldVal){
        this.startDate = val;
        d3.selectAll("svg > *").remove();
        this.createChart();
      }
    },
    computed:{
      parseStartDate(){
        console.log(this.startDate);
        if (this.startDate==="Since 2017"){
          return new Date("2017-01-01")
        } else if (this.startDate==="Since 2018"){
          return new Date("2018-01-01")
        } else if (this.startDate==="Since 2019"){
          return new Date("2019-01-01")
        } else {
          return new Date("2020-01-01")
        }
      }
    },
    methods: {
      createChart() {
        var formatDate = d3.timeParse("%Y-%m-%d");
        const data = date_counts.map(({Date,f0_})=>(
          {date: formatDate(Date), value: parseInt(f0_)}
        ));
        const svgDOM = this.$refs.svgLineChart;


        const svg = d3.select(svgDOM)
          .attr("width", '100%')
          .attr("height", this.height)
          .attr("viewBox",[0,0,this.width,this.height]);

        svg.append("clipPath")
            .attr("id", "linechart-clip")
            .append("rect")
            .attr("x", this.margin.left)
            .attr("y", this.margin.top)
            .attr("width", this.width - this.margin.left - this.margin.right)
            .attr("height", this.height - this.margin.top - this.margin.bottom);


        const x = d3.scaleTime()
          .domain([this.parseStartDate, d3.max(data, d => d.date)])
          .range([this.margin.left, this.width - this.margin.right]);

        const y = d3.scaleLinear()
          .domain([0, d3.max(data, d => d.value)]).nice()
          .range([this.height - this.margin.bottom, this.margin.top]);

        const xAxis = d3.axisBottom(x).ticks(this.width / 80).tickSizeOuter(0);
        const yAxis = d3.axisLeft(y);

        const line = d3.line()
          .x(d => x(d.date))
          .y(d => y(d.value));

        svg.append("g")
         .attr("class","xAxis")
         .attr("transform", `translate(0, ${this.height-this.margin.bottom})`)
         .call(xAxis);

       svg.append("g")
        .attr("class","yAxis")
        .attr("transform", `translate(${this.margin.left},0)`)
        .call(yAxis);

        svg.append("path")
            .datum(data)
            .attr("fill", "none")
            .attr("stroke", "black ")
            .attr("stroke-width", 1.5)
            .attr("stroke-linejoin", "round")
            .attr("stroke-linecap", "round")
            .attr("d", line)
            .attr("clip-path", "url(#linechart-clip)");

      }
    },
    mounted() {
      this.createChart();
      // console.log(this.selectedStartDate);
    }

  }
</script>

<style>
  .xAxis path, .xAxis line, .yAxis path, .yAxis line{
    fill: none;
    stroke: none;
  }
</style>
