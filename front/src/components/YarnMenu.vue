<template>
  <ul id="SideMenu">
    <li @click="childClick">
      <router-link to="/random">By Random</router-link>
    </li>
    <!--
    <li @click="childClick">
      <router-link to="/patterns">By Patterns</router-link>
    </li>
    <li @click="childClick">
      <router-link to="/forms">By Forms</router-link>
    </li>
    <li @click="childClick">
      <router-link to="/image">By Image</router-link>
    </li>
    <li @click="childClick">
      <router-link to="/temperature">By Temperature</router-link>
    </li>
    <li @click="childClick">
      <router-link to="/freepaint">Free Paint</router-link>
    </li>
    <li></li>
    -->
    <li @click="saveGrid" v-if="$route.name !== 'home'">Save</li>
    <!-- If eny generators or othere changes show save button, Not on Home, or My project site. -->
  </ul>
</template>

<script lang="ts">
import childClick from "../functions/childClick";
import { storeComponent } from "../store";

let component: storeComponent | any = null;

export default {
  name: "YarnMenu",
  methods: {
    childClick,
    async saveGrid() {
      if (component == null) {
        alert(":C");
        return;
      }
      const size = component.$store.state.gridSize.size;
      const grid = component.$store.state.gridColorList;
      const name = prompt(
        "Name your project",
        new Date().toISOString().substr(0, 10)
      );

      let respons = await fetch(component.$store.state.apiUrl.toString() + "save", {
        method: "POST",
        body: JSON.stringify({
          size,
          grid,
          name
        }),
        credentials: "include"
      });

      if (!respons.ok) {
        alert("Save failed.");
        return;
      }

      const id = await respons.json();
      const url = component.$store.state.apiUrl.toString()+ "load/" + id; //TODO: FIX

      alert("Save ok!\n" + url);
      component.$router.push("/load/" + id);
    }
  },
  mounted() {
    component = this;
  }
};
</script>

<style lang="less">
#SideMenu {
  margin: 0;
  padding: 0;
  padding-top: 45px;
  list-style: none;
  font-size: 22px;
  font-family: "Merienda", cursive;

  > li {
    margin-bottom: 10px;
    padding: 10px;
    padding-right: 70px;
    cursor: pointer;
    clip-path: polygon(
      0 0,
      calc(100% - 40px) 0,
      calc(100% - 60px) 100%,
      0 100%
    );
    transition: clip-path 0.5s;

    &:hover {
      clip-path: polygon(0 0, 100% 0, calc(100% - 20px) 100%, 0 100%);
    }

    &:nth-child(1) {
      background-color: #df87ff;
    }

    &:nth-child(2) {
      background-color: #6fa2e8;
    }

    &:nth-child(3) {
      background-color: #61ff8a;
    }

    &:nth-child(4) {
      background-color: #ebe480;
    }

    &:nth-child(5) {
      background-color: #ffae73;
    }

    &:nth-child(6) {
      background-color: #ff796c;
    }

    &:nth-child(7) {
      background-color: rgba(255, 81, 83, 0);
    }
    &:nth-child(8) {
      background-color: rgb(255, 81, 83);
    }

    a {
      color: inherit;
      text-decoration: none;
    }
  }
}
</style>
