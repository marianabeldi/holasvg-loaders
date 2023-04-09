<template>
    <div class="style-bar-box effects">
        <h3>Effects:</h3>
        <div>
            <div v-bind:key="effect.id" v-for="effect in $state.effects">
                <label class="checkmark-container" :for="effect.id">
                <input :ref="effect.id" type="checkbox" @change="$setEffect(effect.id)" :checked="effect.value"/>
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