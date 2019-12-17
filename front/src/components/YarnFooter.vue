<template>
    <footer id="Footer">
        Made by: Tuffs Ruffs @<a href="https://github.com/GitTuffsRuffs/YarnPatternGenerator">GitTuffsRuffs/YarnPatternGenerator</a>
    </footer>
</template>
<script>
    export default {
        name: 'YarnFooter'
    }
</script>
<style lang="less">

    footer {
        text-align: center;
        padding: 5px;
        font-size: 12pt;
        color: #333333;
        border-top: 3px dashed #dddddd;
        background-color: rgba(255,255,255,0.5);

        a {
            color: inherit;
            text-decoration: none;
        }
    }

</style>