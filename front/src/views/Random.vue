<template>
    <main id="MainRandom">
        <div id="Settings">1.Settings</div>
        <div id="Grid">2.Grid</div>
        <div id="Color">3.Colors</div>
    </main>
</template>

<style lang="less">
    #MainRandom {
        display: flex;
        flex-direction: row;
        flex-grow: 1;
    }

    #MainRandom > div {
        background-color: #fdfdfd;
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
    export default {
        name: "random"
    };
</script>
