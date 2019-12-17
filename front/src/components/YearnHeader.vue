<template>
    <header id="TopMenu">
        <h1><router-link to="/">Yarn Pattern Generator</router-link></h1>

        <ul>
            <li><router-link to="/projects">My projects</router-link></li>
            <li>Login/Logut</li>
        </ul>
    </header>
</template>
<script>
    export default {
        name: 'YearnHeader'
    }
</script>
<style lang="less">

    header {
        display: flex;
        flex-direction: row;
        font-family: 'Merienda', cursive;
        border-bottom: 3px dashed #dddddd;
        margin-bottom: 20px;

        > h1 {
            flex-grow: 1;
            margin-top: 20px;
            margin-right: 20px;
            margin-left: 60px;
            margin-bottom: -10px;
            font-size: 38pt;

            a {
                color: inherit;
                text-decoration: none;
            }
        }

        > ul {
            display: flex;
            flex-direction: row;
            list-style: none;
            margin: 0;
            padding: 0;
            font-size: 16pt;

            > li {
                margin-right: 1em;
                margin-left: -2em;
                padding-top: 5px;
                padding-right: 1.5em;
                padding-left: 2em;
                clip-path: polygon(1.5em 0, 100% 0, calc(100% - 1em) 2em, 0.5em 2em);
                transition: clip-path .5s;

                &:hover {
                    clip-path: polygon(1.5em 0, 100% 0, calc(100% - 1.5em) 3em, 0 3em);
                }

                &:nth-child(1) {
                    background-color: #ffb2d8;
                }

                &:nth-child(2) {
                    background-color: #ff77b4;
                }

                a {
                    color: inherit;
                    text-decoration: none;
                }
            }
        }
    }

</style>