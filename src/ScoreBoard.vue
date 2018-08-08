<template>
  <drop class="drop" @drop="handleDrop(...arguments)">
    <span>{{ name }}</span>
    <div class="grid-content">
       <el-progress type="circle" :percentage="percentScore" :status="status" :stroke-width=12 :show-text=false></el-progress>
    </div>
    <span>{{ score }} / {{ maxScore }}</span>
  </drop>
</template>

<script>
  export default {
    props: { 
      id: Number, 
      name: String, 
      score: Number, 
      maxScore: Number, 
      isGameSet: Boolean
    },
    methods: {
      handleDrop(data, event) {
        if (!this.isGameSet) {
          this.$emit('add-score', this.id, data)
        }
      }
    },
    computed: {
      percentScore: function() {
        return this.isFullScore ? 100
                                : this.score / this.maxScore * 100;
      },
      isFullScore: function() {
        return this.score >= this.maxScore;
      },
      status: function() {
        if (this.isFullScore) {
          return 'success';
        } else if (this.isGameSet) {
          return 'exception';
        }
      }
    }
  }
</script>

<!-- scoped CSS -->
<style scoped>
</style>
