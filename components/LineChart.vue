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
    data(){
      return {
        margin: {
          top: 50,
          left: 50,
          right: 50,
          bottom: 50
        },
        height: 600,
        width: 600,
       
      }
    },
    methods: {
      createChart() {
        var formatDate = d3.timeParse("%Y-%m-%d");
        const data = date_counts.map(({Date,f0_})=>({date: formatDate(Date), value: parseInt(f0_)}));
        
        const svgDOM = this.$refs.svgLineChart;
        

        const svg = d3.select(svgDOM)
          .attr("width", '100%')
          .attr("height", this.height);

        svgDOM.style.backgroundColor = '#555';



        const x = d3.scaleTime()
          .domain(d3.extent(data, d => d.date))
          .range([this.margin.left, this.width - this.margin.right]);

        const y = d3.scaleLinear()
          .domain([0, d3.max(data, d => d.value)]).nice()
          .range([this.height - this.margin.bottom, this.margin.top]);

        const xAxis = d3.axisBottom(x).ticks(this.width / 80).tickSizeOuter(0)

        const line = d3.line()
          .x(d => x(d.date))
          .y(d => y(d.value));

        svg.append("path")
            .data(data)
            .attr("fill", "none")
            .attr("stroke", "steelblue")
            .attr("stroke-width", 1.5)
            .attr("stroke-linejoin", "round")
            .attr("stroke-linecap", "round")
            .attr("d", line);

        svg.append("g")
           .attr("transform", `translate(0, ${this.height} - ${this.margin.bottom})`)
           .call(xAxis);




      }
    },
    mouted() {
      this.createChart();
      console.log("done");
    },

  }
</script>


