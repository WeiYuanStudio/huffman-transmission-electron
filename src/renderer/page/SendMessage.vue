<template>
    <div id="wrapper">
        <div class="message-info">
            <label for="ip">Remote IP:</label>
            <input id="ip" type="text" v-model="ip" />
            <label for="title">Title:</label>
            <input id="title" type="text" v-model="title" />
            <label for="author">Author:</label>
            <input id="author" type="text" v-model="author" />
            <button class="send-btn" v-on:click="send">Send</button>
        </div>
        <textarea class="message-content" v-model="data" />
    </div>
</template>

<script>
export default {
    name: 'send-message',
    data: function() {
        return {
            ip: '',
            title: '',
            author: '',
            data: ''
        }
    },
    methods: {
        send: function() {
            console.log('test');
        }
    }
}
</script>

<style scoped>
input {
    width: 8em;
    padding: 1px 4px;
    border: solid 1px black;
    border-radius: 8px;
}

button {
    padding: 1px 4px;
    border: solid 1px black;
    border-radius: 8px;
}

.message-info * {
    margin: 2px;
}

.message-content {
    padding: 10px;
    border: solid 1px black;
    border-radius: 10px;
    margin: 20px;
    width: -webkit-fill-available;
    height: -webkit-fill-available;
    max-height: 400px;
    max-width: 600px;
}

#wrapper {
    height: 100vh;
    padding: 30px 80px;
    width: 100vw;
}
</style>
