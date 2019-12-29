<template>
  <main id="MainProject">
    <div id="project">
      <h3>New Project</h3>

      <label>
        <span>Status:</span>
        <select>
          <!-- loop status from db? -->
          <option value="started">Started</option>
          <option value="paused">Paused</option>
          <option value="done">Done</option>
          <option value="canceled">Canceled</option>
        </select>
      </label>

      <label><span>Name:</span><input type="text" name="name" /> </label>
      <label><span>Yarn:</span><input type="text" name="yarn" /> </label>
      <label><span>Brand:</span><input type="text" name="brand" /> </label>
      <label
        ><span>Material:</span><input type="text" name="material" />
      </label>
      <label
        ><span>G (gram):</span><input type="number" name="gram" min="0" />
      </label>
      <label
        ><span>M (lenght):</span><input type="number" name="lenght" min="0"
      /></label>
      <label><span>Needles:</span><input type="text" name="needlse" /> </label>
      <label class="area"
        ><span>Notes:</span><textarea name="notes"></textarea>
      </label>
    </div>

    <div>
      <button type="button">
        <img :src="require('../assets/img/add-img.svg')" />
      </button>
    </div>
  </main>
</template>

<style lang="less">
#MainProject {
  display: flex;
  flex-grow: 1;
  margin-top: 40px;
  margin-right: 20px;
  margin-left: 20px;
  font-size: 16pt;
}

#MainProject > div {
  display: flex;
  background-color: #fdfdfd;
  border: solid #eeeeee 1px;
  margin: 5px;
  padding: 10px;
  border-radius: 2px;
  flex-direction: column;

  > button {
    background-color: transparent;
    border: none;
    margin: 35px;

    > img {
      height: 200px;
    }
  }
}

#project {
  background-color: #fdfdfd;
  border: solid #eeeeee 1px;
  border-radius: 2px;
  flex-grow: 1;

  > label {
    display: flex;
    margin-bottom: 10px;

    &.area {
      flex-grow: 1;
      flex-direction: column;
      margin-bottom: 0;

      > textarea {
        flex-grow: 1;
        width: 100%;
      }
    }

    > span {
      width: 150px;
      padding-left: 10px;
    }

    > input {
      flex-grow: 1;
    }

    > select {
      flex-grow: 1;
    }
  }
}
</style>

<script>
export default {
  name: "random"
};
</script>
