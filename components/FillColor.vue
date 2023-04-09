<template>
  <div class="style-bar-box">
    <h3>Colors:</h3>
    <div class="flex-btw">
      <label for="inputFillColor">Fill</label>
      <input
        id="inputFillColor"
        type="color"
        v-model="$state.fillColor"
      />
    </div>
    <div class="flex-btw">
      <label for="inputStrokeColor">Stroke</label>
      <input
        id="inputStrokeColor"
        type="color"
        v-model="$state.strokeColor"
      />
    </div>

  </div>

</template>

<script>
export default {
  methods: {
  },
};
</script>
