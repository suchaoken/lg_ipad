<template>
    <div class="ipad">
        <div>ipad Client</div>
        <div class="pageOne" @click="toPageOne">PageOne</div>
        <div class="pageTwo" @click="toPageTwo">pageTwo</div>
        <div class="pageThree" @click="toPageThree">pageThree</div>
    </div>
</template>

<script>
import { useWebsocket } from "../hooks";
export default {
    data() {
        return {
            ws: "",
        };
    },
    mounted() {
        this.ws = useWebsocket(handleMessage);
        function handleMessage(e) {
            let data = JSON.parse(e.data);
            if (data.message == "ipad1") {
            } else if (data.message == "ipad2") {
            } else if (data.message == "ipad3") {
            }
        }
    },
    methods: {
        toPageOne() {
            this.ws.send(
                JSON.stringify({
                    message: "ipad1",
                    DateTime: new Date().getTime(),
                })
            );
        },
        toPageTwo() {
            this.ws.send(
                JSON.stringify({
                    message: "ipad2",
                    DateTime: new Date().getTime(),
                })
            );
        },
        toPageThree() {
            this.ws.send(
                JSON.stringify({
                    message: "ipad3",
                    DateTime: new Date().getTime(),
                })
            );
        },
    },
};
</script>
<style scoped>
.pageOne {
    height: 50px;
    width: 100px;
    float: left;
    margin-right: 20px;
    background-color: rgb(144, 214, 14);
}

.pageTwo {
    height: 50px;
    width: 100px;
    float: left;
    margin-right: 20px;
    background-color: rgb(226, 235, 210);
}
.pageThree {
    height: 50px;
    width: 100px;
    float: left;
    margin-right: 20px;
    background-color: rgb(218, 180, 12);
}
</style>