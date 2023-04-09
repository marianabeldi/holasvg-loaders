import Vue from 'vue'

var state = {
        exportedCode: {
          smil: "",
          sass: ""
        },
        codepenvalue: {},
        copyText: "Copy",
        fillColor: "#ff5463",
        strokeColor: "none",
        effectActive: ["opacity"],
        computedAnimation: [["1s 0.125s opacityLoader infinite"], ["1s 0.25s opacityLoader infinite"], ["1s 0.375s opacityLoader infinite"], ["1s 0.5s opacityLoader infinite"], ["1s 0.625s opacityLoader infinite"], ["1s 0.75s opacityLoader infinite"], ["1s 0.875s opacityLoader infinite"], ["1s 1s opacityLoader infinite"], ],
        hola: [""],
        loaderSass: ["1s $i * 0.125s opacityLoader infinite,"],
        keyframesEffects: ['@keyframes opacityLoader { to { opacity: 0; } }'],
        styleActive: "spinner1",
        shapeActive: "circle",
        isActiveCustom: false,
        customShape: "",
        renderComponent: true,
        disabledSave: true,
        loaderSmil: '<use xlink:href="#loader" transform="rotate(0 50 50)"><animate attributeName="opacity" values="0;1;0" dur="1s" begin="0s" repeatCount="indefinite"></animate></use><use xlink:href="#loader" transform="rotate(45 50 50)"><animate attributeName="opacity" values="0;1;0" dur="1s" begin="0.125s" repeatCount="indefinite"></animate></use><use xlink:href="#loader" transform="rotate(90 50 50)"><animate attributeName="opacity" values="0;1;0" dur="1s" begin="0.25s" repeatCount="indefinite"></animate></use><use xlink:href="#loader" transform="rotate(135 50 50)"><animate attributeName="opacity" values="0;1;0" dur="1s" begin="0.375s" repeatCount="indefinite"></animate></use><use xlink:href="#loader" transform="rotate(180 50 50)"><animate attributeName="opacity" values="0;1;0" dur="1s" begin="0.5s" repeatCount="indefinite"></animate></use><use xlink:href="#loader" transform="rotate(225 50 50)"><animate attributeName="opacity" values="0;1;0" dur="1s" begin="0.625s" repeatCount="indefinite"></animate></use><use xlink:href="#loader" transform="rotate(270 50 50)"><animate attributeName="opacity" values="0;1;0" dur="1s" begin="0.75s" repeatCount="indefinite"></animate></use><use xlink:href="#loader" transform="rotate(315 50 50)"><animate attributeName="opacity" values="0;1;0" dur="1s" begin="0.875s" repeatCount="indefinite"></animate></use>',
        loaderSmilActive: true,
        codeActive: "SMIL",
        itemsNumber: 9,
        amount: 8,
        stylesCode: "@for $i from 1 to 9 { .loader:nth-of-type(#{$i}) * { animation: 1s $i * 0.125s opacityLoader infinite, } }@keyframes opacityLoader { to { opacity: 0; } }",
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
                <use class="loader" xlink:href="#loader" transform="rotate(45 50 50)" />\
                <use class="loader" xlink:href="#loader" transform="rotate(90 50 50)" />\
                <use class="loader" xlink:href="#loader" transform="rotate(135 50 50)" />\
                <use class="loader" xlink:href="#loader" transform="rotate(180 50 50)" />\
                <use class="loader" xlink:href="#loader" transform="rotate(225 50 50)" />\
                <use class="loader" xlink:href="#loader" transform="rotate(270 50 50)" />\
                <use class="loader" xlink:href="#loader" transform="rotate(315 50 50)" />',
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
            sassSpinner: "1s $i * 0.125s opacityLoader infinite,",
            css: "",
            smilSpinner: '<animate attributeName="opacity" values="0;1;0" dur="1s" :begin="`${i * 0}s`" repeatCount="indefinite" />'
          },
          {
            id: "translate",
            value: false,
            keyframes: "@keyframes translateLoader { to { transform: translateX(10px); } }",
            sassSpinner: "1s $i * 0.125s translateLoader infinite,",
            css: "",
            smilSpinner: '<animateTransform attributeName="transform" type="translate" additive="sum" from="0 0" to="10" dur="1s" :begin="`${i * 0}s`" repeatCount="indefinite" />'
          },
          {
            id: "scale",
            value: false,
            keyframes: "@keyframes scaleLoader { from { transform: scale(0); } to { transform: scale(1.2); } }",
            sassSpinner: "1s $i * 0.125s scaleLoader infinite,",
            css: "",
            smilSpinner: '<animateTransform attributeName="transform" type="scale" additive="sum" from="0" to="1" dur="1s" :begin="`${i * 0}s`" repeatCount="indefinite" />'
          },
          {
            id: "skewX",
            value: false,
            keyframes: "@keyframes skewXLoader { to { transform: skew(20deg); } }",
            sassSpinner: "1s $i * 0.125s skewLoader infinite,",
            css: "",
            smilSpinner: '<animateTransform attributeName="transform" type="skewX" additive="sum" from="0" to="20" dur="1s" :begin="`${i * 0}s`" repeatCount="indefinite" />'
          },
          {
            id: "rotate",
            value: false,
            keyframes: "@keyframes rotateLoader { to { transform: rotate(360deg); } }",
            sassSpinner: "1s $i * 0.125s rotateLoader infinite,",
            css: "",
            smilSpinner: '<animateTransform attributeName="transform" type="rotate" additive="sum" from="0 80 90" :to="`360 ${i * 3} 10`" dur="1s" :begin="`${i * 0}`" repeatCount="indefinite" />'
          },
        ],
        loaderCurrentDef: '<circle id="loader" r="4" cx="50" cy="50" transform="translate(0 -30)"/>',
        loaderCurrent:
          '<g class="loader" transform="rotate(0 50 50)"><use xlink:href="#loader"/></g>\
          <g class="loader" transform="rotate(45 50 50)"><use xlink:href="#loader" /></g>\
          <g class="loader" transform="rotate(90 50 50)"><use xlink:href="#loader" /></g>\
          <g class="loader" transform="rotate(135 50 50)"><use xlink:href="#loader" /></g>\
          <g class="loader" transform="rotate(180 50 50)"><use xlink:href="#loader" /></g>\
          <g class="loader" transform="rotate(225 50 50)"><use xlink:href="#loader" /></g>\
          <g class="loader" transform="rotate(270 50 50)"><use xlink:href="#loader" /></g>\
          <g class="loader" transform="rotate(315 50 50)"><use xlink:href="#loader" /></g>',   
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
        this.$state.loaderSass.splice(i, 1);
        this.$state.keyframesEffects.splice(i, 1);

        state.computedAnimation = [];
        for (let i = 1; i <= state.amount; i++) {
          const newLine = state.effectActive.map(effect => {
            const delay = i / state.amount;
            return `1s ${delay}s ${effect}Loader infinite`;
          });
          state.computedAnimation.splice(i - 1, 0, newLine);
        }

        this.$state.loaderSmil = '';
        for (let lm = 1; lm <= this.$state.amount; lm++) {
          const use = `<use xlink:href="#loader" transform="rotate(${(lm * 360 / this.$state.amount).toFixed()} 50 50)">`;
          const newSmilLine = [];
          for (let i = 0; i < this.$state.effectActive.length; i++) {
            const effect = this.$state.effectActive[i];
            const delaybe = lm / this.$state.amount;
            let animation;
            if (effect === "opacity") {
              animation = `<animate attributeName="${effect}" values="0;1;0" dur="1s" begin="${delaybe.toFixed(2)}s" repeatCount="indefinite"></animate>`;
            }
            if (effect === "translate") {
              animation = `<animateTransform attributeName="transform" type="${effect}" additive="sum" dur="1s" begin="${delaybe.toFixed(2)}s" repeatCount="indefinite" from="0 0" to="10"></animateTransform>`;
            }
            if (effect === "rotate") {
              animation = `<animateTransform attributeName="transform" type="${effect}" additive="sum" dur="1s" begin="${delaybe.toFixed(2)}s" repeatCount="indefinite" from="0 50 50" to="360 0 0"></animateTransform>`;
            }
            if (effect === "scale") {
              animation = `<animateTransform attributeName="transform" type="${effect}" additive="sum" dur="1s" begin="${delaybe.toFixed(2)}s" repeatCount="indefinite" from="0" to="1.2"></animateTransform>`;
            }
            if (effect === "skewX") {
              animation = `<animateTransform attributeName="transform" type="${effect}" additive="sum" dur="1s" begin="${delaybe.toFixed(2)}s" repeatCount="indefinite" from="0" to="20"></animateTransform>`;
            }
            newSmilLine.splice(i, 0, animation);
          }
          const smilString = newSmilLine.join('');
          this.$state.loaderSmil += use + smilString + "</use>";
        };
        
      }
    }
  } else {
    this.$state.effectActive.push(effectid)
    this.$state.effects.forEach(function (obj, i) {
      if (effectid === obj.id) {
        this.$state.keyframesEffects.push(obj.keyframes);

        state.computedAnimation = [];
        for (let i = 1; i <= state.amount; i++) {
          const newLine = state.effectActive.map(effect => {
            const delay = i / state.amount;
            return `1s ${delay}s ${effect}Loader infinite`;
          });
          state.computedAnimation.push(newLine);
        }     

        this.$state.loaderSass = [];
        for (let ls = 0; ls < state.effectActive.length; ls++) {
          this.$state.loaderSass.push(`1s $i * ${(1 / state.amount).toFixed(2)}s ${state.effectActive[ls]}Loader infinite,`)
        }

        this.$state.loaderSmil = '';
        for (let lm = 1; lm <= this.$state.amount; lm++) {
          if (this.$state.styleActive === "spinner1") {
            var use = `<use xlink:href="#loader" transform="rotate(${(lm * 360 / this.$state.amount).toFixed()} 50 50)">`;
          } if (this.$state.styleActive === "inline1") {
            var use = `<use xlink:href="#loader" x="${((100/2)-(this.$state.amount-1)*16/2+(lm-1)*16).toFixed()}">`;
          }
          const newSmilLine = this.$state.effectActive.map(effect => {
          const delaybe = lm / this.$state.amount;
            if (effect === "opacity") {
              return `<animate attributeName="${effect}" values="0;1;0" dur="1s" begin="${delaybe.toFixed(2)}s" repeatCount="indefinite"></animate>`;
            }
            if (effect === "translate") {
              return `<animateTransform attributeName="transform" type="${effect}" additive="sum" dur="1s" begin="${delaybe.toFixed(2)}s" repeatCount="indefinite" from="0 0" to="10"></animateTransform>`;
            }
            if (effect === "rotate") {
              return`<animateTransform attributeName="transform" type="${effect}" additive="sum" dur="1s" begin="${delaybe.toFixed(2)}s" repeatCount="indefinite" from="0 50 50" to="360 0 0"></animateTransform>`;
            }
            if (effect === "scale") {
              return `<animateTransform attributeName="transform" type="${effect}" additive="sum" dur="1s" begin="${delaybe.toFixed(2)}s" repeatCount="indefinite" from="0" to="1.2"></animateTransform>`;
            }
            if (effect === "skewX") {
              return `<animateTransform attributeName="transform" type="${effect}" additive="sum" dur="1s" begin="${delaybe.toFixed(2)}s" repeatCount="indefinite" from="0" to="20"></animateTransform>`;
            }
        }).join('')
          this.$state.loaderSmil += use + newSmilLine + "</use>"
        };

      }
    }, this);
  }
  if (this.$state.effectActive.length === 0) {
    this.$state.loaderSass.push(`none`)
  }
}

function loaderCurrentFunction(){
  this.$state.loaderCurrent = ''; 
  for (let nd = 1; nd < this.$state.amount + 1; nd++) {
    if (this.$state.styleActive === "spinner1") {
      this.$state.loaderCurrent += `<g class="loader" transform="rotate(${(nd * 360 / this.$state.amount).toFixed()} 50 50)"><use xlink:href="#loader" /></g>`; 
    } if (this.$state.styleActive === "inline1") {
      this.$state.loaderCurrent += `<use xlink:href="#loader" class="loader" x="${((100/2)-(this.$state.amount-1)*16/2+(nd-1)*16).toFixed()}" />`; 
    }
  }
}

function loaderSmilFunction() {
  this.$state.loaderSmil = '';
  for (let lm = 1; lm <= this.$state.amount; lm++) {
    if (this.$state.styleActive === "spinner1") {
      var use = `<use xlink:href="#loader" transform="rotate(${(lm * 360 / this.$state.amount).toFixed()} 50 50)">`;
    } if (this.$state.styleActive === "inline1") {
      var use = `<use xlink:href="#loader" x="${((100/2)-(this.$state.amount-1)*16/2+(lm-1)*16).toFixed()}">`;
    }
    const newSmilLine = this.$state.effectActive.map(effect => {
    const delaybe = lm / this.$state.amount;
    if (effect === "opacity") {
      return `<animate attributeName="${effect}" values="0;1;0" dur="1s" begin="${delaybe.toFixed(2)}s" repeatCount="indefinite"></animate>`
    } else {
      return `<animateTransform attributeName="transform" type="${effect}" additive="sum" dur="1s" begin="${delaybe.toFixed(2)}s" repeatCount="indefinite" from="0" to="1.2"></animateTransform>`
    }
  }).join('')
    this.$state.loaderSmil += use + newSmilLine + "</use>"
  };
}

function loaderSassFunction() {
  this.$state.loaderSass = [];
  for (let ls = 0; ls < this.$state.effectActive.length; ls++) {
    this.$state.loaderSass.push(`1s $i * ${(1 / this.$state.amount).toFixed(2)}s ${this.$state.effectActive[ls]}Loader infinite,`)
  }
  
}

function computedAnimationFunction() {
  this.$state.computedAnimation = [];
  for (let i = 1; i <= this.$state.amount; i++) {
    const newLine = this.$state.effectActive.map(effect => {
      const delay = i / this.$state.amount;
      return `1s ${delay}s ${effect}Loader infinite`;
    });
    this.$state.computedAnimation.push(newLine);
  }
}

// function updateAnimation() {
// state.computedAnimation = []
//   for (let am = 1; am < state.amount +1 ; am++) {
//     let newLine = []
//     for (let ea = 0; ea < state.effectActive.length; ea++) {
//       newLine.push([`1s ${(am / state.amount)}s ${state.effectActive[ea]}Loader infinite`])
//     }
//     state.computedAnimation.push(newLine)
//     console.log(newLine)
//   }
// }

export default ({ app }, inject) => {
    inject('state', Vue.observable(state)),
    inject('getSmilCode', Vue.observable(getSmilCode))
    inject('loaderCurrentFunction', Vue.observable(loaderCurrentFunction))
    inject('loaderSmilFunction', Vue.observable(loaderSmilFunction))
    inject('loaderSassFunction', Vue.observable(loaderSassFunction))
    inject('computedAnimationFunction', Vue.observable(computedAnimationFunction))
    inject('setEffect', Vue.observable(setEffect))
}