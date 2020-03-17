<template>
    <div id="wrapper">
        <div class="message-list">
            <MessageItem />
        </div>
        <div class="message-info">
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
button {
    padding: 1px 4px;
    border: solid 1px black;
    border-radius: 8px;
}

#wrapper {
    height: 100vh;
    padding: 30px 80px;
    width: 100vw;
}
</style>
