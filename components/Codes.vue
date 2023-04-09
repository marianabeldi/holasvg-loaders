<template>
  <div class="options-btn">
    <button
      class="btn"
      v-bind:key="code.id"
      v-for="code in $state.codes"
      @click="setCode(code.id)"
      :class="{ active: $state.codeActive === code.id }"
    >
      {{ code.id }}
    </button>
  </div>
</template>


<script>
export default {
  methods: {
    setCode(codeid) {
      this.$state.codeActive = codeid;
      if (codeid === "SMIL") {
        this.$state.loaderSmilActive = true

        this.$loaderCurrentFunction();

        this.$loaderSmilFunction();

      }
      else {
        this.$state.loaderSmilActive = false;
      }
      this.$nextTick(() => {
        if (codeid === "SASS") {
            this.$state.stylesCode = this.$parent.$refs.stylesLoaderSass.innerHTML;
        }
        // if (codeid === "SASS" && this.$state.styleActive === "inline1") {
        //   this.$state.stylesCode = this.$parent.$refs.stylesInline.innerHTML
        // }
       });
    },
  }
}
</script>

<style lang="scss">
    .options-btn {
        display: flex;
        flex: 1 1 100%;
    }
</style>
