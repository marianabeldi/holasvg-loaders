<template>
    <div class="style-bar-box">
          <h3>Shapes:</h3>
          <div>
            <div
              class="loop-container shape-option"
              v-bind:key="shape.id"
              v-for="shape in $state.shapes"
              @click="setShape(shape.id)"
              :class="{ active: $state.shapeActive === shape.id }"
              tabindex="0"
            >
              <svg
                v-html="shape.menu"
                width="50"
                height="50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
                overflow="visible"
                fill="#84c9d2"
              >
              </svg>
            </div>
            <button class="btn btn-custom" @click="$state.isActiveCustom = !$state.isActiveCustom">Custom</button>
            <textarea
              class="custom-shape"
              :class="{ active: $state.isActiveCustom }"
              placeholder="paste your svg! or shape, <path> or <text>.."
              title='💡 TRY: <text y="20">💩</text>'
              v-model="$state.customShape"
              @input="disabledOp()"
              required
            ></textarea>
            <button class="btn custom-shape-btn" :class="{ active: $state.isActiveCustom }" type="submit" @click="setShape('custom')" :disabled="$state.disabledSave">Save</button>
          </div>
        </div>
</template>


<script>
export default {
    methods: {
        setShape(shapeid) {
        this.$state.shapeActive = shapeid;
        for (let i = 0; i < this.$state.shapes.length; i++) {
            if (this.$state.shapes[i].id === shapeid) {
            this.$state.loaderCurrentDef = this.$state.shapes[i].svgspinner;
            if (this.$state.styleActive === "inline1") {
                this.$state.loaderCurrentDef = this.$state.shapes[i].svginline;
            }
            if (shapeid === "custom") {
                const shapes = ["<path", "<text", "<svg", "<rect", "<circle", "<polyline", "<ellipse", "<line", "<polygon"];
                const customShape = this.$state.customShape;

                for (const shape of shapes) {
                  const regex = new RegExp(`^${shape}`);
                  
                  if (regex.test(customShape)) {
                    this.$state.customShape = customShape.replace(regex, `${shape} id="loader"`);
                    break; // stop checking once a match is found
                  }
                }
                this.$state.loaderCurrentDef = this.$state.customShape;

            }
          }
        }
        this.$state.renderComponent = false;
        this.$nextTick(() => {
            this.$state.renderComponent = true;
        });
        // this.$getSmilCode();
        },
        disabledOp() {
            if (
                this.$state.customShape.startsWith("<path") ||
                this.$state.customShape.startsWith("<text") ||
                this.$state.customShape.startsWith("<svg") ||
                this.$state.customShape.startsWith("<rect") ||
                this.$state.customShape.startsWith("<circle") ||
                this.$state.customShape.startsWith("<polyline") ||
                this.$state.customShape.startsWith("<ellipse") ||
                this.$state.customShape.startsWith("<line") ||
                this.$state.customShape.startsWith("<polygon")
            ) {
                this.$state.disabledSave = false;
            } else {
                this.$state.disabledSave = true;
            }
        },
    }
}
</script>

<style lang="scss">
.custom-shape {
  background-color: var(--bgColor);
  border: 1px solid;
  color: var(--textColor);
  display: none;
  margin-top: 0.5rem;
  min-height: 4rem;
  padding: 0.2rem 0.5rem;
  width: 100%;
  &.active { display: block; }
}
.custom-shape-btn {
  background-color: var(--siteLightblue);
  color: var(--bgColor);
  display: none;
  margin-top: 0.5rem;
  width: 100%;
  &.active { display: block; }
  &:hover { background-color: var(--siteGreen); }
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
    &:hover { background-color: var(--siteLightblue); }
  }
}
.btn-custom {
  background-color: transparent;
  border-color: var(--siteLightblue);
  color: var(--textColor);
  margin: 0.5rem 0;
  &:hover {
    background-color: var(--siteLightblue);
    color: var(--bgColor);
  }
}
</style>