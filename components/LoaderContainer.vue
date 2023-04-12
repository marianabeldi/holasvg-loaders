<template>
  <div class="loader-container">
    <template v-if="!$state.codeActive && !$state.styleActive && !$state.shapeActive">
      <p>Select a language to start</p>
    </template>
    <template v-if="$state.codeActive && !$state.styleActive">
      <p>Select a style to start</p>
    </template>
    <template v-if="$state.codeActive && $state.styleActive && !$state.shapeActive">
      <p>Select a shape to start</p>
    </template>
    <template v-if="$state.styleActive === 'spinner1'">
      <svg
        class="single-loader"
        ref="spinnerLoaderRef"
        id="spinnerLoaderRef"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 100 100"
        overflow="visible"
        :fill="$state.fillColor"
        :stroke="$state.strokeColor"
        v-show="$state.renderComponent"
      >
        <defs>
          <template v-if="$state.shapeActive === 'custom'">
            <svg id="spinner" v-html="$state.customShape"></svg>
          </template>
          <template v-if="$state.shapeActive === 'circle'">
            <circle id="spinner" r="4" cx="50" cy="50" transform="translate(0 -30)"/>
          </template>
          <template v-if="$state.shapeActive === 'square'">
            <rect id="spinner" x="15" y="45" width="8" height="8" />
          </template>
          <template v-if="$state.shapeActive === 'triangle'">
            <polygon id="spinner" points="20,44 25,53 15,53" />
          </template>
          <template v-if="$state.shapeActive === 'rect'">
            <rect id="spinner" x="15" y="45" width="6" height="14" rx="2" ry="2"/>
          </template>
          <template v-if="$state.shapeActive === 'bar'">
            <rect id="spinner" x="46.5" y="45" width="6" height="14" rx="2" ry="2" transform="translate(0 -30)"/>
          </template>
        </defs>

        <template v-if="$state.codeActive === 'SMIL'">
          <use :key="`smilSpinner${i}`" v-for="(singleSpinner, i) in $state.amount" xlink:href="#spinner" :transform="`rotate(${i * 360 / $state.amount} 50 50)`">
            <template v-if="$state.effectActive.includes('opacity')">
              <animate
                attributeName="opacity"
                values="0;1;0"
                :dur="`${$state.duration}s`"
                :begin="`${i * 1 / $state.amount * $state.duration}s`"
                repeatCount="indefinite"
              />
            </template>
            <template v-if="$state.effectActive.includes('translate')">
              <animateTransform
                attributeName="transform"
                type="translate"
                additive="sum"
                :dur="`${$state.duration}s`"
                :begin="`${i * 1 / $state.amount * $state.duration}s`"
                repeatCount="indefinite"
                from="0 0"
                to="10"
              />
            </template>
            <template v-if="$state.effectActive.includes('rotate')">
              <animateTransform
                attributeName="transform"
                type="rotate"
                additive="sum"
                :dur="`${$state.duration}s`"
                :begin="`${i * 1 / $state.amount * $state.duration}s`"
                repeatCount="indefinite"
                from="0 50 50"
                to="360 0 0"
              />
            </template>
            <template v-if="$state.effectActive.includes('scale')">
              <animateTransform
                attributeName="transform"
                type="scale"
                additive="sum"
                :dur="`${$state.duration}s`"
                :begin="`${i * 1 / $state.amount * $state.duration}s`"
                repeatCount="indefinite"
                from="0"
                to="1.2"
              />
            </template>
            <template v-if="$state.effectActive.includes('skewX')">
              <animateTransform
                attributeName="transform"
                type="skewX"
                additive="sum"
                :dur="`${$state.duration}s`"
                :begin="`${i * 1 / $state.amount * $state.duration}s`"
                repeatCount="indefinite"
                from="0"
                to="20"
              />
            </template>
          </use>
        </template>

        <template v-if="$state.codeActive === 'SASS'">
          <g
            v-bind:key="`sassSpinner${i}`"
            v-for="i in $state.amount"
            :transform="`rotate(${i * 360 / $state.amount} 50 50)`"
          >
            <use
              xlink:href="#spinner"
              :style="{ animation: $state.computedAnimation[i-1].join(',') }"
            />
          </g>
        </template>
      </svg>
    </template>

    <template v-if="$state.styleActive === 'inline1'">
      <svg
        ref="inlineLoaderRef"
        id="inlineLoaderRef"
        class="single-loader"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 100 100"
        overflow="visible"
        :fill="$state.fillColor"
        :stroke="$state.strokeColor"
        v-show="$state.renderComponent"
      >
        <defs>
          <template v-if="$state.shapeActive === 'custom'">
            <svg id="inline" v-html="$state.customShape"></svg>
          </template>
          <template v-if="$state.shapeActive === 'circle'">
            <circle id="inline" cx="20" cy="50" r="4" />
          </template>
          <template v-if="$state.shapeActive === 'square'">
            <rect id="inline" x="15" y="45" width="8" height="8" />
          </template>
          <template v-if="$state.shapeActive === 'triangle'">
            <polygon id="inline" points="20,44 25,53 15,53" />
          </template>
          <template v-if="$state.shapeActive === 'rect'">
            <rect id="inline" x="10" y="45" width="14" height="6" rx="2" ry="2"/>
          </template>
          <template v-if="$state.shapeActive === 'bar'">
            <rect id="inline" x="15" y="45" width="6" height="14" rx="2" ry="2"/>
          </template>
        </defs>

        <template v-if="$state.codeActive === 'SMIL'">
          <use
            v-bind:key="`smilInline${i}`"
            v-for="i in $state.amount"
            xlink:href="#inline"
            :x="`${(100/2)-($state.amount-1)*16/2+(i-1)*16 - 20}`"
          >
            <template v-if="$state.effectActive.includes('opacity')">
              <animate
                attributeName="opacity"
                values="0;1;0"
                :dur="`${$state.duration}s`"
                :begin="`${i * 1 / $state.amount * $state.duration}s`"
                repeatCount="indefinite"
              />
            </template>
            <template v-if="$state.effectActive.includes('translate')">
              <animateTransform
                attributeName="transform"
                type="translate"
                additive="sum"
                :dur="`${$state.duration}s`"
                :begin="`${i * 1 / $state.amount * $state.duration}s`"
                repeatCount="indefinite"
                from="0 0"
                to="10"
              />
            </template>
            <template v-if="$state.effectActive.includes('rotate')">
              <animateTransform
                attributeName="transform"
                type="rotate"
                additive="sum"
                :dur="`${$state.duration}s`"
                :begin="`${i * 1 / $state.amount * $state.duration}s`"
                repeatCount="indefinite"
                from="0 50 50"
                to="360 0 0"
              />
            </template>
            <template v-if="$state.effectActive.includes('scale')">
              <animateTransform
                attributeName="transform"
                type="scale"
                additive="sum"
                :dur="`${$state.duration}s`"
                :begin="`${i * 1 / $state.amount * $state.duration}s`"
                repeatCount="indefinite"
                from="0"
                to="1.2"
              />
            </template>
            <template v-if="$state.effectActive.includes('skewX')">
              <animateTransform
                attributeName="transform"
                type="skewX"
                additive="sum"
                :dur="`${$state.duration}s`"
                :begin="`${i * 1 / $state.amount * $state.duration}s`"
                repeatCount="indefinite"
                from="0"
                to="20"
              />
            </template>
          </use>
        </template>

        <template v-if="$state.codeActive === 'SASS'">
          <use
            v-bind:key="`sassSpinner${i}`"
            v-for="i in $state.amount"
            xlink:href="#inline"
            :x="`${(100/2)-($state.amount-1)*16/2+(i-1)*16 - 20}`"
            :style="{ animation: $state.computedAnimation[i-1].join(',') }"
          />
        </template>
      </svg>
    </template>
  </div>
</template>

<script>
export default {
  methods: {

  },
  updated(){

  },
};
</script>

<style lang="scss">
  .loader-container {
    background-color: var(--bgColor);
    border: 4px solid var(--borderColor);
    display: grid;
    flex: 1 1 50%;
    padding: 1em;
    position: relative;
    transition: all 0.2s;
    svg.single-loader {
      align-self: center;
      max-height: 50vh;
      width: 100%;
    }
  }
</style>
