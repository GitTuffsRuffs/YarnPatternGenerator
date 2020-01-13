<template>
  <main id="MainRandom">
    <div id="Settings">
      <!-- TODO: Add component for Square settings -->
      <!-- TODO: Add component abut temp settings -->

      <div id="TempratureSettings">
        <!-- Title -->
        <span class="ProjectHeader">
          <span>Temperature</span>
        </span>
        <label>
          <span>Start date:</span>
          <input type="date"/>
        </label>

        <label>
          <span>End date:</span>
          <input type="date"/>
        </label>

        <label>
          <span>Location:</span> <!-- Google map locations? -->
          <input type="text"/>
        </label>
      </div>

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

#TempratureSettings {
  display: flex;
  flex-direction: column;

  > label > input { //TODO: Grow the inputs
    flex-grow: 1;
  }
}

.ProjectHeader {
  display: flex;
  flex-direction: row;
  border-bottom: 2px dashed #dddddd;
  margin-top: 5px;
}
</style>

<script>
export default {
    name: "random"
};
</script>
