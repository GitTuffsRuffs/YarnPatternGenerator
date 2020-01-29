<template>
  <div id="MainRandom">
    <SquerSettings>
      <PatternsSettings/>
      <ImageSettings/>
      <TempratureSettings/>
    </SquerSettings>

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
            <span
              class="selectedColor"
              v-bind:style="{ backgroundColor: color }"
              @click="editColor(color)">{{ color }}
            </span>
            <span class="remove" @click="removeColor(color)">
              <icon icon="trash-alt">-</icon></span
            >
          </li>
        </ul>
      </div>
      <!-- Affects all color settings -->
      <div v-if="$route.name !== 'load'">
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

        <div id="ColorWheel" v-if="activColor === 'ColorWheel'">
          <ColorPicker v-model="newcolor"></ColorPicker>

          <input
            v-if="this.replacecolor === ''"
            type="button"
            value="Add Color"
            @click="addByWheel()"
          />
          <input
            v-if="this.replacecolor !== ''"
            type="button"
            value="Save Color"
            @click="addByWheel()"
          />
        </div>
      </div>

      <!-- Colors by Brand
      <div>
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
          <br/>
        </div>
      </div>
      -->
    </div>
  </div>
</template>

<script lang="ts">
import CanvasGrid from "../components/CanvasGrid.vue";
import ColorPicker from "vue-color-picker-wheel";
//const ColorPicker = (require("vue-color-picker-wheel")).default;
import {storeComponent, yarnStoreState} from "../store/index";
import SquerSettings from "../components/settings/SquerSettings.vue";
import ImageSettings from "../components/settings/ImageSettings.vue";
import TempratureSettings from "../components/settings/TempratureSettings.vue";
import PatternsSettings from "../components/settings/PatternsSettings.vue";
import hueSort from "../functions/hueSort";
import {routerComponent} from "../router";

window.console.log([ColorPicker, CanvasGrid]);

interface gridComponent extends storeComponent, routerComponent {
  activColor: string;
  newcolor: string;
  replacecolor: string;
  squareColors: number;
  colorLayerMatch: boolean;
  colorBorderMatch: boolean;
  colorList: string[];
  brandColor: string;
  replaceColors: (colorList: string[]) => void;
}

interface loadedGrid {
  id: number;
  name: string;
  colorList: string[][][];
  squareSize: number;
}

let component = null as null | gridComponent;
let delayTimerID = null as null | number;

const generateRandomGrid = () => {
  if (component === null) {
    return;
  }

  const width = component.$store.state.gridSize.width;
  const height = component.$store.state.gridSize.height;

  window.console.log({width, height});

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
        const randomColor =
            possibleColors[Math.floor(Math.random() * possibleColors.length)];
        window.console.log({randomColor, possibleColors});
        layerColors.push(randomColor);
      }
      rowColors.push(layerColors);
    }
    colorList.push(rowColors);
  }
  component.$store.commit("replaceGridColorList", colorList);
};

const maybeStartTimer = () => {
  const newWidth = component.$store.state.gridSize.width;
  const newHeight = component.$store.state.gridSize.height;

  const oldWidth = component.$store.state.gridColorList[0].length;
  const oldHeight = component.$store.state.gridColorList.length;

  if (newWidth === oldWidth && newHeight === oldHeight) {
    return;
  }
  startTimer();
};

const uppdateGrid = async () => {
  if (component.$route.name == "random") {
    generateRandomGrid();
    return;
  }

  //component.$route.params.id
  if (component.$route.name == "load") {
    let respons = await fetch(
        "http://localhost:8000/load?id=" + component.$route.params.id,
        {
          credentials: "include"
        }
    );

    if (!respons.ok) {
      alert("Load failed.");
      return;
    }

    let loadRespons = (await respons.json()) as loadedGrid;

    //alert("LOAD!! " + loadRespons.name);

    component.$store.commit("setGridSize", {
      height: loadRespons.colorList.length,
      width: loadRespons.colorList[0].length,
      size: loadRespons.squareSize
    });

    component.$store.commit("replaceGridColorList", loadRespons.colorList);
    const colors: string[] = [];

    for (const rows of loadRespons.colorList) {
      for (const layers of rows) {
        for (const color of layers) {
          if (colors.indexOf(color) == -1) {
            colors.push(color);
          }
        }
      }
    }
    component.replaceColors(colors);
  }
};

const randomColor = () => {
  //"#" + (Math.random() * 0x1000000 + 0x1000000).toString(16).substr(1,6),
  const colorNumber = Math.random() * 6 * 256;

  if (colorNumber <= 1 * 256) {
    return "#" + (256 + colorNumber).toString(16).substr(1, 2) + "ff00";
  }

  if (colorNumber <= 2 * 256) {
    return "#" + colorNumber.toString(16).substr(1, 2) + "00ff";
  }

  if (colorNumber <= 3 * 256) {
    return "#ff" + colorNumber.toString(16).substr(1, 2) + "00";
  }
  if (colorNumber <= 4 * 256) {
    return "#00" + colorNumber.toString(16).substr(1, 2) + "ff";
  }

  if (colorNumber <= 5 * 256) {
    return "#00ff" + colorNumber.toString(16).substr(1, 2);
  }

  return "#ff00" + colorNumber.toString(16).substr(1, 2);
};

const startTimer = () => {
  if (delayTimerID != null) {
    clearTimeout(delayTimerID);
  }
  delayTimerID = setTimeout(uppdateGrid, 500);
};

export default {
  name: "mainPage",
  components: {
    PatternsSettings,
    TempratureSettings,
    ImageSettings,
    SquerSettings,
    CanvasGrid,
    ColorPicker
  },
  created() {
    ((this as unknown) as storeComponent).$store.watch(
        (state: yarnStoreState) => state.gridSize,
        maybeStartTimer
    );
  },
  data: () => ({
    activColor: "ColorWheel",
    newcolor: randomColor(),
    replacecolor: "",
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
    replaceColors(colorList: string[]) {
      component.colorList = colorList;
    },
    removeColor(color: string) {
      if (component && component.colorList.indexOf(color) >= 0) {
        component.colorList = component.colorList.filter(row => row != color);
        startTimer();
      }
    },
    activColorToggle(event: Event) {
      const span = event.currentTarget as HTMLSpanElement;
      const name = span.getAttribute("data-name");

      if (component == null || name == null) {
        return;
      }
      component.activColor = name;
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
    -2px 0 0 #fff, 2px 0 0 #fff, 0 -2px 0 #fff, 0 2px 0 #fff, -1px 0 0 #fff,
    1px 0 0 #fff, 0 -1px 0 #fff, 0 1px 0 #fff;
  }

  .remove {
    border: 1px solid gray;
    padding: 3px;
    color: red;
    font-weight: bold;
  }
}

#ColorWheel {
  display: flex;
  flex-direction: column;

  > input {
    height: 50px;
    width: 302px;
    font-weight: bold;
    font-size: 1em;
  }
}

</style>
