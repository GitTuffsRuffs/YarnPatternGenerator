<template>
    <div id="app">
        <YearnHeader/>

        <div id="ContentAll">
            <ul id="SideMenu">
                <li>By Random</li>
                <li>By Patterns</li>
                <li>By Forms</li>
                <li>By Import</li>
                <li>By Temperature</li>
                <li>Free Paint</li>
            </ul>

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

    #SideMenu {
        margin: 0;
        padding: 0;
        padding-top: 45px;
        list-style: none;
        font-size: 22px;
        font-family: 'Merienda', cursive;
    }

    #SideMenu > li {
        margin-bottom: 10px;
        padding: 10px;
        padding-right: 70px;
        clip-path: polygon(0 0, calc(100% - 40px) 0, calc(100% - 60px) 100%, 0 100%);
        transition: clip-path .5s;
    }

    #SideMenu > li:hover {
        clip-path: polygon(0 0, 100% 0, calc(100% - 20px) 100%, 0 100%);
    }

    #SideMenu > li:nth-child(1) {
        background-color: #df87ff;
    }

    #SideMenu > li:nth-child(2) {
        background-color: #6fa2e8;
    }

    #SideMenu > li:nth-child(3) {
        background-color: #61ff8a;
    }

    #SideMenu > li:nth-child(4) {
        background-color: #EBE480;
    }

    #SideMenu > li:nth-child(5) {
        background-color: #FFAE73;
    }

    #SideMenu > li:nth-child(6) {
        background-color: #FF796C;
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

    export default {
        components: {YearnHeader}
    }
</script>