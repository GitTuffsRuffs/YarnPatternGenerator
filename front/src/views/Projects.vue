<template>
    <main id="MainBord">

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
                <span>Dome</span>
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
        margin-right: 20px;
        margin-left: 20px;
        font-size: 16pt;
    }

    #MainBord > div {
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
</style>

<script>
    export default {
        name: "random"
    };
</script>
