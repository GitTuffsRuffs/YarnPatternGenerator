<template>
  <main id="MainRandom">
    <div id="Settings">1.Settings

      <!-- TODO: Add settings component -->

      <!-- TODO: Add Forms component -->
      <!-- 5x5 small grid where you can paint a pixel form
          This form i later used for generating blankets.
          Add a list of forms -->
    </div>
    <div id="Grid">2.Grid</div>
    <div id="Color">3.Colors</div>
  </main>
</template>

<style lang="less">
#MainRandom {
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  margin-right: 20px;
  margin-left: 20px;
}

#MainRandom > div {
  background-color: #fdfdfd;
  border: solid #eeeeee 1px;
  margin: 5px;
  padding: 5px;
  border-radius: 2px;
}

#Grid {
  flex-grow: 1;
}
</style>

<script>
export default {
    name: "random"
};
</script>
