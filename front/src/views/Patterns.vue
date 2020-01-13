<template>
  <main id="MainRandom">
    <div id="Settings">1.Settings

      <!-- TODO: Component for picking a pattenr
        * Box list of little pictures of patterns -->
      <div id="PatternsSettings">
        <span class="ProjectHeader">
          <span>Patterns</span>
        </span>

        <div>
          <!-- Boxes -->
          <button class="PatternBox" type="button" value="Imgage1">
            <img src="../assets/img/patterns/pattern1.png"/>
          </button>

          <button class="PatternBox" type="button" value="Imgage2">
            <img src="../assets/img/patterns/pattern2.png"/>
          </button>

          <button class="PatternBox" type="button" value="Imgage3">
            <img src="../assets/img/patterns/pattern3.png"/>
          </button>

          <button class="PatternBox" type="button" value="Imgage4">
            <img src="../assets/img/patterns/pattern4.png"/>
          </button>
        </div>

        <div>
          <button class="PatternBox" type="button" value="Imgage5">
            <img src="../assets/img/patterns/pattern5.png"/>
          </button>

          <button class="PatternBox" type="button" value="Imgage6">
            <img src="../assets/img/patterns/pattern6.png"/>
          </button>

          <button class="PatternBox" type="button" value="Imgage7">
            <img src="../assets/img/patterns/pattern7.png"/>
          </button>

          <button class="PatternBox" type="button" value="Imgage8">
            <img src="../assets/img/patterns/pattern8.png"/>
          </button>
        </div>

        <div>
          <button class="PatternBox" type="button" value="Imgage9">
            <img src="../assets/img/patterns/pattern9.png"/>
          </button>

          <button class="PatternBox" type="button" value="Imgage10">
            <img src="../assets/img/patterns/pattern10.png"/>
          </button>
        </div>

      </div>

      <!--
           * Paint pattern on grid
            -> Röd/Grön/Blue/Yellow (depending on pattens color needed) colors if color list is empty
            -> not empty take color and random
            -> Colors can be changed with paint free.
           -->
    </div> <!-- TODO: Component for all settings -->
    <div id="Grid">2.Grid</div> <!-- TODO: Add component for gridd -->
    <div id="Color">3.Colors <!-- TODO: Add component for colors --> </div>

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

#PatternsSettings {
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

.PatternBox {
  padding: 0;
  margin: 3px;
}
</style>

<script>
export default {
    name: "random"
};
</script>
