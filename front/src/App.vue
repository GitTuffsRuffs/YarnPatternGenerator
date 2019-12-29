<template>
  <div id="app">
    <YearnHeader />
    <div id="ContentAll">
      <YarnMenu />
      <router-view />
    </div>
    <YarnFooter />
    <Shadow />
  </div>
</template>

<script>
import YearnHeader from "./components/YearnHeader";
import YarnMenu from "./components/YarnMenu";
import YarnFooter from "./components/YarnFooter";
import Shadow from "./components/Shadow";

export default {
  components: { Shadow, YarnFooter, YarnMenu, YearnHeader }
};
</script>

<style lang="less">
body,
#app {
  background-color: #f8f8f8;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin: 0;
}

#app {
  background-image: url("assets/img/Squer4.png");
  background-repeat: no-repeat;
}

#ContentAll {
  display: flex;
  flex-direction: row;
  flex-grow: 1;
}
</style>
