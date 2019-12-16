<template>
    <div id="app">
        <YearnHeader/>

        <div id="ContentAll">
            <YarnMenu/>
            <router-view/>
        </div>

        <YarnFooter/>
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

</style>
<script>
    import YearnHeader from "./components/YearnHeader";
    import YarnMenu from "./YarnMenu";
    import YarnFooter from "./YarnFooter";

    export default {
        components: {YarnFooter, YarnMenu, YearnHeader}
    }
</script>