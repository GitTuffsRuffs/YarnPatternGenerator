<template>
  <div id="ImageSettings" v-if="$route.name === 'image' ">
        <span>
          <span>Image inport:</span>
        </span>

    <label>
      <span>Import image</span>
      <input type="file">
    </label>
  </div>
</template>
<script lang="ts">
export default {
  name: 'ImageSettings'
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

#selectedColors li {
  display: flex;
  margin-bottom: 3px;

}
</style>