<template>
  <main id="MainHome">
    <div id="Info">
      <p>
        On this page you can use some of our features to generate a pattern for
        blankets of different sizes for all of you who like granny squares.
      </p>
      <p>
        This web app is built with Html, less, Vue, Typescript, Laravel / php,
        MariaDB / SQL.
      </p>
      <p>
        You can also log in if you create your own account to save generated
        designs and other projects that you have active.
      </p>
      <p>You can create an account by pressing the button below.</p>
    </div>
    <div id="Account"><a href="">Create your account</a></div>
    <div id="SlideShow">"Slide show pictures"</div>
  </main>
</template>

<style lang="less">
#MainHome {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: center;
}

#MainHome > div {
  background-color: #fdfdfd;
  border: solid #eeeeee 1px;
  margin: 10px;
  padding: 5px;
  border-radius: 2px;
}

#MainHome > #Info {
  width: 600px;
  font-size: 16pt;
  padding: 30px;
  margin-top: 40px;
}

#MainHome > #Account {
  background-color: #ffb2d8;
  transition: background-color 0.5s;
  font-size: 16pt;
  text-align: center;
  margin: 20px;
  width: 280px;
  clip-path: polygon(1.5em 0, 100% 0, calc(100% - 1em) 2em, 0.5em 2em);

  a {
    color: inherit;
    text-decoration: none;
  }

  &:hover {
    background-color: #ff77b4;
  }
}
</style>

<script>
// @ is an alias to /src
export default {
  name: "home"
};
</script>
