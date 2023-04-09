<template>
  <div class="main-wrapper">
    <b class="top">{{ headerText }}</b>
    <Nuxt />
  </div>
</template>

<script>
export default {
  data() {
    return {
      headerText: "Version 1.2 is out ✨",
    }
  }
}
</script>

<style lang="scss">
:root {
  --bgLighter: #fffaf4;
  --borderColor: #212832;
  --bgColor: #FFF6EC;
  --stripedColor: rgba(255,255,255,.7);
  --siteRed: #FF5463;
  --siteOrange: #FF9365;
  --siteYellow: #FBD887;
  // --siteLightblue: #69BBBC;
  --siteLightblue: #84c9d2;
  --siteBlue: #6EBFB5;
  --siteGreen: #9EE6CF;
  --textColor: #0E1A27;


  --borderColor: #222831;
  // --bgColor: #ffe3d4;
  --stripedColor: rgba(255,255,255,.7);
  // --siteRed: #FF5463;
  // --siteBlue: #24A19C;
  // --siteGreen: #6EBFB5;
  // --textColor: #222831;
}
html {
  font-family: 'Montserrat', 'Helvetica Neue', Arial, sans-serif;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}
*,
*::before,
*::after {
  box-sizing: border-box;
}
.top {
  background-color: var(--siteLightblue);
  border-bottom: 1px solid var(--borderColor);
  color: var(--bgColor);
  width: 100%;
}
body {
  background-color: var(--bgColor);
  background-image: linear-gradient(0deg,transparent 24%, var(--stripedColor) 25%, var(--stripedColor) 26%,transparent 27%,transparent 74%, var(--stripedColor)  75%, var(--stripedColor)  76%,transparent 77%,transparent),linear-gradient(90deg,transparent 24%, var(--stripedColor)  25%, var(--stripedColor)  26%,transparent 27%,transparent 74%, var(--stripedColor)  75%, var(--stripedColor)  76%,transparent 77%,transparent);
  background-size: 40px 40px;
  color: var(--textColor);
  height: 100%;
  margin: 0;
  text-align: center;
  &.loaders-page {
    --bgLighter: #1e2d40;
    --bgColor: #0E1A27;
    --textColor: #FFF6EC;

    --stripedColor: #222831;
    --borderColor: #1e2d40;
  }
}
.main-wrapper {
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}
h1 {
  font-weight: 900;
  letter-spacing: .05em;
  margin: 3rem 0 0;
  text-transform: uppercase;
}
a { transition: all .2s; }


</style>
