<template>
  <div class="style-bar-box">
    <h3>Colors:</h3>
    <div>
      <label for="inputFillColor">Fill color</label>
      <input
        id="inputFillColor"
        type="color"
        @input="changeFill"
        v-model="$state.fillValue"
      />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    changeFill() {
      this.$state.fillColor = this.$state.fillValue;
    },
  },
};
</script>
