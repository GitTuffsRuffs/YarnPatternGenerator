<template>
  <main id="MainRandom">
    <div id="Settings">1.Settings</div> <!-- TODO: Component for all settings -->
    <div id="Grid">2.Grid</div> <!-- TODO: Add component for gridd -->
    <div id="Color">3.Colors</div> <!-- TODO: Add component for colors -->
    <!-- TODO; Add code or compontent for painting in gridd -->

    <!-- Alott like random but free paint insted of random generated -->

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
