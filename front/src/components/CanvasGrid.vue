<template>
  <canvas id="GridCanvas"></canvas>
</template>

<script lang="ts">
const drawCanvas = (colorList: string[][][]) => {
  const squerRows = colorList.length;
  const squerColums = colorList[0].length;
  //window.console.log({squerRows, squerColums});

  const gridCanvas = document.getElementById("GridCanvas") as HTMLCanvasElement;
  gridCanvas.height = gridCanvas.clientHeight;
  gridCanvas.width = gridCanvas.clientWidth;

  let squearHeight = Math.floor(gridCanvas.height / squerRows);
  let squearWidth = Math.floor(gridCanvas.width / squerColums);
  let squearSize = Math.min(squearWidth, squearHeight);

  const context = gridCanvas.getContext("2d");
  context.clearRect(0, 0, gridCanvas.width, gridCanvas.height);

  for (let y = 0; y < squerRows; y++) {
    for (let x = 0; x < squerColums; x++) {
      const cellColors = colorList[y][x];
      const layerCount = cellColors.length;

      for (let l = 0; l < layerCount; l++) {
        let sx = x * squearSize;
        let sy = y * squearSize;
        let ss = squearSize;

        if (l > 0) {
          let offSet = l / 2 * (ss / layerCount);

          sx += offSet;
          sy += offSet;
          ss -= 2 * offSet;
        }

        const color = cellColors[l];
        context.fillStyle = "black";
        context.fillRect(sx, sy, ss, ss);

        context.fillStyle = color;
        context.fillRect(sx + 1, sy + 1, ss - 2, ss - 2);
      }
    }
  }
};

export default {
  name: "CanvasGrid",
  created() {
    this.$store.watch(
        (state) => state.gridColorList,
        drawCanvas
    );
  },
  mounted() {
    drawCanvas(this.$store.state.gridColorList);
  }
};
</script>

<style lang="less">
canvas {
  flex-grow: 1;
  border: 1px black solid;
  background-color: #6fa2e8;
}
</style>
