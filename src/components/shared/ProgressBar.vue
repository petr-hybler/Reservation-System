<template lang="html">
  <div class="">
    <div class="progress" style="height: 1px;">
      <div class="progress-bar progress-bar-striped bg-dark"
            role="progressbar"
            :style="{width: stepSize + '%'}"
            aria-valuemin="0"
            aria-valuemax="100"></div>
    </div>
    <br>
    <div class="progress" style="height: 20px;">
      <div class="progress-bar progress-bar-striped bg-dark"
            role="progressbar"
            :style="{width: stepSize + '%'}"
            aria-valuemin="0"
            aria-valuemax="100"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['stepSize']
}
</script>

<style lang="css" scoped>
</style>
