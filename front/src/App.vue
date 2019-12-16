<template>
    <div id="app">
        <div id="BGimage">
            <YearnHeader/>

            <div id="ContentAll">
                <YarnMenu/>
                <router-view/>
            </div>

            <YarnFooter/>
        </div>
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

    #BGimage {
        background-image: url("assets/img/Squer4.png");
        background-repeat: no-repeat;
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

</style>
<script>
    import YearnHeader from "./components/YearnHeader";
    import YarnMenu from "./components/YarnMenu";
    import YarnFooter from "./components/YarnFooter";

    export default {
        components: {YarnFooter, YarnMenu, YearnHeader}
    }
</script>