<template>
    <div id="Login">
        <label>
            <span>Username:</span>
            <input v-model="username" type="email"/>
        </label>

        <label>
            <span>Password:</span>
            <input v-model="password" type="password"/>
        </label>

        <div id="LoginButton" type="button" @click="login">Login</div>
    </div>
</template>

<script>
    export default {
        name: 'Login',

        data: ()=> ({
            username: "",
            password: "",
        }),

        methods: {
            login() {
                window.console.log(["Login", this.username, this.password]);
            },
        },
    }
</script>

<style lang="less">

    #Login {
        display: flex;
        flex-direction: column;
        margin: 20px;
        font-size: 19pt;
        align-items: center;
        justify-content: center;
        height: 100%;
        flex-grow: 1;

        > label > span {
            display: inline-block;
            width: 110px;
        }

        > label > input {
            font-size: 16pt;
            padding-left: 2px;
            margin-left: 2px;
        }
    }

    #LoginButton {
        background-color: #ffb2d8;
        transition: background-color .5s;
        font-size: 16pt;
        text-align: center;
        margin: 20px;
        width: 280px;
        padding: 3px;
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
