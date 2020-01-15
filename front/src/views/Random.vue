<template>
  <mainPage id="MainRandom">
    <SquerSettings :acctive-box-toggle="acctiveBoxToggle"
                   :active-box="activeBox"
                   :height="height"
                   :size="size"
                   :width="width"/>

    <div id="Grid">
      <CanvasGrid></CanvasGrid>
    </div>

    <div id="Colors">
      <div>
        <span class="ProjectHeader">Color Settings</span>
        <ol>
          <li>
            <label>
              <span>Color/Layer par square:</span>
              <input v-model="squareColors" type="number" min="1" max="100"/>
            </label>
          </li>

          <li>
            <label>
              <input type="checkbox" v-model="colorLayerMatch"/>
              <span>Colors (Layers not same colors)</span>
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" v-model="colorBorderMatch"/>
              <span>Colors (Borders not same color)</span>
            </label>
          </li>
        </ol>
      </div>

      <div>
        <span class="ProjectHeader">Colors</span>
        <ul id="selectedColors">
          <li v-for="color in colorList" v-bind:key="color">
            <span class="selectedColor" v-bind:style="{ backgroundColor: color }"
                  @click="editColor(color)">{{ color }}</span>
            <span class="remove" @click="removeColor(color)"><icon icon="trash-alt">-</icon></span>
          </li>
        </ul>
      </div>
      <!-- Affects all color settings -->
      <div>
        <!-- Color by Wheel -->
        <span
                class="ProjectHeader"
                @click="activColorToggle"
                data-name="ColorWheel"
        >
          <span>Color Wheel</span>
          <span v-if="activColor !== 'ColorWheel'"> ▷ </span>
          <span v-if="activColor === 'ColorWheel'"> ▼ </span>
        </span>

        <div v-if="activColor === 'ColorWheel'">
          <ColorPicker v-model="newcolor">:-)</ColorPicker>

          <input v-if="this.replacecolor == '' " type="button" value="Add Color" @click="addByWheel()"/>
          <input v-if="this.replacecolor != '' " type="button" value="Save Color" @click="addByWheel()"/>
        </div>
      </div><!-- Color by Wheel -->

      <div>
        <!-- Colors by Brand -->
        <span
                class="ProjectHeader"
                @click="activColorToggle"
                data-name="ColorBrand"
        >
          <span>Colors by Brand</span>
          <span v-if="activColor !== 'ColorBrand'"> ▷ </span>
          <span v-if="activColor === 'ColorBrand'"> ▼ </span>
        </span>

        <div v-if="activColor === 'ColorBrand'">
          <span>ColorBrand::::::HERE</span><br/>

          <select v-model="brandColor">
            <optgroup label="BaseColors">
              <option>Red</option>
              <option>Blue</option>
              <option>Green</option>
              <option>Yellow</option>
              <option>Pink</option>
            </optgroup>
          </select>
          <input type="button" value="add" @click="addBrandColor"/>

          <!-- TODO: fix br in css -->
          <br/>
          <!-- TODO: fix br in css -->
        </div>
      </div>
      <!-- Color by Brand -->
    </div> <!-- TODO: Make component -->
  </mainPage>
</template>

<script lang="ts">
import CanvasGrid from "../components/CanvasGrid.vue";
import ColorPicker from 'vue-color-picker-wheel';
//const ColorPicker = (require("vue-color-picker-wheel")).default;
import {storeComponent} from "../store";
import SquerSettings from "../components/settings/SquerSettings.vue";

window.console.log([ColorPicker, CanvasGrid]);

interface gridComponent extends storeComponent {
  activeBox: string;
  activColor: string;
  newcolor: string;
  replacecolor: string;
  height: number;
  width: number;
  size: number;
  squareColors: number;
  colorLayerMatch: boolean;
  colorBorderMatch: boolean;
  colorList: string[];
  brandColor: string;
}

let component = null as null | gridComponent;
let delayTimerID = null as null | number;

const generateGrid = () => {
  if (component === null) {
    return;
  }

  const width = component.width;
  const height = component.height;
  const squareColors = component.squareColors;
  let availableColors = ["white"];
  const colorList = [] as string[][][];

  if (component.colorList.length > 0) {
    availableColors = component.colorList;
  }

  //generate new color list:
  for (let y = 0; y < height; y++) {
    const rowColors = [] as string[][];

    for (let x = 0; x < width; x++) {
      const layerColors = [] as string[];

      for (let l = 0; l < squareColors; l++) {
        if (availableColors.length < 2) {
          layerColors.push(availableColors[0]);
          continue;
        }

        const possibleColors = [];

        if (l > 0 && component.colorLayerMatch) {
          for (const color of availableColors) {
            if (layerColors[l - 1] != color) {
              possibleColors.push(color);
            }
          }
        } else if (l == 0 && component.colorBorderMatch) {
          for (const color of availableColors) {
            if (x > 0 && rowColors[x - 1][0] === color) {
              continue;
            }
            if (y > 0 && colorList[y - 1][x][0] === color) {
              continue;
            }
            possibleColors.push(color);
          }
        } else {
          for (const color of availableColors) {
            possibleColors.push(color);
          }
        }
        const randomColor = possibleColors[Math.floor(Math.random() * possibleColors.length)];
        window.console.log({randomColor, possibleColors});
        layerColors.push(randomColor);
      }
      rowColors.push(layerColors);
    }
    colorList.push(rowColors);
  }
  component.$store.commit("replaceGridColorList", colorList);
};

const startTimer = () => {
  if (delayTimerID != null) {
    clearTimeout(delayTimerID);
  }
  delayTimerID = setTimeout(generateGrid, 500);
};

const rgb2hsl = (r:number, g:number, b:number) => {
  r /= 255;
  g /= 255;
  b /= 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const l = (max + min) / 2;
  if (max === min) {
    return {h: -1, s: 0, l};
  }

  const d = max - min;
  const s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

  if (max == r) {
    return {h: 60 * ((g - b) / d + (g < b ? 6 : 0)), s, l};
  }
  if (max == g) {
    return {h: 120 + 60 * (b - r) / d, s, l};
  }
  return {h: 240 + 60 * (r - g) / d, s, l};
};

const hueSort = (a: string, b: string) => {
  if (a == b) {
    return 0;
  }
  const aRGB = {
    r: parseInt(a.substr(1, 2), 16),
    g: parseInt(a.substr(3, 2), 16),
    b: parseInt(a.substr(5, 2), 16),

  };

  const bRGB = {
    r: parseInt(b.substr(1, 2), 16),
    g: parseInt(b.substr(3, 2), 16),
    b: parseInt(b.substr(5, 2), 16),

  };

  const aHSL = rgb2hsl(aRGB.r, aRGB.g, aRGB.b);
  const bHSL = rgb2hsl(bRGB.r, bRGB.g, bRGB.b);

  if (aHSL.h < bHSL.h) {
    return -1;
  }
  if (aHSL.h > bHSL.h) {
    return 1;
  }

  if (aHSL.l < bHSL.l) {
    return 1;
  }
  if (aHSL.l > bHSL.l) {
    return -1;
  }

  if (aHSL.s < bHSL.s) {
    return -1;
  }
  if (aHSL.s > bHSL.s) {
    return 1;
  }

  return a.localeCompare(b);
};

export default {
  name: "random",
  components: {SquerSettings, CanvasGrid, ColorPicker},
  data: () => ({
    activeBox: "Square",
    activColor: "ColorWheel",
    newcolor: "#ffffff",
    replacecolor: "",
    height: 5,
    width: 5,
    size: 0,
    squareColors: 1,
    colorLayerMatch: true,
    colorBorderMatch: true,
    colorList: [],
    brandColor: ""
  }),
  methods: {
    addColor(color: string) {
      if (component && component.colorList.indexOf(color) < 0) {
        component.colorList.push(color);
        component.colorList.sort(hueSort);
        startTimer();
      }
    },
    addByWheel() {
      if (component) {
        if (component.replacecolor != "") {
          if (component.replacecolor == component.newcolor) {
            component.replacecolor = "";
            return;
          }
          this.removeColor(component.replacecolor);
        }

        if (component.newcolor != "") {
          this.addColor(component.newcolor);
        }
        component.replacecolor = "";
      }
    },
    addBrandColor() {
      if (component && component.brandColor != "") {
        this.addColor(component.brandColor);
      }
    },
    editColor(color: string) {
      if (component == null) {
        return;
      }
      component.replacecolor = color;
      component.newcolor = color;
    },
    removeColor(color: string) {
      if (component && component.colorList.indexOf(color) >= 0) {
        component.colorList = component.colorList.filter(row => row != color);
        startTimer();
      }
    },

    acctiveBoxToggle(event: Event) {
      const span = event.currentTarget as HTMLSpanElement;
      const name = span.getAttribute("data-name");

      if (component == null || name == null) {
        return;
      }
      component.activeBox = name;
      /*
      if (name === "Square") {
        component.activeBox = "Square";
      } else if (name === "Cent") {
        component.activeBox = "Cent";
      }*/
    },

    activColorToggle(event: Event) {
      const span = event.currentTarget as HTMLSpanElement;
      const name = span.getAttribute("data-name");

      if (component == null || name == null) {
        return;
      }
      component.activColor = name;
      /*
      if (name === "ColorWheel") {
        component.activColor = "ColorWheel";
      } else if (name === "ColorBrand") {
        component.activColor = "ColorBrand";
      }*/
    }
  },
  mounted() {
    component = (this as unknown) as gridComponent;
    startTimer();
  },
  watch: {
    height: startTimer,
    width: startTimer,
    squareColors: startTimer,
    colorLayerMatch: startTimer,
    colorBorderMatch: startTimer
  }
};
</script>

<style lang="less">
#MainRandom {
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  margin-right: 20px;
  margin-left: 20px;
  font-size: 1.2em;
}

#MainRandom > div {
  background-color: #fdfdfd;
  border: solid #eeeeee 1px;
  margin: 5px;
  padding: 5px;
  border-radius: 2px;
}

#SettingsAll > div {
  padding-left: 5px;
  padding-right: 10px;

  > div > ol {
    padding: 10px;
    margin-top: 5px;
  }
}

#Grid {
  display: flex;
  flex-grow: 1;
}

.ProjectHeader {
  display: flex;
  flex-direction: row;
  border-bottom: 2px dashed #dddddd;
  margin-top: 5px;

  > span:last-child {
    height: 25px;
    width: 30px;
    text-align: center;
  }
}

#selectedColors li {
  display: flex;
  margin-bottom: 3px;

  .selectedColor {
    flex-grow: 1;
    padding: 5px;
    text-align: center;
    color: black;
    text-shadow: -3px 0 0 #fff, 3px 0 0 #fff, 0 -3px 0 #fff, 0 3px 0 #fff,
    -2px 0 0 #fff, 2px 0 0 #fff, 0 -2px 0 #fff, 0 2px 0 #fff,
    -1px 0 0 #fff, 1px 0 0 #fff, 0 -1px 0 #fff, 0 1px 0 #fff;
  }

  .remove {
    border: 1px solid gray;
    padding: 3px;
    color: red;
    font-weight: bold;
  }
}
</style>
