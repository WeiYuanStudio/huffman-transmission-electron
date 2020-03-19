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
                    <div class="message-null-icon">
                        <img src="@/assets/mail-icon.svg">
                        <h2>Message Box</h2>
                    </div>
                </div>
                <div v-else>
                    <div class="message-info-header">
                        <h2 class="message-info-title">Message Hash {{showMessageHash}}</h2>
                        <img v-on:click="showMessageHash = ''" class="icon" src="@/assets/window-close.svg">
                    </div>
                    <MessageBoxBody class="message-box-body" v-bind:showMessageHash="showMessageHash" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import MessageItem from '@/components/MessageItem.vue'
import MessageBoxBody from '@/components/MessageBoxBody.vue'

export default {
    name: 'message-box',
    components: {
        MessageItem,
        MessageBoxBody
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
                .catch(error => {
                    console.log('Can not connect to core');
                    console.log(error);
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
    min-width: 180px;
    max-width: 250px;
    border-right: solid 1px black;
}

.message-box-body {
    flex: 1;
}

.list-row-header {
    height: 10vh;
    border-bottom: solid 1px black;
    display: flex;
    flex-flow: row;
}

.list-row-header * {
    margin: auto 4px;
}

.message-list {
    /* Todo Fix message list overflow */
}

.message-null-icon {
    display: flex;
    flex-flow: column;
    margin: auto;
    margin-top: 12%;
    filter: opacity(0.3);
}

.message-null-icon img {
    width: 200px;
    height: auto;
    margin: auto;
}

.message-null-icon h2 {
    margin: 10px auto;
}

.message-info {
    width: -webkit-fill-available;
    height:-webkit-fill-available;
    display: flex;
    flex-flow: column;
}

.message-info-header {
    width: 100%;
    height: 10vh;
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
    margin: none;
}
</style>
