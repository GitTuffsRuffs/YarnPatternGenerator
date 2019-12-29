<template>
  <div id="shadow" v-if="messageBox" @click="hideMessedgeBox">
    <div id="messedgeBox">
      <button @click="hideMessedgeBox">X</button>
      <Login v-if="messageBox === 'Login'" />
    </div>
  </div>
</template>
<script>
import Login from "./Login";

export default {
  name: "Shadow",
  components: { Login },
  computed: {
    messageBox() {
      return this.$store.state.messageBox;
    }
  },

  methods: {
    hideMessedgeBox(event) {
      //window.console.log([event.target, event.currentTarget]);
      if (event.target === event.currentTarget) {
        this.$store.commit("hideMessedgeBox");
      }
    }
  }
};
</script>
<style lang="less">
#app > #shadow {
  background-color: rgba(0, 0, 0, 0.6);
  position: absolute;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;

  > #messedgeBox {
    background-color: white;
    min-height: 300px;
    min-width: 500px;
    position: relative;
    border-radius: 10px;
    display: flex;
    flex-direction: column;

    > button {
      font-size: 16pt;
      position: absolute;
      right: 5px;
      top: 5px;
      border: 0;
      background: transparent;
      font-weight: bold;
      color: red;
    }
  }
}
</style>
