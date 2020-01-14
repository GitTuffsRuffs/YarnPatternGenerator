<template>
  <div id="PatternsSettings" v-if="$route.name === 'patterns' ">
        <span class="ProjectHeader">
          <span>Patterns</span>
        </span>

    <div>
      <!-- Boxes -->
      <button class="PatternBox" type="button" value="Imgage1">
        <img src="../../assets/img/patterns/pattern1.png"/>
      </button>

      <button class="PatternBox" type="button" value="Imgage2">
        <img src="../../assets/img/patterns/pattern2.png"/>
      </button>

      <button class="PatternBox" type="button" value="Imgage3">
        <img src="../../assets/img/patterns/pattern3.png"/>
      </button>

      <button class="PatternBox" type="button" value="Imgage4">
        <img src="../../assets/img/patterns/pattern4.png"/>
      </button>
    </div>

    <div>
      <button class="PatternBox" type="button" value="Imgage5">
        <img src="../../assets/img/patterns/pattern5.png"/>
      </button>

      <button class="PatternBox" type="button" value="Imgage6">
        <img src="../../assets/img/patterns/pattern6.png"/>
      </button>

      <button class="PatternBox" type="button" value="Imgage7">
        <img src="../../assets/img/patterns/pattern7.png"/>
      </button>

      <button class="PatternBox" type="button" value="Imgage8">
        <img src="../../assets/img/patterns/pattern8.png"/>
      </button>
    </div>

    <div>
      <button class="PatternBox" type="button" value="Imgage9">
        <img src="../../assets/img/patterns/pattern9.png"/>
      </button>

      <button class="PatternBox" type="button" value="Imgage10">
        <img src="../../assets/img/patterns/pattern10.png"/>
      </button>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: 'PAtternsSettings'
}
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