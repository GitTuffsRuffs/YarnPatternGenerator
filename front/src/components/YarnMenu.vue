<template>
    <ul id="SideMenu">
        <li><router-link to="/random">By Random</router-link></li>
        <li>By Patterns</li>
        <li>By Forms</li>
        <li>By Import</li>
        <li>By Temperature</li>
        <li>Free Paint</li>
    </ul>
</template>
<script>
    export default {
        name: 'YarnMenu'
    }
</script>
<style lang="less">

    #SideMenu {
        margin: 0;
        padding: 0;
        padding-top: 45px;
        list-style: none;
        font-size: 22px;
        font-family: 'Merienda', cursive;

        > li {
            margin-bottom: 10px;
            padding: 10px;
            padding-right: 70px;
            clip-path: polygon(0 0, calc(100% - 40px) 0, calc(100% - 60px) 100%, 0 100%);
            transition: clip-path .5s;

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
                background-color: #EBE480;
            }

            &:nth-child(5) {
                background-color: #FFAE73;
            }

            &:nth-child(6) {
                background-color: #FF796C;
            }

            a {
                color: inherit;
                text-decoration: none;
            }
        }
    }

</style>