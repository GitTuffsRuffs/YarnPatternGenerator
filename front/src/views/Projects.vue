<template>
  <main id="MainBord" v-if="$store.state.user.id > 0">
    <div id="NewProject">
      <router-link to="/newproject">New Project</router-link>
    </div>

    <div id="ProjectBord">
      <div>
        <div class="ProjectHeader">
          <span>Projects</span>
          <span>Started</span>
        </div>

        <ol>
          <!-- Order by date, created project -->
          <li v-for="project in $store.state.projects" v-bind:key="project.id">
            {{ project.name }}
          </li>
        </ol>
      </div>

      <div class="ProjectHeader">
        <span>Projects</span>
        <span>Paused</span>
      </div>

      <div class="ProjectHeader">
        <span>Projects</span>
        <span>Done</span>
      </div>

      <div class="ProjectHeader">
        <span>Projects</span>
        <span>Canceled</span>
      </div>
    </div>

    <div id="ImageBord">
      Images
    </div>
  </main>
</template>


<script lang="ts">
import {storeComponent, yarnStoreState} from "../store";

let component: projectComponent|any= null;

interface projectComponent extends storeComponent {
  name: string;
  status: string;
}

const loadProjects = async () => {
  let respons = await fetch(component.$store.state.apiUrl.toString() + "projects", { credentials: 'include' });

  if (!respons.ok) {
    alert("Failed to get projects");
    return;
  }

  let projectSettings = await respons.json();
  component.$store.commit("proejcts", projectSettings);
};

export default {
  name: "projects",
  created() {
    (this as unknown as storeComponent).$store.watch(
        (state: yarnStoreState) => state.user,
        loadProjects
    );
  },
  mounted() {
    component = this;

    if (component.$store.state.user.id === 0) {
      component.$store.commit("showMessedgeBox", "Login");
    } else {
      loadProjects();
    }
  }
};
</script>

<style lang="less">
#MainBord {
  display: flex;
  margin-right: 20px;
  margin-left: 20px;
  font-size: 16pt;
  flex-wrap: wrap;
  align-content: flex-start;
  flex-grow: 1;
}

#MainBord > div {
  flex-direction: row;
  background-color: #fdfdfd;
  border: solid #eeeeee 1px;
  margin: 5px;
  padding: 5px;
  border-radius: 2px;
}

#ProjectBord {
  flex-grow: 1;
}

.ProjectHeader {
  display: flex;
  flex-direction: row;
  border-bottom: 2px dashed #dddddd;

  > span:first-child {
    flex-grow: 1;
  }
}

ol {
  list-style-type: none;
}

#MainBord > #NewProject {
  background-color: #ffb2d8;
  transition: background-color 0.5s;
  font-size: 16pt;
  text-align: center;
  margin: 20px;
  clip-path: polygon(1.5em 0, 100% 0, calc(100% - 1em) 2em, 0.5em 2em);
  width: 100%;

  a {
    color: inherit;
    text-decoration: none;
  }

  &:hover {
    background-color: #ff77b4;
  }
}
</style>
