<template>
    <main id="MainBord">

        <div id="project">
            <h3>New Project</h3>

            <span>Name:</span><input type="text" name="name">
            <span>Yarn:</span><input type="text" name="yarn">
            <span>Brand:</span><input type="text" name="brand">
            <span>Material:</span><input type="text" name="material">
            <span>G (gram):</span><input type="number" name="gram" min="0">
            <span>M (lenght):</span><input type="number" name="lenght" min="0">
            <span>Needles:</span><input type="text" name="needlse">
            <span>Notes:</span><input type="text" name="notes">

        </div>

        <div>
            <input type="button" name="img" value="Add Image"/>
            Status:
            <select> <!-- loop status from db? -->
                <option value="started">Started</option>
                <option value="paused">Paused</option>
                <option value="done">Done</option>
                <option value="canceled">Canceled</option>
            </select>

        </div>

    </main>
</template>

<style lang="less">
    #MainBord {
        flex-grow: 1;
        margin-top: 40px;
        margin-right: 20px;
        margin-left: 20px;
        font-size: 16pt;
    }

    #MainBord > div {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        padding-left: 20px;
    }

    #project {
        background-color: #fdfdfd;
        border: solid #eeeeee 1px;
        border-radius: 2px;
    }

</style>

<script>
    export default {
        name: "random"
    };
</script>
