<template>
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
              Data: {{ (height * size).toFixed(2) }} × {{ (width * size).toFixed(2) }} cm
            </span>
          </li>
        </ol>
      </div>
    </div>

<!--
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
-->
<!--
    <div>
      <span class="ProjectHeader" @click="acctiveBoxToggle" data-name="Cent">Other</span>
      <label>
        <input type="checkbox" name="c2c" value="c2c"/>
        <span>Coner to coner chart</span>
      </label>
    </div>
-->
    <slot></slot>
  </div>
</template>

<script lang="ts">
import {gridSize, storeComponent, yarnStoreState} from "../../store";

let component: squerSettingsComponent | any = null;

interface squerSettingsComponent extends storeComponent, gridSize {
  activeBox: string;
}

const uppdateHandeler = () => {
  component.$store.commit(
    "setGridSize",
    {
      height: +component.height,
      width: +component.width,
      size: +component.size
    });
}

export default {
  name: 'SquerSettings',
  data: () => ({
    activeBox: "Square",
    height: 1,
    width: 1,
    size: 0
  }),
  methods: {
    acctiveBoxToggle(event: Event) {
      const span = event.currentTarget as HTMLSpanElement;
      const name = span.getAttribute("data-name");

      if (component == null || name == null) {
        return;
      }
      component.activeBox = name;
    }
  },
  mounted() {
    component = this;

    const update = () => {
      const gridSize = (component as storeComponent).$store.state.gridSize;
      component.height = gridSize.height;
      component.width = gridSize.width;
      component.size = gridSize.size;
    };

    (component as storeComponent).$store.watch(
      (state: yarnStoreState) => state.gridSize,
      update
    );

    update();
  },
  watch: {
    height: uppdateHandeler,
    width: uppdateHandeler,
    size: uppdateHandeler
  }
};
</script>

<style lang="less">

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
}
</style>