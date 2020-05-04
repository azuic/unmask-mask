<template>
  <div>

    <LineChart id="volume-line-chart" :selectedStartDate="pickStartDate"/>
    <div class="date-range" style="margin-top: 20px">
      <el-radio-group v-model="pickStartDate" size="medium" @change="newStartDate">
        <el-radio-button label="Since 2017"></el-radio-button>
        <el-radio-button label="Since 2018"></el-radio-button>
        <el-radio-button label="Since 2019"></el-radio-button>
        <el-radio-button label="Since 2020"></el-radio-button>
      </el-radio-group>
    </div>
  </div>


</template>

<script>
  import LineChart from '~/components/LineChart.vue'
  export default {
    components: {
      LineChart
    },
    data(){
      return{
        pickStartDate: "Since 2017",
        selectedStartDate: ""
      }
    },
    methods:{
      newStartDate(date){
        // console.log(this.pickStartDate)
        this.pickStartDate = date;
      }
    }

}
</script>

<style>
#volume-line-chart{
  margin-top: 10vh;
}

  .date-range{
    display: flex;
    justify-content: center;

  }

  .el-radio-button__inner {
    white-space: nowrap;
    background: #FFF;
    border: 1px solid #DCDFE6;
    font-weight: 600;
    border-left: 0;
    color: #ABACAE;
    -webkit-appearance: none;
    text-align: center;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    outline: 0;
    margin: 0;
    position: relative;
    cursor: pointer;
    -webkit-transition: all .3s cubic-bezier(.645, .045, .355, 1);
    transition: all .3s cubic-bezier(.645, .045, .355, 1);
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 0
  }

  .el-radio-button__inner:hover {
    color: #FBDD4A
  }

  .el-radio-button:first-child .el-radio-button__inner {
    border-left: 1px solid #DCDFE6;
    border-radius: 4px 0 0 4px;
    -webkit-box-shadow: none !important;
    box-shadow: none !important
  }

  .el-radio-button__orig-radio {
    opacity: 0;
    outline: 0;
    position: absolute;
    z-index: -1
  }

  .el-radio-button__orig-radio:checked+.el-radio-button__inner {
    color: #000;
    background-color: #FBDD4A;
    border-color: #FBDD4A;
    -webkit-box-shadow: -1px 0 0 0 #FBDD4A;
    box-shadow: -1px 0 0 0 #FBDD4A
  }

  .el-radio-button__orig-radio:disabled+.el-radio-button__inner {
    color: #C0C4CC;
    cursor: not-allowed;
    background-image: none;
    background-color: #FFF;
    border-color: #EBEEF5;
    -webkit-box-shadow: none;
    box-shadow: none
  }

  .el-radio-button__orig-radio:disabled:checked+.el-radio-button__inner {
    background-color: #F2F6FC
  }

  .el-radio-button:focus:not(.is-focus):not(:active):not(.is-disabled) {
    -webkit-box-shadow: 0 0 2px 2px #FBDD4A;
    box-shadow: 0 0 2px 2px #FBDD4A
  }
</style>
