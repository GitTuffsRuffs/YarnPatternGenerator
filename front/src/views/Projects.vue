<template>
    <main id="MainBord">
        <div id="NewProject"><router-link to="/newproject">New Project</router-link></div>

        <div id="ProjectBord">
            <div>
                <div class="ProjectHeader">
                    <span>Projects</span>
                    <span/>
                    <span>Started</span>
                </div>

                <ol> <!-- Order by date, created project -->
                    <li>Blandet 1</li>
                    <li>Blandet Tetris</li>
                    <li>Blandet 22</li>
                    <li>Blandet Sommar</li>
                </ol>
            </div>

            <div class="ProjectHeader">
                <span>Projects</span>
                <span/>
                <span>Paused</span>
            </div>

            <div class="ProjectHeader">
                <span>Projects</span>
                <span/>
                <span>Done</span>
            </div>

            <div class="ProjectHeader">
                <span>Projects</span>
                <span/>
                <span>Canceled</span>
            </div>
        </div>

        <div id="ImageBord">
            Images
        </div>
    </main>
</template>

<style lang="less">
    #MainBord {
        display: flex;
        flex-direction: row;
        flex-grow: 1;
        margin-top: 100px;
        margin-right: 20px;
        margin-left: 20px;
        font-size: 16pt;
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
    }

    .ProjectHeader > span:nth-child(2) {
        flex-grow: 1;
    }

    ol {
        list-style-type: none;
    }

    #NewProject {
        background-color: #ffb2d8;
        transition: background-color .5s;
        font-size: 16pt;
        text-align: center;
        margin: 20px;
        width: 180px;
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
    export default {
        name: "random"
    };
</script>
