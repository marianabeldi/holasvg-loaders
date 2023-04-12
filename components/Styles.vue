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
        tabindex="0"
      >
        <svg
          v-html="style.svg"
          width="50"
          height="50"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          overflow="visible"
          fill="#84c9d2"
        ></svg>
      </div>
      <div class="range-input">
        <label for="amount">Amount:</label>
        <input type="range" id="inputAmount" name="inputAmount" min="1" max="12" @input="changeAmount($event)" v-model="$state.amount" />
      </div>
      <div class="duration-input">
        <label for="duration">Duration:</label>
        <input type="number" id="inputDuration" name="inputDuration" min="0" max="99" @input="changeDuration($event)" v-model="$state.duration"/>s
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    changeAmount(e) {
      this.$state.amount = 0;

      this.$state.amount = parseInt(e.target.value);

      this.$computedAnimationFunction(); 

      this.$loaderCurrentFunction();

      this.$loaderSmilFunction();

      this.$loaderSassFunction();

    },
    changeDuration(e) {
      this.$state.duration = 0;
      this.$state.duration = parseInt(e.target.value);
      this.$computedAnimationFunction(); 

this.$loaderCurrentFunction();

this.$loaderSmilFunction();

this.$loaderSassFunction();
    },
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
        // if (this.$state.styleActive === "inline1") {
        //   this.$nextTick(() => {
        //     this.$state.stylesCode = this.$parent.$refs.stylesInline.innerHTML;
        //   });
        // }
        // if (this.$state.styleActive === "spinner1") {
        //   this.$nextTick(() => {
        //     this.$state.stylesCode = this.$parent.$refs.stylesSpinner.innerHTML;
        //   });
        // }
      }
      this.$loaderCurrentFunction();
      this.$loaderSmilFunction();
      // this.$getSmilCode();
    },

  },
};
</script>

<style lang="scss">

input[type="color"] {
  aspect-ratio: 1;
  background: transparent;
  border: none;
  border: 1px solid var(--textColor);
  border-radius: 4px;
  height: 32px;
  padding: 0;
  width: 32px;
}

input[type="color"]::-webkit-color-swatch-wrapper {
  padding: 0;
}

input[type="color"]::-webkit-color-swatch {
  border-color: currentColor;
  border-radius: 3px;
}

.range-input {
  margin-bottom: .8rem;
  label {
    display: inline-block;
    line-height: 1;
  }
}

input[type="range"] {
 border: solid 1px currentColor;
  border-radius: 10px;
  height: 12px;
  -webkit-appearance: none;
  outline: none;
  background: none;
}

input[type="range"]::-webkit-slider-runnable-track {
  background-color: #475a73;
  height: 10px;
  &:hover,
  &:focus {
    background: #5c7698;
  }
}

input[type="range"]::-webkit-slider-thumb {
  background: var(--siteLightblue);
  border-radius: 2px;
  cursor: ew-resize;
  margin-top: -7px;
  width: 10px;
  height: 24px;
  -webkit-appearance: none;
  vertical-align: middle;
  &:hover,
  &:focus {
    background: #ff5463;
    background: #84c9d2;
  }
}

.duration-input input {
    border-radius: 4px;
    border: 0;
    border: 1px solid var(--bgLighter);
    font-size: 1.1rem;
    margin-right: 2px;
    min-height: 40px;
    padding: 0 0 0 6px;
    &:focus {
      background-color: var(--siteYellow);
    }
}
</style>