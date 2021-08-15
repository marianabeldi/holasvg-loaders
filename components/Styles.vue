<template>
  <div class="style-bar-box">
    <h3>Style:</h3>
    <div>
      <div
        class="loop-container style-option"
        v-bind:key="style.id"
        v-for="style in $state.styles"
        @click="setStyle(style.id)"
        :class="{ active: $state.styleActive === style.id }"
      >
        <svg
          v-html="style.svg"
          width="50"
          height="50"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          overflow="visible"
          fill="#84c9d2"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    setStyle(styleid) {
      this.$state.styleActive = styleid;
      for (let i = 0; i < this.$state.styles.length; i++) {
        if (this.$state.styles[i].id === styleid) {
          this.$state.loaderCurrent = this.$state.styles[i].use;
        }
      }
      if (this.$state.codeActive === "SASS") {
        this.$setEffect("opacity");
        this.$setEffect("opacity");
        if (this.$state.styleActive === "inline1") {
          this.$nextTick(() => {
            this.$state.stylesCode = this.$parent.$refs.stylesInline.innerHTML;
          });
        }
        if (this.$state.styleActive === "spinner1") {
          this.$nextTick(() => {
            this.$state.stylesCode = this.$parent.$refs.stylesSpinner.innerHTML;
          });
        }
      }
      this.$getSmilCode();
    },

  },
};
</script>
