<template>
    <main id="MainRandom">
        <div id="Settings">

            <div id="SettingsAll">

                <div id="Square">
                    <span>Square</span>
                    <ol>
                        <li>Height</li>
                        <li>Width</li>
                        <li>Square size</li>
                        <li>Data: H cm - W cm</li>
                    </ol>
                </div>

                <div>
                    <span>Centimeter</span>
                    <ol>
                        <li>Height</li>
                        <li>Width</li>
                        <li>Square size</li>
                        <li>Data: H cm - W cm</li>
                    </ol>
                </div>

                <input type="checkbox" name="c2c" value="c2c">Coner to coner chart
            </div>
        </div>

        <div id="Grid">
            2.Grid
        </div>

        <div id="Color">
            <div id="ColorSettings">
                Color par square [           ]
                [] Color (not be same next to eache othere)
            </div>

            <div>
            Database droppdown brand [ brands ]
            Color wheel []

            added color (color amunt, small, medium, allot)
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

    #Square {
        border: solid #333333 2px;
    }
</style>

<script>
    export default {
        name: "random"
    };
</script>
