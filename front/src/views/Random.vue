<template>
    <main id="MainRandom">
        <div id="Settings">

            <div id="SettingsAll">

                <div id="Square">
                    <span class="ProjectHeader">Square</span>
                    <ol>
                        <li>Height</li>
                        <li>Width</li>
                        <li>Square size</li>
                        <li>Data: H cm - W cm</li>
                    </ol>
                </div>

                <div>
                    <span class="ProjectHeader">Centimeter</span>
                    <ol>
                        <li>Height</li>
                        <li>Width</li>
                        <li>Square size</li>
                        <li>Data: H cm - W cm</li>
                    </ol>
                </div>

                <label>
                    <input type="checkbox" name="c2c" value="c2c">
                    <span>Coner to coner chart</span>
                </label>
            </div>
        </div>

        <div id="Grid">
            2.Grid
        </div>

        <div id="Color">
            <div id="ColorSettings">
                <span>Color par square </span>
                <span>[] Color (not be same next to eache othere)</span>
            </div>

            <div>
                <span>Database droppdown brand [ brands ]</span>
                <span>Color wheel []</span>
                <span> added color (color amunt, small, medium, allot)</span>
            </div>

        </div>

    </main>
</template>

<style lang="less">
    #MainRandom {
        display: flex;
        flex-direction: row;
        flex-grow: 1;
        margin-right: 20px;
        margin-left: 20px;
        font-size: 1em;
    }

    #MainRandom > div {
        background-color: #fdfdfd;
        border: solid #eeeeee 1px;
        margin: 5px;
        padding: 5px;
        border-radius: 2px;
    }

    #Grid {
        flex-grow: 1;
    }

    #SettingsAll > div {
        padding-left: 5px;
        padding-right: 20px;
    }

    .ProjectHeader {
        display: flex;
        flex-direction: row;
        border-bottom: 2px dashed #dddddd;
    }

    #Color > div > span {
        display: flex;
        flex-direction: row;
    }
</style>

<script>
    export default {
        name: "random"
    };
</script>
