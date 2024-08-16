<template>
    <body>
        <div class="formBorder">
            <input type="text" v-model="myId">
            <!-- 축약식 : <input type="text" :value="myId"> -->
            <input type="text" v-model="myPassword">
        </div>
        <div>
            <button type="button" @click="loginClick">LOGIN</button>
        </div>
    </body>
</template>

<script>
    export default{
        name: 'LoginPage',
        data() {
            return{
                myId : '',
                myPassword: ''
            }
        },
        computed: {

        },
        methods: {
            loginClick() {
                alert("login 버튼 클릭 이거 브랜치 변경 후--> "+this.myId);
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../assets/styles/LoginPage.scss";
</style>