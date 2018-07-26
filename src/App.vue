<template>
  <div id="app">
    <h1><i class="el-icon-mobile-phone"></i>{{ title }}</h1>
    <el-row type="flex" justify="space-around">
      <el-col :span="11" class="col-bg">
        <drop class="drop" @drop="handleDrop('team1', ...arguments)">
          <span>Team 1</span>
          <div class="grid-content">
            <el-progress type="circle" v-bind:percentage="percentScore1" v-bind:status="status1" :stroke-width=12 :show-text=false></el-progress>
          </div>
          <span>{{ score.team1 }} / {{maxScore}}</span>
        </drop>
      </el-col>
      <el-col :span="11" class="col-bg">
        <drop class="drop" @drop="handleDrop('team2', ...arguments)">
          <span>Team 2</span>
          <div class="grid-content">
            <el-progress type="circle" v-bind:percentage="percentScore2" v-bind:status="status2" :stroke-width=12 :show-text=false></el-progress>
          </div>
          <span>{{ score.team2 }} / {{maxScore}}</span>
        </drop>
      </el-col>
    </el-row>
    <el-row>
      <drag class="drag" :transfer-data="10"><el-button circle>10</el-button></drag>
      <drag class="drag" :transfer-data="20"><el-button circle>20</el-button></drag>
      <drag class="drag" :transfer-data="30"><el-button circle>30</el-button></drag>
      <drag class="drag" :transfer-data="40"><el-button circle>40</el-button></drag>
      <drag class="drag" :transfer-data="50"><el-button circle>50</el-button></drag>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'app',
  data: () => ({
    title: 'Goita Score',
    score: {
      team1: 0,
      team2: 0
    },
    maxScore: 150
  }),
  methods: {
    handleDrop(team, data, event) {
      if (this.isFullScore1 || this.isFullScore2) { return }
      this.score[team] += data;
    },
  },
  computed: {
    percentScore1: function() {
      return this.isFullScore1 ? 100
                          : this.score['team1'] / this.maxScore * 100;
    },
    percentScore2: function() {
      return this.isFullScore2 ? 100
                          : this.score['team2'] / this.maxScore * 100;
    },
    isFullScore1: function() {
      return this.score['team1'] >= this.maxScore;
    },
    isFullScore2: function() {
      return this.score['team2'] >= this.maxScore;
    },
    status1: function() {
      if (this.isFullScore1) {
        return 'success';
      } else if (this.isFullScore2) {
        return 'exception';
      }
    },
    status2: function() {
      if (this.isFullScore2) {
        return 'success';
      } else if (this.isFullScore1) {
        return 'exception';
      }
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
  margin-left: 20px;
}
</style>
