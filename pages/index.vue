<template>
  <div>
    <client-only>
      <h1><span class="home-link"><a rel="noopener" target="_PARENT" href="https://holasvg.com/">hola svg</a></span>Free Open SVG <span class="highlight">Loaders</span></h1>
      <h2>Some notes about SMIL and Saas <a rel="noopener" href="https://css-tricks.com/how-i-made-a-generator-for-svg-loaders-with-sass-and-smil-options/">here</a>. <br>Some examples to integrate the loaders in your project <a rel="noopener" href="https://codepen.io/collection/kNBbaP">here</a>.</h2>
      <main class="main-content">
        <aside class="styles-bar">
          <Codes />
          <Styles />
          <FillColor />
          <Shapes />
          <Effects />
        </aside>
        <LoaderContainer />

        <div class="code-generator">
          <template v-if="!$state.loaderSmilActive">
            <div class="code-svg">
              <pre>
                <code class="language-xml">&#x3C;svg width=&#x22;100&#x22; height=&#x22;100&#x22; xmlns=&#x22;http://www.w3.org/2000/svg&#x22; viewBox=&#x22;0 0 100 100&#x22; overflow=&#x22;visible&#x22; fill="{{ $state.fillValue }}"&#x3E;
                    &#x3C;defs&#x3E;
                      {{ $state.loaderCurrentDef }}
                    &#x3C;/defs&#x3E;  
                      {{ $state.loaderCurrent }}
                    &#x3C;/svg&#x3E;
                </code>
              </pre>
              <button
                type="button"
                class="btn btn-copy"
                @click="sassClipboard()"
              >
                {{ $state.copyText }}
              </button>
            </div>
          </template>
          <template v-if="$state.loaderSmilActive">
            <div class="code-svg">
              <!-- <prism lang="xml"></prism> -->
              <pre>
                  <code class="language-xml" ref="svgDownload">&#x3C;svg xmlns=&#x22;http://www.w3.org/2000/svg&#x22; viewBox=&#x22;0 0 100 100&#x22; overflow=&#x22;visible&#x22; fill="{{ $state.fillValue }}"&#x3E;
                      {{ $state.loaderSmil }} 
                    &#x3C;/svg&#x3E;
                  </code>
              </pre>
              <button
                type="button"
                class="btn btn-copy smil-copy"
                @click="smilClipboard()"
              >
                {{ $state.copyText }}
              </button>
              <button
                type="button"
                class="btn btn-download"
                @click="downloadSvg()"
              >
                Download .svg
              </button>
            </div>
            <form
              action="https://codepen.io/pen/define"
              method="POST"
              target="_blank"
            >
              <input type="hidden" name="data" :value="$state.codepenvalue" />
              <button
                tabindex="0"
                type="button"
                class="btn btn-codepen"
                @click="holacodepenSmil()"
              >
                <svg viewBox="0 0 100 100">
                  <path
                    d="M100 34.2c-.4-2.6-3.3-4-5.3-5.3L84 21.8c-8.5-5.7-17.1-11.4-25.6-17.1-2-1.3-4-2.7-6-4-1.4-1-3.3-1-4.8 0L30.4 12.2 5.2 29C3 30.4.1 31.8 0 34.8c-.1 3.3 0 6.7 0 10v16c0 2.9-.6 6.3 2.1 8.1 6.4 4.4 12.9 8.6 19.4 12.9 8 5.3 16 10.7 24 16 2.2 1.5 4.4 3.1 7.1 1.3 2.3-1.5 4.5-3 6.8-4.5 8.9-5.9 17.8-11.9 26.7-17.8l9.9-6.6c.6-.4 1.3-.8 1.9-1.3 1.4-1 2-2.4 2-4.1V37.3c.1-1.1.2-2.1.1-3.1 0-.1 0 .2 0 0zM54.3 12.3L88 34.8 73 44.9 54.3 32.4V12.3zm-8.6 0v20L27.1 44.8 12 34.8l33.7-22.5zM8.6 42.8L19.3 50 8.6 57.2V42.8zm37.1 44.9L12 65.2l15-10.1 18.6 12.5v20.1zM50 60.2L34.8 50 50 39.8 65.2 50 50 60.2zm4.3 27.5v-20l18.6-12.5 15 10.1-33.6 22.4zm37.1-30.5L80.7 50l10.8-7.2-.1 14.4z"
                  />
                </svg>
                Create CodePen
              </button>
            </form>
          </template>
          <div v-show="$state.codeActive === 'SASS'">
            <div class="code-styles">
              <div v-show="$state.styleActive === 'spinner1'">
                <pre>
                <code class="language-scss" ref="stylesSpinner">@for $i from 1 to 13 {
                    .loader:nth-of-type(#{$i}) * {
                      animation: <span v-bind:key="`animationspinner${a}`" v-for="(animationspinner, a) in $state.loaderSassSpinner"> {{ animationspinner }}</span>
                    }
                  }
                  <span v-bind:key="`keyframesEffects${key}`" v-for="(ke, key) in $state.keyframesEffects">{{ ke }}</span>
                </code>
              </pre>
              </div>
              <div v-show="$state.styleActive === 'inline1'">
                <pre>
                <code class="language-css" ref="stylesInline">@for $i from 1 to 5 {
                    .loader:nth-of-type(#{$i}) { 
                      animation: <span v-bind:key="`animationinline${z}`" v-for="(animationinline, z) in $state.loaderSassInline"> {{ animationinline }}</span>
                    }
                  }
                  <span v-bind:key="`keyframesEff${key}`" v-for="(ke, key) in $state.keyframesEffects">{{ ke }}</span>
                </code>
              </pre>
              </div>
              <button
                type="button"
                class="btn btn-copy"
                @click="stylesClipboard()"
              >
                {{ $state.copyText }}
              </button>
            </div>
            <form
              action="https://codepen.io/pen/define"
              method="POST"
              target="_blank"
            >
              <input type="hidden" name="data" :value="$state.codepenvalue" />
              <button
                tabindex="0"
                type="button"
                class="btn btn-codepen"
                @click="holacodepenSass()"
              >
                <svg viewBox="0 0 100 100">
                  <path
                    d="M100 34.2c-.4-2.6-3.3-4-5.3-5.3L84 21.8c-8.5-5.7-17.1-11.4-25.6-17.1-2-1.3-4-2.7-6-4-1.4-1-3.3-1-4.8 0L30.4 12.2 5.2 29C3 30.4.1 31.8 0 34.8c-.1 3.3 0 6.7 0 10v16c0 2.9-.6 6.3 2.1 8.1 6.4 4.4 12.9 8.6 19.4 12.9 8 5.3 16 10.7 24 16 2.2 1.5 4.4 3.1 7.1 1.3 2.3-1.5 4.5-3 6.8-4.5 8.9-5.9 17.8-11.9 26.7-17.8l9.9-6.6c.6-.4 1.3-.8 1.9-1.3 1.4-1 2-2.4 2-4.1V37.3c.1-1.1.2-2.1.1-3.1 0-.1 0 .2 0 0zM54.3 12.3L88 34.8 73 44.9 54.3 32.4V12.3zm-8.6 0v20L27.1 44.8 12 34.8l33.7-22.5zM8.6 42.8L19.3 50 8.6 57.2V42.8zm37.1 44.9L12 65.2l15-10.1 18.6 12.5v20.1zM50 60.2L34.8 50 50 39.8 65.2 50 50 60.2zm4.3 27.5v-20l18.6-12.5 15 10.1-33.6 22.4zm37.1-30.5L80.7 50l10.8-7.2-.1 14.4z"
                  />
                </svg>
                Create CodePen
              </button>
            </form>
          </div>
        </div>
      </main>
      <Share />
      <Footer/>
    </client-only>
  </div>
</template>

<script>
export default {
  head() {
    return {
      bodyAttrs: { class: "loaders-page" },
      title: "Hola SVG Loaders",
      meta: [
        { name: "title", content: "Hola SVG Loaders - Free SVG Loading Generator" },
        { name: "description", content: "Free SVG Loader Generator" },
        { property: "og:type", content: "website" },
        { property: "og:url", content: "https://holasvg.com/loaders/" },
        { property: "og:title", content: "Hola SVG Loaders - Free SVG Loading Generator" },
        { property: "og:description", content: "Free SVG Loader Generator" },
        { property: "og:image", content: "/holasvg-loaders.gif" },
        { property: "og:image", content: "/holasvg-loaders-preview.png" },
        { property: "twitter:card", content: "summary_large_image" },
        { property: "twitter:url", content: "https://holasvg.com/loaders/" },
        { property: "twitter:title", content: "Hola SVG Loaders - Free SVG Loading Generator" },
        {
          property: "twitter:description",
          content: "Free SVG Loader Generator",
        },
        { property: "twitter:image", content: "/holasvg-loaders.gif" },
      ],
    };
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {
    loaderURL() {
      const DOMURL = self.URL || self.webkitURL || self;
      var svgString;
      if (this.$state.styleActive === "spinner1") {
        svgString = new XMLSerializer().serializeToString(
          document.getElementById('spinnerLoaderRef')
        );
        svgString = svgString
          .replaceAll("<!---->", "")
          .replaceAll("normal none running", "")
          .replaceAll(
            'viewBox="0 0 100 100"',
            'viewBox="0 0 100 100" width="100" height="100"'
          );
      }
      if (this.$state.styleActive === "inline1") {
        svgString = new XMLSerializer().serializeToString(
          document.getElementById('inlineLoaderRef')
        );
        svgString = svgString
          .replaceAll("<!---->", "")
          .replaceAll("normal none running", "")
          .replaceAll(
            'viewBox="0 0 100 100"',
            'viewBox="0 0 100 100" width="100" height="100"'
          );
      }
      const svg = new Blob([svgString], {
        type: "image/svg+xml;charset=utf-8",
      });
      return DOMURL.createObjectURL(svg);
    },
    downloadSvg() {
      const link = document.createElement("a");
      link.download = "my-loader.svg";
      link.href = this.loaderURL();
      link.click();
    },
    smilClipboard() {
      var smilcodepre = this.$state.loaderSmil;
      var fullsmillcode =
        '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" overflow="visible" fill="' +
        this.$state.fillColor +
        '">' +
        smilcodepre +
        "</svg>";
      this.$state.copyText = "Copied!";
      setTimeout(() => (this.$state.copyText = "Copy"), 1000);
      this.copyToClipboard(fullsmillcode);
    },
    sassClipboard() {
      var sasscodepredef = this.$state.loaderCurrentDef;
      var sasscodepre = this.$state.loaderCurrent;
      var fullsasscode =
        '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" overflow="visible" fill="' +
        this.$state.fillColor +
        '">' +
        "<defs>" +
        sasscodepredef +
        "</defs>" +
        sasscodepre +
        "</svg>";
      this.$state.copyText = "Copied!";
      setTimeout(() => (this.$state.copyText = "Copy"), 1000);
      this.copyToClipboard(fullsasscode);
    },
    stylesClipboard() {
      this.$state.styleCodePre = this.$state.stylesCode
        .replaceAll("<span>", "")
        .replaceAll("</span>", "");
      var fullStyleCode = this.$state.styleCodePre;
      this.$state.copyText = "Copied!";
      setTimeout(() => (this.$state.copyText = "Copy"), 1000);
      this.copyToClipboard(fullStyleCode);
    },
    copyToClipboard(text) {
      if (window.clipboardData && window.clipboardData.setData) {
        // Internet Explorer-specific code path to prevent textarea being shown while dialog is visible.
        return clipboardData.setData("Text", text);
      } else if (
        document.queryCommandSupported &&
        document.queryCommandSupported("copy")
      ) {
        var textarea = document.createElement("textarea");
        textarea.textContent = text;
        textarea.style.position = "fixed"; // Prevent scrolling to bottom of page in Microsoft Edge.
        document.body.appendChild(textarea);
        textarea.select();
        try {
          return document.execCommand("copy"); // Security exception may be thrown by some browsers.
        } catch (ex) {
          console.warn("Copy to clipboard failed.", ex);
          return false;
        } finally {
          document.body.removeChild(textarea);
        }
      }
    },
    holacodepenSmil() {
      var smilcodepre = this.$state.loaderSmil;
      var codepenhtml =
        '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" overflow="visible" fill="' +
        this.$state.fillColor +
        '">' +
        smilcodepre +
        "</svg>";
      var penArr = {
        title: "Hola SVG editable loader",
        html: codepenhtml,
      };
      this.$state.codepenvalue = JSON.stringify(penArr);
      this.$nextTick(() => {
        event.target.parentElement.submit();
      });
    },
    holacodepenSass() {
      var sasscodepredef = this.$state.loaderCurrentDef;
      var sasscodepre = this.$state.loaderCurrent;
      var codepenhtml =
        '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" overflow="visible" fill="' +
        this.$state.fillColor +
        '">' +
        "<defs>" +
        sasscodepredef +
        "</defs>" +
        sasscodepre +
        "</svg>";
      this.$state.styleCodePre = this.$state.stylesCode
        .replaceAll("<span>", "")
        .replaceAll("</span>", "");
      var codepencss = this.$state.styleCodePre;
      var penArr = {
        title: "Hola SVG Loader",
        html: codepenhtml,
        css_pre_processor: "scss",
        css: codepencss,
      };
      this.$state.codepenvalue = JSON.stringify(penArr);
      this.$nextTick(() => {
        event.target.parentElement.submit();
      });
    },
  },
};
</script>

<style lang="scss">
.highlight {
  color: var(--siteYellow);
}
.home-link {
  display: block;
  font-size: 1rem;
  a {
    color: var(--siteOrange);
    transition: color 0.2s;
    text-decoration: none;
    &:hover {
      color: var(--siteRed);
    }
  }
}
h2 {
  font-size: 1.2rem;
  font-weight: 400;
}
h2 a {
  color: var(--siteBlue);
  &:hover {
    color: var(--siteOrange);
    text-decoration: none;
  }
}
.main-content {
  display: grid;
  gap: 1rem;
  margin: 1rem;
  @media (min-width: 60em) /* 960px */ {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 75em) /* 1200px */ {
    grid-template-columns: 0.6fr 1fr minmax(300px, 1fr);
  }
}
.btn {
  background-color: var(--bgColor);
  background-color: var(--siteBlue);
  border: 1px solid var(--borderColor);
  cursor: pointer;
  font-family: "Montserrat";
  font-size: 1rem;
  font-weight: 500;
  padding: 0.5em 0;
  width: 100%;
  &:hover,
  &.active {
    background-color: var(--siteGreen);
  }
}
.styles-bar {
  background-color: var(--bgColor);
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 0;
  text-align: left;
  @media (max-width: 60em) /* 960px */ {
    padding-bottom: 0.5rem;
  }
  .style-bar-box {
    border: 4px solid var(--borderColor);
    flex: 1 1 50%;
    &.effects { flex: 100%; }
    &.active,
    &:hover,
    &:focus,
    &:focus-within {
      background-color: var(--bgLighter);
    }
    > h3 {
      background-color: var(--bgLighter);
      font-size: 0.9rem;
      font-weight: 500;
      margin: 0;
      padding: 0.5rem;
      text-transform: uppercase;
    }
    > div {
      align-items: center;
      display: flex;
      flex-wrap: wrap;
      margin: 1rem 1rem 0.2rem;
      svg {
        border-radius: 2px;
        fill: hsl(32, 100, 96);
      }
      .show-matrix-position {
        background-color: var(--bgColor);
        display: none;
        margin-top: 0.5rem;
        &.active { display: flex; }
      }
    }
    .loop-container {
      margin: 0 0.7rem 0.8rem 0;
      &:nth-child(5) { margin-right: 0; }
      &:nth-child(6) { display: none; }
      &.active,
      &:hover,
      &:focus,
      &:focus-within {
        svg {
          background-color: var(--siteLightblue);
          cursor: pointer;
          fill: var(--bgColor);
        }
      }
    }
    &.effects > div > div { margin: 0 1.2rem 0 0; }
  }
  label {
    margin: 0.8rem 0.8rem 0.8rem 0;
    &.checkmark-container { margin-right: 0; }
  }
  input[type="color"] {
    background-color: white;
    border: 1px solid var(--borderColor);
    padding: 0.2rem;
    width: 3rem;
    height: 3rem;
    -webkit-appearance: none;
  }
  input[type="color"]::-webkit-color-swatch-wrapper { padding: 0.05rem; }
  input[type="color"]::-webkit-color-swatch { border: 0; }
}
.code-generator {
  @media (max-width: 40em) /* 800px */ {
    overflow-x: hidden;
  }
  @media (min-width: 50em) /* 800px */ {
    grid-area: 2/1/2/3;
  }
  @media (min-width: 75em) /* 1200px */ {
    grid-area: auto;
    display: flex;
    flex-direction: column;
    max-height: 50vh;
    div { min-height: 200px; }
  }
  .code-svg,
  .code-styles {
    background-color: var(--bgColor);
    border: 4px solid var(--bgLighter);
    border-radius: 4px;
    color: whitesmoke;
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
    max-height: 300px;
    overflow-x: auto;
    position: relative;
    text-align: left;
    width: 100%;
    pre {
      background-color: transparent;
      margin: 1rem 1.5rem;
      padding: 0;
      white-space: pre-line;
    }
    code { white-space: pre-line; }
    .btn-download {
      position: sticky;
      bottom: 0;
      left: 0;
    }
    .btn-copy {
      opacity: 0;
      position: sticky;
      bottom: 0;
      left: 0;
      visibility: hidden;
      &.smil-copy { bottom: 37px; }
    }
    &.active,
    &:hover,
    &:focus,
    &:focus-within {
      .btn-copy {
        opacity: 1;
        visibility: visible;
      }
    }
  }
  form { display: inherit; }
}
.btn-codepen {
  background-color: var(--bgColor);
  border-width: 4px;
  color: white;
  transition: all 0.4s;
  width: 100%;
  &:hover { background-color: var(--bgLighter); }
  svg {
    fill: white;
    height: 20px;
    margin: 0 0.4em 0 0;
    vertical-align: middle;
    width: 20px;
  }
}
.btn-copy {
  background-color: var(--siteRed);
  color: var(--textColor);
  transition: all 0.2s;
  &:hover { background-color: var(--siteOrange); }
}

//animations

// @for $i from 1 to 14 {
//   .spinner-class:nth-of-type(#{$i}) {
//     animation: 1s $i * 0.08s opacityLoader infinite;
//   }
// }

// @for $i from 1 to 4 {
//   .inline-class:nth-of-type(#{$i}) {
//     animation: 1s $i * 0.25s opacityLoader infinite;
//   }
// }

// .single-loader use {
//   will-change: transform;
//   // transform-box: fill-box;
//   // transform-origin: 0 0;
// }
@media (hover: none) and (pointer: coarse) {
  .code-generator .code-svg .btn-copy, .code-generator .code-styles .btn-copy {
    opacity: 1;
    visibility: visible;
  }
}

@media (prefers-reduced-motion) {
  .animation { animation-name: dissolve; }
}
</style>

<style lang="scss">
@keyframes opacityLoader {
  to { opacity: 0; }
}
@keyframes scaleLoader {
  from {transform: scale(0)}
  to { transform: scale(1.2); }
}
@keyframes translateLoader {
  to { transform: translateX(10px); }
}
@keyframes rotateLoader {
  to { transform: rotate(360deg); }
}
@keyframes skewLoader {
  to { transform: skewX(20deg); }
}
@keyframes matrixLoader {
  to { transform: matrix(1, 0, 1, 1, 100, 0); }
}
</style>
