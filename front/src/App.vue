<template>
    <div id="app">
        <YearnHeader/>

        <div id="ContentAll">
            <YarnMenu/>

            <router-view/>
        </div>

        <footer id="Footer">
            Made by: Tuffs Ruffs @<a href="https://github.com/GitTuffsRuffs/YarnPatternGenerator">GitTuffsRuffs/YarnPatternGenerator</a>
        </footer>
    </div>
</template>

<style lang="less">
    body, #app {
        background-color: #f8f8f8;
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        margin: 0;
    }

    #ContentAll {
        display: flex;
        flex-direction: row;
        flex-grow: 1;
    }

    main {
        display: flex;
        flex-direction: row;
        flex-grow: 1;
    }

    main > div {
        background-color: #ffffff;
        border: solid #eeeeee 1px;
        margin: 10px;
        padding: 5px;
        border-radius: 2px;
    }

    #Grid {
        flex-grow: 1;
    }

    footer {
        text-align: center;
        padding: 5px;
        font-size: 12pt;
        color: #333333;
        border-top: 3px dashed #dddddd;
    }

    footer a {
        color: inherit;
        text-decoration: none;
    }
</style>
<script>
    import YearnHeader from "./components/YearnHeader";
    import YarnMenu from "./YarnMenu";

    export default {
        components: {YarnMenu, YearnHeader}
    }
</script>