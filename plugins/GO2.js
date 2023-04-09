import Vue from 'vue'

const state = {
        exportedCode: {
          smil: "",
          sass: ""
        },
        codepenvalue: {},
        copyText: "Copy",
        fillColor: "#ff5463",
        strokeColor: "none",
        effectActive: ["opacity"],
        computedAnimationBoth: [["1s 0.08s opacityLoader infinite"], ["1s 0.16s opacityLoader infinite"], ["1s 0.24s opacityLoader infinite"], ["1s 0.32s opacityLoader infinite"], ["1s 0.4s opacityLoader infinite"], ["1s 0.48s opacityLoader infinite"], ["1s 0.56s opacityLoader infinite"], ["1s 0.64s opacityLoader infinite"], ["1s 0.72s opacityLoader infinite"], ["1s 0.8s opacityLoader infinite"], ["1s 0.88s opacityLoader infinite"], ["1s 0.96s opacityLoader infinite"], ],
        loaderSassSpinner: ["1s $i * 0.08s opacityLoader infinite,"],
        loaderSassInline: ["1s $i * 0.25s opacityLoader infinite,"],
        keyframesEffects: ['@keyframes opacityLoader { to { opacity: 0; } }'],
        styleActive: "spinner1",
        shapeActive: "circle",
        isActiveCustom: false,
        customShape: "",
        renderComponent: true,
        disabledSave: true,
        loaderSmil: '<defs><circle id="spinner" r="4" cx="50" cy="50" transform="translate(0 -30)"></circle></defs> <use xlink:href="#spinner" transform="rotate(0 50 50)"><animate attributeName="opacity" values="0;1;0" dur="1s" begin="0s" repeatCount="indefinite"></animate></use><use xlink:href="#spinner" transform="rotate(30 50 50)"><animate attributeName="opacity" values="0;1;0" dur="1s" begin="0.08s" repeatCount="indefinite"></animate></use><use xlink:href="#spinner" transform="rotate(60 50 50)"><animate attributeName="opacity" values="0;1;0" dur="1s" begin="0.16s" repeatCount="indefinite"></animate></use><use xlink:href="#spinner" transform="rotate(90 50 50)"><animate attributeName="opacity" values="0;1;0" dur="1s" begin="0.24s" repeatCount="indefinite"></animate></use><use xlink:href="#spinner" transform="rotate(120 50 50)"><animate attributeName="opacity" values="0;1;0" dur="1s" begin="0.32s" repeatCount="indefinite"></animate></use><use xlink:href="#spinner" transform="rotate(150 50 50)"><animate attributeName="opacity" values="0;1;0" dur="1s" begin="0.4s" repeatCount="indefinite"></animate></use><use xlink:href="#spinner" transform="rotate(180 50 50)"><animate attributeName="opacity" values="0;1;0" dur="1s" begin="0.48s" repeatCount="indefinite"></animate></use><use xlink:href="#spinner" transform="rotate(210 50 50)"><animate attributeName="opacity" values="0;1;0" dur="1s" begin="0.56s" repeatCount="indefinite"></animate></use><use xlink:href="#spinner" transform="rotate(240 50 50)"><animate attributeName="opacity" values="0;1;0" dur="1s" begin="0.64s" repeatCount="indefinite"></animate></use><use xlink:href="#spinner" transform="rotate(270 50 50)"><animate attributeName="opacity" values="0;1;0" dur="1s" begin="0.72s" repeatCount="indefinite"></animate></use><use xlink:href="#spinner" transform="rotate(300 50 50)"><animate attributeName="opacity" values="0;1;0" dur="1s" begin="0.8s" repeatCount="indefinite"></animate></use><use xlink:href="#spinner" transform="rotate(330 50 50)"><animate attributeName="opacity" values="0;1;0" dur="1s" begin="0.88s" repeatCount="indefinite"></animate></use>',
        loaderSmilActive: true,
        codeActive: "SMIL",
        itemsNumer: 13,
        amount: 8,
        stylesCode: "@for $i from 1 to 13 { .spinner-class:nth-of-type(#{$i}) { animation: 1s $i * 0.08s opacityLoader infinite, } }@keyframes opacityLoader { to { opacity: 0; } }",
        codes: [
          {
            id: "SMIL"
          },
          {
            id: "SASS"
          },
        ],
        styles: [
          {
            id: "spinner1",
            svg:
              '<defs><circle id="spinner0" r="4" cx="50" cy="50" transform="translate(0 -30)"/></defs>\
                <use xlink:href="#spinner0" transform="rotate(0 50 50)" />\
                <use xlink:href="#spinner0" transform="rotate(30 50 50)" />\
                <use xlink:href="#spinner0" transform="rotate(60 50 50)" />\
                <use xlink:href="#spinner0" transform="rotate(90 50 50)" />\
                <use xlink:href="#spinner0" transform="rotate(120 50 50)" />\
                <use xlink:href="#spinner0" transform="rotate(150 50 50)" />\
                <use xlink:href="#spinner0" transform="rotate(180 50 50)" />\
                <use xlink:href="#spinner0" transform="rotate(210 50 50)" />\
                <use xlink:href="#spinner0" transform="rotate(240 50 50)" />\
                <use xlink:href="#spinner0" transform="rotate(270 50 50)" />\
                <use xlink:href="#spinner0" transform="rotate(300 50 50)" />\
                <use xlink:href="#spinner0" transform="rotate(330 50 50)" />',
            use:
              '<use class="loader" xlink:href="#loader" transform="rotate(0 50 50)" />\
                <use class="loader" xlink:href="#loader" transform="rotate(30 50 50)" />\
                <use class="loader" xlink:href="#loader" transform="rotate(60 50 50)" />\
                <use class="loader" xlink:href="#loader" transform="rotate(90 50 50)" />\
                <use class="loader" xlink:href="#loader" transform="rotate(120 50 50)" />\
                <use class="loader" xlink:href="#loader" transform="rotate(150 50 50)" />\
                <use class="loader" xlink:href="#loader" transform="rotate(180 50 50)" />\
                <use class="loader" xlink:href="#loader" transform="rotate(210 50 50)" />\
                <use class="loader" xlink:href="#loader" transform="rotate(240 50 50)" />\
                <use class="loader" xlink:href="#loader" transform="rotate(270 50 50)" />\
                <use class="loader" xlink:href="#loader" transform="rotate(300 50 50)" />\
                <use class="loader" xlink:href="#loader" transform="rotate(330 50 50)" />',
          },
          {
            id: "inline1",
            svg:
              '<defs><circle id="inline0" cx="20" cy="50" r="6" /></defs>\
                <use xlink:href="#inline0" />\
                <use xlink:href="#inline0" x="20" />\
                <use xlink:href="#inline0" x="40" />\
                <use xlink:href="#inline0" x="60" />',
            use:
              '<use class="loader" xlink:href="#loader" />\
                <use class="loader" xlink:href="#loader" x="20" />\
                <use class="loader" xlink:href="#loader" x="40" />\
                <use class="loader" xlink:href="#loader" x="60" />',
          },
        ],
        shapes: [
          {
            id: "circle",
            menu: '<circle id="loader" cx="50" cy="50" r="20"/>',
            svgspinner: '<circle id="loader" r="4" cx="50" cy="50" transform="translate(0 -30)"/>',
            svginline: '<circle id="loader" cx="20" cy="50" r="6" />',
          },
          {
            id: "square",
            menu: '<rect id="loader" x="30" y="30" width="40" height="40" />',
            svgspinner: '<rect id="loader" x="15" y="45" width="10" height="10" />',
            svginline: '<rect id="loader" x="15" y="45" width="10" height="10" />',
          },
          {
            id: "triangle",
            menu: '<polygon id="loader" points="50,30 75,70 25,70" />',
            svgspinner: '<polygon id="loader" points="20,40 28,55 12,55" />',
            svginline: '<polygon id="loader" points="20,40 28,55 12,55" />',
          },
          {
            id: "rect",
            menu:'<rect id="loader" x="20" y="30" width="60" height="40" rx="2" ry="2"/>',
            svgspinner:'<rect id="loader" x="15" y="40" width="10" height="20" rx="2" ry="2"/>',
            svginline: '<rect id="loader" x="15" y="40" width="10" height="20" rx="2" ry="2" />',
          },
          {
            id: "bar",
            menu: '<rect id="loader" x="35" y="20" width="30" height="60" rx="2" ry="2"/>',
            svgspinner: '<rect id="loader" x="46.5" y="40" width="7" height="20" rx="2" ry="2" transform="translate(0 -30)" />',
            svginline: '<rect id="loader" x="46.5" y="40" width="7" height="20" rx="2" ry="2" transform="translate(0 -30)" />',
          },
          {
            id: "custom",
            menu: "",
          },
        ],
        effects: [
          {
            id: "opacity",
            value: true,
            keyframes: '@keyframes opacityLoader { to { opacity: 0; } }',
            sassSpinner: "1s $i * 0.08s opacityLoader infinite,",
            sassInline: "1s $i * 0.25s opacityLoader infinite,",
            css: "",
            smilSpinner: '<animate attributeName="opacity" values="0;1;0" dur="1s" :begin="`${i * 0.08}s`" repeatCount="indefinite" />'
          },
          {
            id: "translate",
            value: false,
            keyframes: "@keyframes translateLoader { to { transform: translateX(10px); } }",
            sassSpinner: "1s $i * 0.08s translateLoader infinite,",
            sassInline: "1s $i * 0.25s translateLoader infinite,",
            css: "",
            smilSpinner: '<animateTransform attributeName="transform" type="translate" additive="sum" from="0 0" to="10" dur="1s" :begin="`${i * 0.08}s`" repeatCount="indefinite" />'
          },
          {
            id: "scale",
            value: false,
            keyframes: "@keyframes scaleLoader { from { transform: scale(0); } to { transform: scale(1.2); } }",
            sassSpinner: "1s $i * 0.08s scaleLoader infinite,",
            sassInline: "1s $i * 0.25s scaleLoader infinite,",
            css: "",
            smilSpinner: '<animateTransform attributeName="transform" type="scale" additive="sum" from="0" to="1" dur="1s" :begin="`${i * 0.08}s`" repeatCount="indefinite" />'
          },
          {
            id: "skew",
            value: false,
            keyframes: "@keyframes skewLoader { to { transform: skew(20deg); } }",
            sassSpinner: "1s $i * 0.08s skewLoader infinite,",
            sassInline: "1s $i * 0.25s skewLoader infinite,",
            css: "",
            smilSpinner: '<animateTransform attributeName="transform" type="skewX" additive="sum" from="0" to="20" dur="1s" :begin="`${i * 0.08}s`" repeatCount="indefinite" />'
          },
          {
            id: "rotate",
            value: false,
            keyframes: "@keyframes rotateLoader { to { transform: rotate(360deg); } }",
            sassSpinner: "1s $i * 0.08s rotateLoader infinite,",
            sassInline: "1s $i * 0.25s rotateLoader infinite,",
            css: "",
            smilSpinner: '<animateTransform attributeName="transform" type="rotate" additive="sum" from="0 80 90" :to="`360 ${i * 3} 10`" dur="1s" :begin="`${i * 0.08}`" repeatCount="indefinite" />'
          },
        ],
        loaderCurrentDef: '<circle id="loader" r="4" cx="50" cy="50" transform="translate(0 -30)"/>',
        loaderCurrent:
          '<g class="loader" transform="rotate(0 50 50)"><use xlink:href="#loader"/></g>\
          <g class="loader" transform="rotate(30 50 50)"><use xlink:href="#loader" /></g>\
          <g class="loader" transform="rotate(60 50 50)"><use xlink:href="#loader" /></g>\
          <g class="loader" transform="rotate(90 50 50)"><use xlink:href="#loader" /></g>\
          <g class="loader" transform="rotate(120 50 50)"><use xlink:href="#loader" /></g>\
          <g class="loader" transform="rotate(150 50 50)"><use xlink:href="#loader" /></g>\
          <g class="loader" transform="rotate(180 50 50)"><use xlink:href="#loader" /></g>\
          <g class="loader" transform="rotate(210 50 50)"><use xlink:href="#loader" /></g>\
          <g class="loader" transform="rotate(240 50 50)"><use xlink:href="#loader" /></g>\
          <g class="loader" transform="rotate(270 50 50)"><use xlink:href="#loader" /></g>\
          <g class="loader" transform="rotate(300 50 50)"><use xlink:href="#loader" /></g>\
          <g class="loader" transform="rotate(330 50 50)"><use xlink:href="#loader"/></g>',   
}

function getSmilCode() {
  this.$nextTick(() => {
    if (this.$state.styleActive === "spinner1") {
      this.$state.loaderSmil = document.getElementById('spinnerLoaderRef').innerHTML
      this.$state.loaderSmil = this.$state.loaderSmil.replaceAll('<!---->', '').replaceAll('normal none running', '')
    }
    if (this.$state.styleActive === "inline1") {
      this.$state.loaderSmil = document.getElementById('inlineLoaderRef').innerHTML
      this.$state.loaderSmil = this.$state.loaderSmil.replaceAll('<!---->', '').replaceAll('normal none running', '')
    }
  });
}

function setEffect(effectid) {
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
}


export default ({ app }, inject) => {
    inject('state', Vue.observable(state)),
    inject('getSmilCode', Vue.observable(getSmilCode))
    inject('setEffect', Vue.observable(setEffect))
}