<template>
  <div id="TempratureSettings" v-if="$route.name === 'temperature'">

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
</template>
<script lang="ts">
export default {
  name: 'TempratureSettings'
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