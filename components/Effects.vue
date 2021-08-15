<template>
    <div class="style-bar-box effects">
        <h3>Effects:</h3>
        <div>
            <div v-bind:key="effect.id" v-for="effect in $state.effects">
                <label class="checkmark-container" :for="effect.id">
                <input :ref="effect.id" type="checkbox" @change="setEffect(effect.id)" :checked="effect.value"/>
                <svg width="32" height="32" viewBox="0 0 32 32" aria-hidden="true" focusable="false">
                    <rect class="checkmark-bg" x="1" y="1" width="30" height="30" stroke="currentColor" fill="none" stroke-width="1" rx="2" ry="2" />
                    <polyline class="checkmark" points="8,17 14,23 25,8" stroke="transparent" stroke-linejoin="round" stroke-linecap="round" stroke-width="4" fill="none"/>
                </svg>
                {{ effect.id }}
                </label>
            </div>
            <!-- <div>
              <label class="checkmark-container" for="inputMatrix">
                <input id="inputMatrix" type="checkbox" @change="showMatrix = !showMatrix" :checked="isActive">
                  <svg width="32" height="32" viewBox="0 0 32 32" aria-hidden="true" focusable="false">
                    <rect class="checkmark-bg" x="1" y="1" width="30" height="30" stroke="currentColor" fill="none" stroke-width="1" rx="3" ry="3"/>
                    <polyline class="checkmark" points="8,17 14,23 25,8" stroke="transparent" stroke-linejoin="round" stroke-linecap="round" stroke-width="4" fill="none"/>
                  </svg>
                Matrix
              </label>
              <input type="text" placeholder="1, 2, 3, 4, 5, 6" class="show-matrix-position" :class="{ 'active': isActive }" />
            </div> -->
        </div>
    </div>
</template>

<script>
export default {
    methods: {
    setEffect(effectid) {
      if (this.$state.effectActive.includes(effectid)) {
        for (let i = 0; i < this.$state.effectActive.length; i++) {
          if (effectid === this.$state.effectActive[i]) {
            this.$state.effectActive.splice(i, 1);
            this.$state.loaderSassSpinner.splice(i, 1)
            this.$state.loaderSassInline.splice(i, 1)
            this.$state.keyframesEffects.splice(i, 1)
            for (let ef = 0; ef < this.$state.computedAnimationBoth.length; ef++) {
              for (let efe = 0; efe < this.$state.computedAnimationBoth[ef].length; efe++) {
                if(this.$state.computedAnimationBoth[ef][efe].includes(`${effectid}Loader`)) {
                    this.$state.computedAnimationBoth[ef].splice(efe, 1);
                }
              }
            }
          }
        }
      } else {
        this.$state.effectActive.push(effectid)
        this.$state.effects.forEach(function (obj, i) {
          if (effectid === obj.id) {
            this.$state.loaderSassSpinner.push(obj.sassSpinner);
            this.$state.loaderSassInline.push(obj.sassInline);
            this.$state.keyframesEffects.push(obj.keyframes);
            for (let ee = 1; ee < this.$state.itemsNumer; ee++) {
                if (this.$state.styleActive === "inline1") {
                    this.$state.computedAnimationBoth[ee-1].push(`1s ${(ee * 0.25)}s ${effectid}Loader infinite`)
                }
                if (this.$state.styleActive === "spinner1") {
                    this.$state.computedAnimationBoth[ee-1].push(`1s ${(ee * 0.08)}s ${effectid}Loader infinite`)
                }
            }
          }
        }, this);
      }
      if (this.$state.codeActive === "SASS") {
        var codeActiveReset = this.$state.codeActive
        this.$state.codeActive = ''
      }
      this.$nextTick(() => {
        if (this.$state.styleActive === "inline1" && codeActiveReset === "SASS") {
          this.$state.stylesCode = this.$parent.$refs.stylesInline.innerHTML
          this.$state.codeActive = codeActiveReset
        }
        if (this.$state.styleActive === "spinner1" && codeActiveReset === "SASS") {
          this.$state.stylesCode = this.$parent.$refs.stylesSpinner.innerHTML
          this.$state.codeActive = codeActiveReset
        }
      });
      this.$getSmilCode();
    },
  }
}
</script>

<style lang="scss">
.checkmark-container {
  cursor: pointer;
  align-items: center;
  display: flex;
  position: relative;
  text-transform: capitalize;
  input[type="checkbox"] {
    cursor: pointer;
    opacity: 0;
    position: absolute;
    left: -3px;
    top: -3px;
    height: 2rem;
    width: 2rem;
    &:hover + svg {
      .checkmark-bg {
        fill: var(--siteLightblue);
      }
    }
    &:checked + svg {
      .checkmark-bg { fill: var(--siteBlue); }
      .checkmark { stroke: white; }
    }
    &:focus + svg { outline: -webkit-focus-ring-color auto 1px; }
  }
  svg {
    margin-right: 0.8rem;
    stroke: var(--borderColor);
    width: 2rem;
    height: 2rem;
    * { transition: all 0.1s linear; }
  }
}
.checkmark-container svg {
  @media screen and (-ms-high-contrast: active) {
    rect { stroke: windowText; }
  }
}
@media screen and (-ms-high-contrast: active) {
  .checkmark-container input[type="checkbox"]:checked ~ svg {
    rect { fill: windowText; }
    polyline { stroke: highlight; }
  }
}
</style>