<template>
  <div id="app">
    <h1><i class="el-icon-mobile-phone"></i>{{ title }}</h1>
    <el-row type="flex" justify="space-around">
      <el-col v-for="team in teams" :key="team.id" :span="11" class="col-bg">
        <score-board v-bind="team" :maxScore="maxScore" :isGameSet="isGameSet" @add-score="handleAddScore"></score-board>
      </el-col>
    </el-row>
    <el-row style="margin-top: 40px;">
      <drag v-for="piece in pieces" :key="piece.id" :transfer-data="piece.point" class="drag">
        <piece :name="piece.name"></piece>
      </drag>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data: () => ({
      title: 'Goita Score',
      teams: [
        { id: 1, name: 'Team 1', score: 0 },
        { id: 2, name: 'Team 2', score: 0 },
      ],
      maxScore: 150,
      pieces: [
        { id: 1, name: 'し', point: 10 },
        { id: 2, name: '香', point: 20 },
        { id: 3, name: '馬', point: 20 },
        { id: 4, name: '銀', point: 30 },
        { id: 5, name: '金', point: 30 },
        { id: 6, name: '角', point: 40 },
        { id: 7, name: '飛', point: 40 },
        { id: 8, name: '王', point: 50 },
      ],
    }),
    methods: {
      handleAddScore(id, point) {
        var team = this.teams.find(function(el) {
          return el.id === id
        })
        team.score += point
      }
    },
    computed: {
      isGameSet: function() {        
        var max = this.maxScore
        return this.teams.some(function(el) {
          return (el.score >= max)
        })
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 20px;
  }
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  span {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-weight: normal;
    color: #2c3e50;
    font-size: 24px;
  }
  .el-row {
    margin-bottom: 20px;
  }
  .el-col {
    background-color: #F2F6FC;
    border-radius: 4px;
    padding-left: 4px;
    padding-right: 4px;
  }
  .el-button.is-circle {
    padding: 20px;
    box-shadow: 1px 1px 1px #999;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .col-bg {
    padding: 20px 0;
  }
  .drag {
    display: inline-block;
  }
  .drag+.drag {
    margin-left: 30px;
  }
</style>
