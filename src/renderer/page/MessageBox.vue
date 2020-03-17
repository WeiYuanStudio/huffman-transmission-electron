<template>
    <div id="wrapper">
        <div class="main">
            <div class="list-row">
                <div class="list-row-header">
                    <h2>Message List</h2>
                    <img v-on:click="getMessages" class="icon refresh-icon" src="@/assets/refresh.svg">
                </div>
                <div class="message-list">
                    <div v-for="(message, index) in messages" v-bind:key="index">
                        <MessageItem v-bind:message="message" v-bind:showMessageHash.sync="showMessageHash" />
                    </div>
                </div>
            </div>
            <div class="message-info">
                <div v-if="showMessageHash == ''">
                    None
                </div>
                <div v-else>
                    <div class="message-info-header">
                        <h2 class="message-info-title">Message Hash {{showMessageHash}}</h2>
                        <img v-on:click="showMessageHash = ''" class="icon" src="@/assets/window-close.svg">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import MessageItem from '@/components/MessageItem.vue'

export default {
    name: 'message-box',
    components: {
        MessageItem
    },
    data: function() {
        return {
            messages: [],
            showMessageHash: ''
        }
    },
    methods: {
        getMessages: function() {
            console.log('Get messages from core');
            this.$http
                .get('http://localhost:8080/huffman_api/message_list')
                .then(response => {
                    console.log(response);
                    this.messages = response.data;
                })
        }
    },
    mounted: function() {
        this.getMessages();
    }
}
</script>

<style scoped>
button {
    padding: 1px 4px;
    border: solid 1px black;
    border-radius: 8px;
}

.list-row {
    height: 100vh;
    width: 20vw;
    min-width: 100px;
    max-width: 250px;
    border-right: solid 1px black;
}

.list-row-header {
    display: flex;
    flex-flow: row;
}

.list-row-header * {
    margin: 2px 4px;
}

.message-info {
    width: 100%;
    display: flex;
    flex-flow: column;
}

.message-info-header {
    width: 100%;
    display: flex;
    flex-flow: row;
    flex-wrap: nowrap;
    justify-content: space-between;
}

.message-info-title {
    margin: auto;
}

.icon {
    width: 20px;
    height: 20px;
    margin: auto 0px;
}

.refresh-icon:active {
    animation: 0.6s rotatefresh 1;
}

@keyframes rotatefresh {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
        transition-duration: 0.6s;
        transition: 0.6s;
    }
}

.main {
    display: flex;
    flex-flow: row;
}

#wrapper {
    height: 100vh;
    width: 100vw;
    margin: 0px 10px;
}
</style>
