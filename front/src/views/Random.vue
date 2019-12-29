<template>
  <main id="MainRandom">
    <div id="SettingsAll">
      <div>
        <span
          class="ProjectHeader"
          @click="acctiveBoxToggle"
          data-name="Square"
        >
          <span>Square</span>
          <span v-if="activeBox !== 'Square'"> ▷ </span>
          <span v-if="activeBox === 'Square'"> ▼ </span>
        </span>
        <div v-if="activeBox === 'Square'">
          <span>Full blanket in square:</span>
          <ol>
            <li>
              <label>
                <span>Height:</span>
                <input v-model="height" type="number" min="1" max="100"/>
              </label>
            </li>

            <li>
              <label>
                <span>Width:</span>
                <input v-model="width" type="number" min="1" max="100"/>
              </label>
            </li>

            <li>
              <label>
                <span>Square size cm:</span>
                <input v-model="size" type="number" step="0.01" min="0.01"/>
              </label>
            </li>

            <li>
              <span>
                Data: {{ (height * size).toFixed(2) }} ×
                {{ (width * size).toFixed(2) }} cm
              </span>
            </li>
          </ol>
        </div>
      </div>
      <!-- Square -->
      <div>
        <span class="ProjectHeader" @click="acctiveBoxToggle" data-name="Cent">
          <span>Centimeter</span>
          <span v-if="activeBox !== 'Cent'"> ▷ </span>
          <span v-if="activeBox === 'Cent'"> ▼ </span>
        </span>
        <div v-if="activeBox === 'Cent'">
          <span>Full blanket in cm:</span>
          <ol>
            <li>
              <label>
                <span>Height cm:</span>
                <input v-model="height" type="number"/>
              </label>
            </li>

            <li>
              <label>
                <span>Width cm:</span>
                <input v-model="width" type="number"/>
              </label>
            </li>

            <li>
              <label>
                <span>Square size cm: {{ height * width }}</span>
              </label>
            </li>

            <li>
              <span>
                Data: {{ (height * size).toFixed(2) }} ×
                {{ (width * size).toFixed(2) }} cm
              </span>
            </li>
          </ol>
        </div>
      </div>
      <!-- Centimeters -->
      <div>
        <span class="ProjectHeader" @click="acctiveBoxToggle" data-name="Cent">Other</span>
        <label>
          <input type="checkbox" name="c2c" value="c2c"/>
          <span>Coner to coner chart</span>
        </label>
      </div>
      <!-- Other -->
    </div>

    <div id="Grid">
      <!-- Grid -->
      <CanvasGrid/>
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
        <ul>
          <li v-for="color in colorList" v-bind:key="color">
            <span v-bind:style="{backgroundColor: color}">____</span>
            <input type="text" v-bind:value="color" readonly/>
            <span  @click="removeColor(color)">-</span>
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
          <span>Color Wheel:::::HERE</span><br/>
          <!-- TODO: fix br in css -->

          <span>Added color (color amunt, small, medium, allot)</span><br/>

          <input type="button" value="+Red" @click="addColor('red')"/>
          <input type="button" value="-Red" @click="removeColor('red')"/>

          <input type="button" value="+Blue" @click="addColor('blue')"/>
          <input type="button" value="-Blue" @click="removeColor('blue')"/>

          <!-- TODO: fix br in css -->
          <br/>
          <!-- TODO: fix br in css -->
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
      </div><!-- Color by Brand -->
    </div>
  </main>
</template>

<script lang="ts">
import CanvasGrid from "../components/CanvasGrid.vue";
import {storeComponent} from "../store";

interface gridComponent extends storeComponent {
  activeBox: string;
  activColor: string;
  height: number;
  width: number;
  size: number;
  squareColors: number;
  colorLayerMatch: boolean;
  colorBorderMatch: boolean;
  colorList: string[];
  brandColor: string;
}

let component = null as null|gridComponent;
let delayTimerID = null as null|number;

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

export default {
  name: "random",
  components: {CanvasGrid},
  data: () => ({
    activeBox: "Square",
    activColor: "ColorWheel",

    height: 5,
    width: 5,
    size: 0,
    squareColors: 1,
    colorLayerMatch: true,
    colorBorderMatch: true,
    colorList: [],
    brandColor: "",
  }),
  methods: {
    addColor(color: string) {
      if (component && component.colorList.indexOf(color) < 0) {
        component.colorList.push(color);
        startTimer();
      }
    },
    addBrandColor() {
      if(component && component.brandColor != "") {
        this.addColor(component.brandColor);
      }
    },
    removeColor(color: string) {
      if (component && component.colorList.indexOf(color) >= 0) {
        component.colorList = component.colorList.filter( (row) => row != color);
        startTimer();
      }
    },

    acctiveBoxToggle(event: Event) {
      const span = event.currentTarget as HTMLSpanElement;
      const name = span.getAttribute("data-name");

      if(component == null || name == null) { return }
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

      if(component == null || name == null) { return }
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
    component = this as unknown as gridComponent;
    startTimer();
  },
  watch: {
    height: startTimer,
    width: startTimer,
    squareColors: startTimer,
    colorLayerMatch: startTimer,
    colorBorderMatch: startTimer,
  },

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
</style>
